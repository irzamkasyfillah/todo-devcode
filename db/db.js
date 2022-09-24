const mysql = require("mysql")
require("dotenv").config()


const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DBNAME
    // host: "127.0.0.1",
    // user: "root",
    // password: "",
    // database: "todo-devcode"
})

connection.connect((err) => {
    if (err) throw err;
});

module.exports = connection