const mysql = require('../../db');


module.exports = {
    deleteNotes : (req, res) => {
        console.log(req.params);
        mysql.query("DELETE FROM mynotes WHERE id = ?", [req.params.id], (err, rows, fields) => {
            if (!err) {
                res.send('Deleted Successfully!');
            }
            else {
                console.log(err);
            }
        })
    }
}