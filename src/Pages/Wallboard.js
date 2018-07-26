import React, { Component } from 'react';
import WallboardComponent from '../Comnponents/Wallboard';

class Wallboard extends Component {
  render() {
    return (

      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
                <WallboardComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wallboard;