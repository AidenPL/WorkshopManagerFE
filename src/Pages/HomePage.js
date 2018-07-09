import React, { Component } from 'react';
import Dashboard from '../Comnponents/Dashboard';

class HomePage extends Component {
  render() {
    return (

      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
                <Dashboard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
