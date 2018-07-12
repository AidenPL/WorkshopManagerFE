import React from 'react';
import Computer from './computer';
import Addnew from '../JobAdd'

class Dashboard extends React.Component {

  state = {
    computers: [],
    loading: true
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/computer')
      .then(res => {
        return res.json()

      })
      .then(body => {
        this.setState({
            computers: body.Computer,
          loading: false
        })
      })
  }

  render() {

    return (

      <div>
        <h2>Homepage</h2>
        <div className="col-12">
        
        <div className="row">
                <div className="col-1">
                    <b>Bay</b>
                </div>
                <div className="col-2">
                <b>Job Ref</b>
                </div>
                <div className="col-3">
                <b>Customer</b>
                </div>
                <div className="col-3">
                <b>Issue</b>
                </div>
                <div className="col-3">
                <b>Current Status</b>
                </div>
            </div>
        {this.state.computers.map(computer => {
          return <Computer id={computer._id} bay={computer.bay} jobref={computer.ref} issue={computer.issue} current_status={computer.current_status} end_user={computer.end_user.name}/>
        })}
        </div>
        <Addnew />
      </div>
    )
  }

}


export default Dashboard;
