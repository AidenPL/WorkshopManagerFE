import React from 'react';

const CompleteJob = (props) => {


    return (

        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Complete Job</h4>

            </div>
            <div className="modal-body">
                <div className="col-md-12">
                    

                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={props.handleModalCloseRequest}>Close</button>
            </div>
        </div>

    )
}

export default CompleteJob;