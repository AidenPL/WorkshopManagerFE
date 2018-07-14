import React from 'react';



const ProgressJob = (props) => {

    const SelectDialog = () => {

        if (props.stage === '1') {
            return <div>
                <div className="modal-header">
                    <h4 className="modal-title">Progress Job To stage 2</h4>
                </div>
                <div className="modal-body">
                    <div className="col-md-12">
                        <div className="form-group col-md-12">
                            <label>Date Arrived:</label>
                            <input type="text" className="form-control" id="Date" />
                        </div>
                        <div className="form-group col-md-12">
                            <label>Status:</label>
                            <input type="text" className="form-control" id="Status" />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={props.handleModalCloseRequest}>Close</button>
                </div>
            </div>

        } else if (props.stage === '2') {

            return <div>
                <div className="modal-header">
                    <h4 className="modal-title">Progress Job to Stage 3</h4>

                </div>
                <div className="modal-body">
                    <div className="col-md-12">
                        <div className="form-group col-md-12">
                            <label>Status:</label>
                            <input type="text" className="form-control" id="Status" />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={props.handleModalCloseRequest}>Close</button>
                </div>
            </div>

        }


    }

    return (

        <div className="modal-content">
            {SelectDialog()}
        </div>

    )
}

export default ProgressJob;