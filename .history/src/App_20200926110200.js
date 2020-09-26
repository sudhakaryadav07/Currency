import React, { Component } from 'react';
import axios from 'axios';

class Currency extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currency=[]
    }
  }

  UNSAFE_componentWillMount() {
    this.initState();
  }

  initState = async () => {
let response =await axios.get('https://finnhub.io/api/v1/forex/rates?base=INR&token=bthrdp748v6rsb74biig');
console.log(response.data)
  }

  render() {
    return (
      <div >
        fgdfg
      </div >
    );
  }
}

export default Currency;
