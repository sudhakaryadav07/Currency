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
setInterval(() => {
      this.initState();
    }, 5000);
  }

  initState = async () => {
    try {
      console.log("Saf")
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
      <div className="currencyContainer">
        {currency.map((data, i) => {
          return (
            <div className="currencyItem" key={i}>
              {data.name} {data.name === "USD" ? 1 / data.value + 0.35 : data.value}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Currency;
