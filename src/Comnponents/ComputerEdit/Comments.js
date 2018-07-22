import React from 'react';

const Comments = (props) => {


    return (
        <div className="row border rounded border-dark ml-1 pl-3 pt-3 pb-0 mb-2 mr-1">
        <p>{props.date} - {props.comment}</p>
        </div>
    )
}

export default Comments;