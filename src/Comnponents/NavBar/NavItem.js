import React from 'react';
import {Link} from "react-router-dom";

const NavItem = (props) => {

    return (
        <Link className="nav-item nav-link" to= {`/topics/${props.id}`} > {props.title} </Link>
    )
}

export default NavItem;