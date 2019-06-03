import React, { Component } from "react";
import './Notes.css';
import ShowNotes from "./showNotes";
import NoteModal from "./NoteModal";
class NotesPage extends Component {


    state = {
        notes: [],
        note: {},
        showModal: false
    };
    componentDidMount() {
        fetch('http://localhost:3000/notes')
            .then(data => {
                return data.json();
            })
            .then(resp => {
                this.setState({ notes: resp });
            })
        // setInterval( ()=>{
        //     this.state.notes.map((i,keyword)=>{
        //      const note =  console.log(i.notes);
        //      });
             
        // },10000);
    }

    onShowModal = (i) => {
        const note = this.state.notes[i];
        this.setState({ note: note, showModal: true });
    }
    onCloseModal = () => {
        this.setState({ showModal: false });
    }
    onDelteModal = (id) =>{
        console.log(id);
        const reqBody = {
           id:id
        }
        //it is a promised based operation
        fetch('http://localhost:3000/notes/' + id, {
            method: 'DELETE',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( ()=>{
            this.onCloseModal();
            this.componentDidMount();
        }).catch( (err)=>{
             throw err;
        });
    }
    render() {

        return (
            <div>
                {this.state.showModal ?
                    <NoteModal
                        mynote={this.state.note}
                        closeModal={(i) => this.onCloseModal(i)}
                        deleteModal = {(id) => this.onDelteModal(id)}
                    /> :
                    <ShowNotes
                        mynotes={this.state.notes}
                        modalclicked={(i) => this.onShowModal(i)}
                    />}
            </div>
        );
    }
}

export default NotesPage;