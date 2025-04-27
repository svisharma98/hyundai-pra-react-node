import mysql from 'mysql2'

const db = mysql.createPool({
    // host: process.env.HOST,
    // user: process.env.USER,
    // password: process.env.PASSWORD,
    // database: process.env.DATABASE,
    host: 'localhost',
    user: 'root',
    password: 'test@123',
    database: 'my_database',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default db;
