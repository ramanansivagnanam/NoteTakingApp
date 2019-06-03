import React from 'react';

const ShowNotes = (props) => (

    <div>
        {props.mynotes.map((note, i) => {
            return (<div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <ul className="timeline">
                        <a onClick={() => props.modalclicked(i)}>
                        <li key={i}>
                            <div className="timeline-item">
                                <span className="time"><i className="fa fa-clock-o"></i>{note.date}</span>
                                <h1 className="">{note.heading}</h1>
                                <div className="timeline-body">
                                    <h3> {note.notes}</h3>
                                </div>
                            </div>
                        </li>
                        </a></ul>
                </div>
            </div>);
        })}
    </div>
)
export default ShowNotes;