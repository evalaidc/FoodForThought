import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Chart from './components/Chart.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      school_years: []
    };
  }

  componentDidMount(){
    axios.get(`https://data.maryland.gov/resource/7dst-j5if.json?$select=school_year`)
  }

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
