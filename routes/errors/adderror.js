const mysql = require('../../db');


module.exports = {
    addError: (req, res) => {
        let err = req.body;
        let id = err.id;
        let error = err.error;
        let err_lan = err.err_lan;
        let date = new Date();
        let solved_link = err.solved_link;
        let err_fix = err.err_fix;

        if (!err) {
            throw err;
        }
        mysql.query("INSERT INTO errors_fixes SET ? ",
            {
                id: id,
                error: error,
                err_lan: err_lan,
                date: date,
                solved_link: solved_link,
                err_fix: err_fix
            },
            (err, rows, fields) => {
                if (!err) {
                    res.send('inserted successfully!!');
                }
                else {
                    throw err;
                }
            });
    }
}