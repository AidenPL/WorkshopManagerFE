import React from 'react';
import {Link} from "react-router-dom";

const Computer = (props) => {


    return (
     
        <div className=" row row-striped-awaiting">
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