import React from 'react';
import {Link} from "react-router-dom";

const Computer = (props) => {


    return (
     
        <Link className=" row row-striped-collection" to= {`/computer/${props.id}`}>
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
                
            </Link>
            
    )
}

export default Computer;