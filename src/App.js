import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import HomePage from './Pages/HomePage'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <nav><NavBar /></nav>
            <Route exact path="/" component={HomePage} />
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
