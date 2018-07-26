import React from 'react';
import Computer from '../Dashboard/computer';

class WallBoard extends React.Component {

  state = {
    computers: [],
    loading: true
  }

  componentDidMount() {
    fetch(`http://localhost:5000/api/computer`)
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
        <h2>Awaiting Delivery</h2>
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
          if (computer.stage === '1') return <Computer key={computer._id} id={computer._id} bay={computer.bay} jobref={computer.ref} issue={computer.issue} current_status={computer.current_status} end_user={computer.end_user.company_name}/>
        })}
        </div>
        <br />
        <h2>In Progress</h2>
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
          if (computer.stage === '2') return <Computer key={computer._id} id={computer._id} bay={computer.bay} jobref={computer.ref} issue={computer.issue} current_status={computer.current_status} end_user={computer.end_user.company_name}/>
        })}
        </div>
<br />
        <h2>Ready For collection</h2>
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
          if (computer.stage === '3') return <Computer key={computer._id} id={computer._id} bay={computer.bay} jobref={computer.ref} issue={computer.issue} current_status={computer.current_status} end_user={computer.end_user.company_name}/>
        })}
        </div>
      </div>
    )
  }

}


export default WallBoard;
