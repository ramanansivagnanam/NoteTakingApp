const mysql = require('../../db');

module.exports = {
    addNotes : (req, res) => {
        let note = req.body;
        let id = note.id;
        let heading = note.heading;
        let notes = note.notes;
        let date = new Date();
        if (!note) {
            throw err;
        }
        mysql.query("INSERT INTO mynotes SET ? ",
         { id: id, heading: heading, notes: notes, date: date }, (err, rows, fields) => {
            if (!err) {
                res.send('inserted successfully!!');
            }
            else {
                throw err;
            }
        });
    }
}