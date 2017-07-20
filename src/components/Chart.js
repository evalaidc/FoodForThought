import React, { Component } from 'react';
import axios from 'axios';

class Chart extends Component {
  constructor(props){
    super(props);

    this.state = {
      info: []
    }
  }

  componentDidMount(){
    axios.get('https://data.maryland.gov/resource/7dst-j5if.json?' )
      .then(res => {
        // var info = res.data.data.children.map(obj => obj.data);
        // this.setState({ info })
      });
  }

  render() {
    return (
      <div className='chart'>
      <h3> Hello from Charts </h3>

      </div>
    );
  }
}

export default Chart;
