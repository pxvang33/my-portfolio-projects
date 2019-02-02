import React, { Component } from 'react';
import './App.css';
import Projects from '../Projects/Projects'


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>

        <div>
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
