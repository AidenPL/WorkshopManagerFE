import React from 'react';

const UpdateStatus = (props) => {


    return (

        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Update Status</h4>

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
                <form className="" onSubmit={props.UpdateStatus}>
                    <button type="submit" className="btn btn-secondary">Update</button>
                    <button type="button" className="btn btn-secondary" onClick={props.handleModalCloseRequest}>Close</button>
                </form>
            </div>
        </div>

    )
}

export default UpdateStatus;