const mysql = require("mysql")
require("dotenv").config()


const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DBNAME,
    port: process.env.MYSQL_PORT
})

connection.connect((err) => {
    if (err) throw err;
});

connection.query(`CREATE TABLE IF NOT EXISTS activities (
    id int(11) NOT NULL AUTO_INCREMENT,
    title varchar(256) NOT NULL,
    email varchar(256) NOT NULL,
    PRIMARY KEY (id)
  )`)

connection.query(`CREATE TABLE IF NOT EXISTS todos (
    id int(11) NOT NULL AUTO_INCREMENT,
    title varchar(256) NOT NULL,
    activity_group_id int(11) NOT NULL,
    is_active bit(1) DEFAULT NULL,
    priority varchar(256) DEFAULT NULL,
    PRIMARY KEY (id)
  )`)

module.exports = connection