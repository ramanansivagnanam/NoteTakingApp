import React, { Component } from "react";

class AddNotesPage extends Component {

    constructor(props) {
        super(props);
        this.headEl = React.createRef();
        this.notesEl = React.createRef();
    }

    submitToDatabase = (e) => {
        e.preventDefault();
        const heading = this.headEl.current.value;
        const notes = this.notesEl.current.value;
        const date = new Date().toString();
        if (heading.trim().length === 0 || notes.trim().length === 0) {
            return;
        }
        const reqBody = {
            heading: heading, 
            notes: notes, 
            date: date
        }
        fetch('http://localhost:3000/addnotes', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        document.getElementById('reset').reset();
    }

    render() {
        return (
            <div className="col-md-8 col-md-offset-4">
                <div className="box box-warning">
                    <div className="box-header with-border">
                        <h3 className="box-title">Add Your notes here</h3>
                    </div>
                    <div className="box-body">
                        <form onSubmit={this.submitToDatabase} id="reset">
                            <div className="form-group">
                                <label>Heading</label>
                                <input type="text" className="form-control" id="heading" ref={this.headEl} placeholder="Enter ..."/>
                            </div>


                            <div className="form-group">
                                <label>Make notes</label>
                                <textarea className="form-control" rows="10" id="notes" ref={this.notesEl} placeholder="Enter ..."></textarea>
                            </div>
                            <div className="box-footer">
                                <button type="submit" className="btn btn-primary">AddNotes</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default AddNotesPage;








