const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const mysql = require('./db');

const { getNotes ,singleNote } = require('./routes/notes/getnotes');
const { addNotes } = require('./routes/notes/addnotes');
const { deleteNotes } = require('./routes/notes/deletenotes');
const { addError } = require('./routes/errors/adderror');
const { getErrors } = require('./routes/errors/geterror');


app.use(bodyParser.json());
app.use(cors());

//notes routes..
app.get('/notes',getNotes);
app.get('/notes/:id', singleNote);
app.post('/addnotes', addNotes);
app.delete('/notes/:id', deleteNotes);


//error routes....

app.get('/errors',getErrors);
app.post('/adderror',addError);

mysql.connect((err) => {
    if (err) {
        throw err;
    }
    app.listen(3000, () => {
        console.log('Server Started dude!!');
    });

});

