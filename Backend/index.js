import cors from 'cors';
import express from 'express';
import route from './src/routes/index.js';
const app = new express()

app.use(cors)
app.use(route)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log("Server has been started on port ", 3000)
})