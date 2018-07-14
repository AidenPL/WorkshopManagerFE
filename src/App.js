import React, { Component } from 'react';
import NavBar from './Comnponents/NavBar';
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import HomePage from './Pages/HomePage'
import ComputerEdit from './Pages/Computer'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <nav><NavBar /></nav>
            <Route exact path="/" component={HomePage} />
            <Route path="/computer/:computerID" component={ComputerEdit}/>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
