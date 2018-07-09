import React from 'react';
import NavItem from './NavItem'
import {Link} from "react-router-dom";

class NavBar extends React.Component{

    state = {
        topics: [],
        loading: true
    }

    componentDidMount() {
            
    }
    

    render() {

        return(
    
            <nav className = "navbar navbar-expand-lg navbar-dark bg-dark" style={{height: '30px'}}>
                <div className="navbar-brand">Workshop Manager</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        
                    </div>
                </div>
            </nav >
            
        )
    }

 }




export default NavBar;
