const mysql = require('mysql');

const db_Conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'ramanan',
    database:'notetakingapp'
})
module.exports = db_Conn;

