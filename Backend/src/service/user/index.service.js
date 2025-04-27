import db from "../../config/db.js"


export const userService = (req, res) => {
    const userData = []

    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        console.log(results);
    });
    res.status(200).send("Working")
};