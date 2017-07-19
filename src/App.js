import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Chart from './components/Chart.js';

class App extends Component {
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //
  //   }
  // }
  //
  // componentDidMount(){
  //
  // }

  render() {
    return (
      <div className="App">
          <h2>Hello World</h2>
          <Chart />
      </div>
    );
  }
}

export default App;
