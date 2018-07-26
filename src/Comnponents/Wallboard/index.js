import React from 'react';
import Computer from './computer';

class WallBoard extends React.Component {

  state = {
    computers: [],
    loading: true
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_URL}/api/computer`)
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
          <br />
        <h2>Awaiting Delivery</h2>
        <div className="col-12">
        
        <div className="row booking">
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
          if (computer.stage === '1') return <div className=" row row-striped-awaiting">
          <div className="col-1">
              {computer.bay}
          </div>
          <div className="col-2">
          {computer.ref}
          </div>
          <div className="col-3">
          {computer.end_user.company_name}
          </div>
          <div className="col-3">
          {computer.issue}
          </div>
          <div className="col-3">
          {computer.current_status}
          </div>
          
      </div>
        })}
        </div>
        <br />
        <h2>In Progress</h2>
        <div className="col-12">
        
        <div className="row inprogress">
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
          if (computer.stage === '2') return <div className=" row row-striped-progress">
          <div className="col-1">
              {computer.bay}
          </div>
          <div className="col-2">
          {computer.ref}
          </div>
          <div className="col-3">
          {computer.end_user.company_name}
          </div>
          <div className="col-3">
          {computer.issue}
          </div>
          <div className="col-3">
          {computer.current_status}
          </div>
          
      </div>
        })}
        </div>
<br />
        <h2>Ready For collection</h2>
        <div className="col-12">
        
        <div className="row complete">
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
          if (computer.stage === '3') return <div className=" row row-striped-collection">
          <div className="col-1">
              {computer.bay}
          </div>
          <div className="col-2">
          {computer.ref}
          </div>
          <div className="col-3">
          {computer.end_user.company_name}
          </div>
          <div className="col-3">
          {computer.issue}
          </div>
          <div className="col-3">
          {computer.current_status}
          </div>
          
      </div>
        })}
        </div>
      </div>
    )
  }

}


export default WallBoard;
