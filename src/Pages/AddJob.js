import React, { Component } from 'react';
import JobAdd from '../Comnponents/JobAdd';

class AddJob extends Component {
  render() {
    return (

      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
                <JobAdd />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddJob;