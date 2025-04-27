import cors from 'cors';
import express from 'express';
import route from './src/routes/index.js';
import db from './src/config/db.js'
import knexdb from './src/config/knex.js'

const app = new express()

app.use(cors)
app.use(route)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    console.log(results);
});

knexdb('users')
    .select('*')
    .then((rows) => {
        console.log("Knex result", rows);
    })
    .catch((error) => {
        console.error('Error querying the database:', error);
    })


app.listen(3000, () => {
    console.log("Server has been started on port ", 3000)
})