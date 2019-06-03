import React, { Component } from 'react';

class showErrors extends Component {
    state = {
        errors: []
    }
    componentDidMount() {
        fetch('http://localhost:3000/errors')
            .then(data => {
                return data.json();
            })
            .then(resp => {
                this.setState({ errors: resp });
            })
    }
    render() {
        return (
            <div className="row">
            <div className="col-md-12">
            <div className="box">
                <div className="box-header">
                    <h3 className="box-title">Occured error details</h3>
                </div>
                <div className="box-body no-padding">
                    <table className="table table-condensed">
                        <tbody><tr >
                            <th >#</th>
                            <th>Error name</th>
                            <th>Error language</th>
                            <th>Date Occured</th>
                            <th>Solved link</th>
                            <th>Error status</th>
                        </tr>
                            {this.state.errors.map((err, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{err.id}</td>
                                        <td>{err.error}</td>
                                        <td>{err.err_lan}</td>
                                        <td>{err.date}</td>
                                        <td>{err.solved_link}</td>
                                        <td><span className="badge bg-red">{err.err_fix}</span></td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            </div>
        );
    }
}
    export default showErrors;