import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Chart from './components/Chart.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      school_years: [],
      selected_year: ""
    };
  }
// react life-cycle method to load the data before page
  componentDidMount(){
    axios.get(`https://data.maryland.gov/resource/7dst-j5if.json?$select=school_year`)
      .then(res => {
        var school_years = res.data.map(obj => obj.school_year)

        this.setState({school_years})

      })
  }



  render() {

    return (
      <div className="App">
          <h2>Hello World</h2>
          <p> School Year Range: <select id="myselect">
            {this.state.school_years.map(function(range){
              return (
                <option value={range}> {range} </option>
              )}
            )}
            </select>
          </p>

          <Chart />
      </div>
    );
  }
}

export default App;
