import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Projects from '../Projects/Projects.js'
import Admin from '../Admin/Admin.js'



class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <Router>
          <div>

            <Route exact path="/" component={Projects} />
            <Route exact path="/admin" component={Admin} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
