import React from 'react';


class ComputerEdit extends React.Component {

    state = {
        computers: [],
        loading: true,
        Bay: '', 
        JobRef: '',
        CurrentStatus: '',
        Customer: '',
        Issue: ''
    }

    componentDidMount() {
        fetch(`http://localhost:5000/api/computer/${this.props.refid}`)
            .then(res => {
                return res.json()
            })
            .then(body => {
                this.setState({
                    
                    Bay: body.Computer.bay, 
                    JobRef: body.Computer.ref,
                    CurrentStatus: body.Computer.current_status,
                    Customer: body.Computer.end_user.name,
                    Issue: body.Computer.issue,
                    computers: body.Computer,
                    loading: false
                })
            })
    }

    handleChange = (e) => {
       
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render() {
        return (

            <div>
                <h2>Edit Computer</h2>

                <div className="col-md-12">
                    <form action="#" method="get" className="col-md-8" style={{margin: 'auto'}}>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>Job Ref:</label>
                                <input type="text" className="form-control" value={this.state.JobRef} onChange={this.handleChange} id="JobRef" />
                            </div>
                            <div className="form-group col-md-2">
                                <label>Bay:</label>
                                <input type="text" className="form-control" value={this.state.Bay} onChange={this.handleChange} id="Bay" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Current Status:</label>
                                <input type="text" className="form-control" value={this.state.CurrentStatus} onChange={this.handleChange} id="CurrentStatus" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label>Customer:</label>
                                <input type="text" className="form-control" value={this.state.Customer} onChange={this.handleChange} id="Customer" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label>Issue:</label>
                                <input type="text" className="form-control" value={this.state.Issue} onChange={this.handleChange} id="Issue" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}


export default ComputerEdit;
