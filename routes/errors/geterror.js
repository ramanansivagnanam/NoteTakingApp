const mysql = require('../../db');


module.exports = {
    getErrors : (req, res) => {
        mysql.query("SELECT * FROM errors_fixes", (err, rows, fields) => {
            if (!err) { 
                var resp = JSON.stringify(rows);
                res.send(resp);
            }
            else {
                console.log(err);
            }
        })
    }
}