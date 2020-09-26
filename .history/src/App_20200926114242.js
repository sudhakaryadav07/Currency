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
      let currency = [];
      let response = await axios.get('https://finnhub.io/api/v1/forex/rates?base=INR&token=bthrdp748v6rsb74biig');
      let { quote } = response.data;
      Object.keys(quote).map((data, i) => Object.values(quote).map((item, j) => i === j ? currency.push({ name: data, value: item }) : ""))
      this.setState({ currency });
    } catch (e) {

    }

  }

  render() {
    let { currency } = this.state;

    console.log(currency)
    if (!currency) {
      return (
        <div className="loaderContainer">
          Loading...
        </div>
      );
    }


    return (
      <div>
        {currency.map((data, i) => <p>{data.name}</p>)}
      </div>
    )
  }
}

export default Currency;
