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
                            <input type="text" className="form-control" value={props.Date} onChange={props.handleChange} id="Date" />
                        </div>
                        <div className="form-group col-md-12">
                            <label>Status:</label>
                            <input type="text" className="form-control" value={props.Status} onChange={props.handleChange} id="Status" />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                <form className="" onSubmit={props.progressStageMiddle}>
                    <button type="submit" className="btn btn-secondary">Progress</button>
                    <button type="button" className="btn btn-secondary" onClick={props.handleModalCloseRequest}>Close</button>
                    </form>
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
                            <input type="text" className="form-control" value={props.Status} onChange={props.handleChange} id="Status" />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                <form className="" onSubmit={props.progressStageMiddle}>
                    <button type="submit" className="btn btn-secondary">Progress</button>
                    <button type="button" className="btn btn-secondary" onClick={props.handleModalCloseRequest}>Close</button>
                </form>
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