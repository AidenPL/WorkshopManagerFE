import React from 'react';
import PopOut from './ComputerEditPopOut';
import axios from 'axios'
import CompanyDropdown from './CompanyDropdown'
import Comments from './Comments'

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
        message: '', 
        Comments: []
    }

    componentDidMount() {
        fetch(`https://al-workshop-manager.herokuapp.com/api/computer/${this.props.refid}`)
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

        fetch('https://al-workshop-manager.herokuapp.com/api/company') 
        .then(res => {
            
            return res.json()
        })
        .then(body => {
            
            this.setState({
                CompanyList: body.Company
            })
        })  
        
        fetch(`https://al-workshop-manager.herokuapp.com/api/comment/${this.props.refid}`) 
        .then(res => {
            return res.json()
        })
        .then(body => {
            this.setState({
                Comments: body.Comments
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
        console.log(e.target.value)
        this.setState({
            CustomerId : e.target.value
        })
    }

    updateJob = () => {

        axios.put(`https://al-workshop-manager.herokuapp.com/api/computer/${this.props.refid}`, {
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

    progressStage = (date, status, stage, query, comment) => {

        axios.put(`https://al-workshop-manager.herokuapp.com/api/computer/${this.props.refid}${query}`, {
            ref: this.state.JobRef,
            bay: this.state.Bay,
            issue: this.state.Issue,
            current_status: status,
            end_user: this.state.CustomerId,
            date: date,
            stage: stage, 
            comment: comment
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
                        <div className="form-group col-md-8">
                                <CompanyDropdown CompanyList={this.state.CompanyList} handleChangeCustomer={this.handleChangeCustomer} CustomerId={this.state.CustomerId} CustomerName={this.state.CustomerName}/>
                                </div>
                            <div className="form-group col-md-4">
                                <label>Date Arrived/Due:</label>
                                <input type="text" className="form-control" value={this.state.Date} onChange={this.handleChange} id="Date" />
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
                        {this.state.Comments.map((comment) => {
                            return <Comments date={comment.date} comment={comment.comment}/>
                        })}
                    </div>
                    
                </div>
                
            </div>
        )
    }

}


export default ComputerEdit;
