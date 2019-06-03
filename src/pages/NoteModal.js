import React from 'react';
import './NoteModal.css';
const NoteModal = (props) => (
    <div className="container">
        <div className="NoteModal">
            <div>
                <button onClick={props.closeModal} title="Close" className="close">X</button>
                <h2>{props.mynote.heading}</h2>
                <hr />
                <h5>createdAT:  {props.mynote.date}</h5>
                <hr />
                <h6>{props.mynote.notes}</h6>
                <hr />
                <button type="button"
                    className="btn btn-outline-primary">
                    Edit
                 </button>
                <button type="button"
                    className="btn btn-outline-success">
                    Save
                </button>
                <button type="button"
                    onClick = {()=>props.deleteModal(props.mynote.id)}
                    className="btn btn-outline-danger">
                    Delete
                </button>

            </div>
        </div>
    </div>
)
export default NoteModal;