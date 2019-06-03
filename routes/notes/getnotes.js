const mysql = require('../../db');


module.exports = {
    getNotes :  (req, res) => {
        mysql.query("SELECT * FROM mynotes", (err, rows, fields) => {
            if (!err) { 
                var resp = JSON.stringify(rows);
                res.send(resp);
            }
            else {
                console.log(err);
            }
        })
    },
    singleNote : (req, res) => {
        mysql.query("SELECT * FROM mynotes WHERE id = ?", [req.params.id], (err, rows, fields) => {
            if (!err) {
                res.send(rows);
            }
            else {
                console.log(err);
            }
        })
    }
}