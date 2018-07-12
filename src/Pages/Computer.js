import React, { Component } from 'react';
import ComputerEdit from '../Comnponents/ComputerEdit';

class Computer extends Component {
  render() {
    return (

      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
                <ComputerEdit refid={this.props.match.params.computerID}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Computer;