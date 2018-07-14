import React from 'react';
import PopOut from './ComputerEditPopOut';


class ComputerEdit extends React.Component {

    state = {
        computers: [],
        loading: true,
        Bay: '',
        JobRef: '',
        CurrentStatus: '',
        Customer: '',
        Issue: '',
        Date: '', 
        CompanyList: []
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
                    Customer: body.Computer.end_user.company_id.company_name,
                    Issue: body.Computer.issue,
                    computers: body.Computer,
                    Date: body.Computer.date,
                    loading: false
                })
            })

        fetch('http://localhost:5000/api/company') 
        .then(res => {
            
            return res.json()
        })
        .then(body => {
            this.setState({
                CompanyList: body.Company
            })
        })   
    }

    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (

            <div>

                <div className="col-md-12">
                    <form action="#" method="get" className="col-md-8" style={{ margin: 'auto' }}>
                        <br /><h2>Edit Computer for {this.state.Customer}</h2><br />
                        <div className="bg-danger"><h4>Stage 1 - Booking In</h4></div>
                        <div className="form-row">
                            <div className="form-group col-md-2">
                                <label>Bay:</label>
                                <input type="text" className="form-control" value={this.state.Bay} onChange={this.handleChange} id="Bay" />
                            </div>
                            <div className="form-group col-md-4">
                                <label>Job Ref:</label>
                                <input type="text" className="form-control disabled" disabled="true" value={this.state.JobRef} onChange={this.handleChange} id="JobRef" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Current Status:</label>
                                <input type="text" className="form-control" disabled="true" value={this.state.CurrentStatus} onChange={this.handleChange} id="CurrentStatus" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-8">
                                <label>Customer:</label>
                                <select className="form-control" value={this.state.Customer} onChange={this.handleChange} id="Customer">
                                      {this.state.CompanyList.map(Company => {
                                         return <option key={Company._id} value={Company.company_name}>{Company.company_name}</option>   
                                      })}
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label>Date Arrive/Due to Arrive:</label>
                                <input type="select" className="form-control" value={this.state.Date} onChange={this.state.handleChange} id="Date" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label>Issue:</label>
                                <input type="text" className="form-control" value={this.state.Issue} onChange={this.handleChange} id="Issue" />
                            </div>
                        </div>
                        <PopOut />
                    </form>
                    
                </div>
                
            </div>
        )
    }

}


export default ComputerEdit;
