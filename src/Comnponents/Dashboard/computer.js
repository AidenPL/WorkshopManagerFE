import React from 'react';

const Computer = (props) => {


    return (
            <div className="row row-striped">
                <div className="col-1">
                    {props.bay}
                </div>
                <div className="col-2">
                {props.jobref}
                </div>
                <div className="col-3">
                {props.end_user}
                </div>
                <div className="col-3">
                {props.issue}
                </div>
                <div className="col-3">
                {props.current_status}
                </div>
            </div>
    )
}

export default Computer;