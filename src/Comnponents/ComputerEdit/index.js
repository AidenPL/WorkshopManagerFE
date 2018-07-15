import React from 'react';
import PopOut from './ComputerEditPopOut';
import axios from 'axios'
import CompanyDropdown from './CompanyDropdown'

class ComputerEdit extends React.Component {

    state = {
        computers: [],
        loading: true,
        Bay: '',
        JobRef: '',
        CurrentStatus: '',
        CustomerName: '',
        CustomerId: '',
        Issue: '',
        Date: '', 
        Stage: '',
        CompanyList: [],
        message: ''
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
                    CustomerName: body.Computer.end_user.company_name,
                    CustomerId: body.Computer.end_user._id,
                    Issue: body.Computer.issue,
                    computers: body.Computer,
                    Date: body.Computer.date,
                    Stage: body.Computer.stage,
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

    StageSelect = () => {
        if (this.state.Stage === "1"){
            return <div className="bg-danger rounded" style={{paddingLeft: '7px', paddingTop: '6px', paddingBottom: '1px', marginBottom: '10px'}}><h4>Stage 1 - Booking In</h4></div>
        }else if(this.state.Stage === "2"){
            return <div className="bg-warning rounded" style={{paddingLeft: '7px', paddingTop: '6px', paddingBottom: '1px', marginBottom: '10px'}}><h4>Stage 2 - In Progress</h4></div>
        }else if(this.state.Stage === "3"){
            return <div className="bg-success rounded" style={{paddingLeft: '7px', paddingTop: '6px', paddingBottom: '1px', marginBottom: '10px'}}><h4>Stage 3 - Booking Out</h4></div>
        }
    }

    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleChangeCustomer = (e) => {
            console.log(e.target.getAttribute("iddd"));
        this.setState({
            CustomerName : e.target.value,
            CustomerId : e.target.iddd
        })
    }

    updateJob = () => {

        axios.put(`http://localhost:5000/api/computer/${this.props.refid}`, {
            ref: this.state.JobRef,
            bay: this.state.Bay,
            issue: this.state.Issue,
            current_status: this.state.CurrentStatus,
            end_user: this.state.CustomerId,
            date: this.state.Date,
            stage: this.state.Stage
        })
            .then(res => {
                this.setState((prevState) => ({

                    computers: [...prevState.computers, res.data.Computer],
                    message: 'Job has been successfully updated'
                }))
            })
            .catch(console.log)
    }

    progressStage = (date, status, stage) => {

        axios.put(`http://localhost:5000/api/computer/${this.props.refid}`, {
            ref: this.state.JobRef,
            bay: this.state.Bay,
            issue: this.state.Issue,
            current_status: status,
            end_user: this.state.CustomerId,
            date: date,
            stage: stage
        })
            .then(res => {
                this.setState((prevState) => ({

                    computers: [...prevState.computers, res.data.Computer],
                    message: 'Job has been successfully updated'
                }))
            })
            .catch(console.log)
    }

    render() {
        return (
            
            <div>

                <div className="col-md-12">
                    <form action="#" method="get" className="col-md-10" style={{ margin: 'auto' }}>
                        <br /><h2>Edit Job for {this.state.CustomerName}</h2><br />
                        {this.StageSelect()}
                        <p className='text-danger'>{this.state.message}</p>
                        <div className="form-row">
                            <div className="form-group col-md-1">
                                <label>Bay:</label>
                                <input type="text" className="form-control" value={this.state.Bay} onChange={this.handleChange} id="Bay" />
                            </div>
                            <div className="form-group col-md-4">
                                <label>Job Ref:</label>
                                <input type="text" className="form-control disabled" disabled="true" value={this.state.JobRef} onChange={this.handleChange} id="JobRef" />
                            </div>
                            <div className="form-group col-md-7">
                                <label>Current Status:</label>
                                <input type="text" className="form-control" disabled="true" value={this.state.CurrentStatus} onChange={this.handleChange} id="CurrentStatus" />
                            </div>
                        </div>

                        <div className="form-row">

                                <CompanyDropdown CompanyList={this.state.CompanyList} handleChangeCustomer={this.handleChangeCustomer} CustomerName={this.state.CustomerName}/>

                            <div className="form-group col-md-4">
                                <label>Date Arrived/Due:</label>
                                <input type="select" className="form-control" value={this.state.Date} onChange={this.state.handleChange} id="Date" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label>Issue:</label>
                                <input type="text" className="form-control" value={this.state.Issue} onChange={this.handleChange} id="Issue" />
                            </div>
                        </div>
                        <div className="row mb-2">
                        <div className="col-md-12"><button type="button" className="btn btn-block btn-outline-secondary" onClick={this.updateJob}>Update Job</button></div>
                        </div>

                        <PopOut date={this.state.Date} progressStage={this.progressStage} stage={this.state.Stage}/>
                    </form>

                    <div className="col-md-10 mt-4" style={{ margin: 'auto' }}>
                        <h4>latest Updates</h4>
                        
                        <div className="row border rounded border-dark ml-1 pl-3 pt-3 pb-0 mb-2 mr-1">
                        <p>08/08/18 - Updated the AV on the laptop</p>
                        </div>
                        <div className="row border rounded border-dark ml-1 pl-3 pt-3 pb-0 mb-1 mr-1">
                        <p>02/07/18 - Running Diagnostics</p>
                        </div>

                    </div>
                    
                </div>
                
            </div>
        )
    }

}


export default ComputerEdit;
