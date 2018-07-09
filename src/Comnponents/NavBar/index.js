import React from 'react';
import NavItem from './NavItem'
import {Link} from "react-router-dom";

class NavBar extends React.Component{

    state = {
        topics: [],
        loading: true
    }

    componentDidMount() {

        fetch('https://al-northcodersnews.herokuapp.com/api/topics')
            .then(res => {
                return res.json()
            })
            .then(body => {
                this.setState({
                    topics: body.Topics,
                    loading: false
                })
            })
            
    }
    

    render() {

        return(
    
            <nav className = "navbar navbar-expand-lg navbar-dark bg-dark" style={{height: '30px'}}>
                <div className="navbar-brand">Northcoders News</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link className="nav-item nav-link" to= '/' > Home</Link>
                        {this.state.topics.map((item) => {
                            return <NavItem key={item._id} title={item.title} id={item._id}/>
                        })}
                        
                    </div>
                </div>
            </nav >
            
        )
    }

 }




export default NavBar;
