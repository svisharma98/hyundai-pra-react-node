// knex.js
import knex from 'knex';

const knexdb = knex({
    client: 'mysql2', // or 'mysql2', 'sqlite3', etc.
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'test@123',
        database: 'my_database',
    },
});

export default knexdb;