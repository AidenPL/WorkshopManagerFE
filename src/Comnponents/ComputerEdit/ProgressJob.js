import React from 'react';



const ProgressJob = (props) => {

    const SelectDialog = () => {

        if (props.stage === 1) {
            return <div>
                <div className="form-group col-md-12">
                    <label>Date Arrived:</label>
                    <input type="text" className="form-control" id="Date" />
                </div>
                <div className="form-group col-md-12">
                    <label>Status:</label>
                    <input type="text" className="form-control" id="Status" />
                </div>
            </div>

        } else if (props.stage === 2) {

            return <div>
            <div className="form-group col-md-12">
                <label>Status:</label>
                <input type="text" className="form-control" id="Status" />
            </div>
        </div>

        } else if (props.stage === 3) {
            return 
        }


    }

    return (

        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Progress Job</h4>

            </div>
            <div className="modal-body">
                <div className="col-md-12">
                    {SelectDialog()}
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={props.handleModalCloseRequest}>Close</button>
            </div>
        </div>

    )
}

export default ProgressJob;