import React from 'react';
import Computer from './computer';

class Dashboard extends React.Component {

  state = {
    computers: [],
    loading: true
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/computer')
      .then(res => {
          console.log(res)
        return res.json()

      })
      .then(body => {
          console.log(body)
        this.setState({
            computers: body.Computer,
          loading: false
        })
      })
  }

  render() {
console.log(this.state.computers)
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
          return <Computer bay={computer.bay} jobref={computer.ref} issue={computer.issue} current_status={computer.current_status} end_user={computer.end_user.name}/>
        })}
        </div>
      </div>
    )
  }

}


export default Dashboard;
