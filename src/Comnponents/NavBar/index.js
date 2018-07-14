import React from 'react';
//import NavItem from './NavItem'
import {Link} from "react-router-dom";
import JobAdd from '../JobAdd'

class NavBar extends React.Component{

    state = {
        topics: [],
        loading: true
    }

    componentDidMount() {
            
    }
    

    render() {

        return(
    
            <nav className = "navbar navbar-expand-md navbar-dark bg-dark" style={{height: '35px'}}>
                <Link to= {'/'}><div className="navbar-brand">Workshop Manager</div></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    {/* <Link to={'/'}><button type="button" className="btn-sm btn-outline-light" style={{marginRight: '10px'}}>Home</button></Link> */}
                        <JobAdd />
                    </div>
                </div>
            </nav >
            
        )
    }

 }




export default NavBar;
