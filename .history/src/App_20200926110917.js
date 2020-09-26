import React, { Component } from 'react';
import axios from 'axios';

class Currency extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currency: []
    }
  }

  UNSAFE_componentWillMount() {
    this.initState();
  }

  initState = async () => {
    let response = await axios.get('https://finnhub.io/api/v1/forex/rates?base=INR&token=bthrdp748v6rsb74biig');
    this.setState({ currency: response.data.quote });
  }

  render() {
    let { currency } = this.state;
console.log(currency)
    if (currency.length === 0) {
      return (
        <div className="loaderContainer">
          Loading...
        </div>
      );
    }

    return (
      <div>
        {currency.map((data, i) => {
          return (
            <div key={i}>
{data}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Currency;
