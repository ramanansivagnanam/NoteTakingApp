import React , { Component }from 'react';

class AddError extends Component {

    constructor(props) {
        super(props);
        this.error = React.createRef();
        this.err_lan = React.createRef();
        this.solved_link = React.createRef();
        this.err_fix = React.createRef();
    }

    submitToDatabase = (e) => {
        e.preventDefault();
        
        const error = this.error.current.value;
        const err_lan = this.err_lan.current.value;
        const solved_link = this.solved_link.current.value;
        const err_fix = this.err_fix.current.value;
        const date = new Date().toString();

        const reqBody = {
            error : error,
            err_lan:err_lan,
            solved_link:solved_link,
            err_fix:err_fix,
            date:date
        }
        console.log(reqBody);

        fetch('http://localhost:3000/adderror', {
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
            <div className="row">
            <div className="col-md-10 col-md-offset-4">
            <div className="box box-warning">
            <div className="box-header with-border">
                <h3 className="box-title">Add error...</h3>
            </div>
            <div className="box-body">
                <form onSubmit={this.submitToDatabase} id="reset">
                    <div className="form-group">
                        <label>Error name</label>
                        <input type="text" className="form-control" placeholder="Enter ..." ref={this.error}/>
                    </div>
                    <div className="form-group">
                        <label>Error language</label>
                        <input type="text" className="form-control" placeholder="Enter ..." ref={this.err_lan}/>
                    </div>
                    <div className="form-group">
                        <label>Solved link</label>
                        <input type="text" className="form-control" placeholder="Enter ..." ref={this.solved_link}/>
                    </div>
                    <div className="form-group">
                        <label>Error fixed</label>
                        <select className="form-control"  ref={this.err_fix}>
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </div>
                    <div className="box-footer">
                                <button type="submit" className="btn btn-primary">AddError</button>
                            </div>
                </form>
            </div>
        </div>
        </div>
        </div>
        );
    }
}

export default AddError;