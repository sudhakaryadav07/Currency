import React, { Component } from 'react';
import axios from 'axios';

class Currency extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currency: null
    }
  }

  UNSAFE_componentWillMount() {
    this.initState();
  }

  initState = async () => {
    try {
      let response = await axios.get('https://finnhub.io/api/v1/forex/rates?base=INR&token=bthrdp748v6rsb74biig');
let processedData=response.data.quote.split(",")
console.log(processedData)
      // this.setState({ currency: response.data.quote });
    } catch (e) {

    }

  }

  render() {
    let { currency } = this.state;
    if (!currency) {
      return (
        <div className="loaderContainer">
          Loading...
        </div>
      );
    }
      // for (const key in currency) {
      //   return <p>{currency[key]}</p>           
      //  }
  }
}

export default Currency;
