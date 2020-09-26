import React, { Component } from 'react';
import { AppBar, Card, CircularProgress } from '@material-ui/core';
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
      let response = await axios.get('https://finnhub.io/api/v1/forex/rates?base=INR&token=bthrdp748v6rsb74biig');
      let { quote } = response.data;
      this.setState({ currency: { name: 'USD', value: quote['USD'] } });
    } catch (e) {

    }

  }

  render() {
    let { currency } = this.state;

    if (!currency) {
      return (
        <div className="loaderContainer">
          <CircularProgress />
        </div>
      );
    }

    return (
      <div className="currencyContainer">
        <AppBar position="fixed" style={{ display: 'flex', alignItems: 'flex-start', paddingLeft: 10, justifyContent: 'center', height: '9%' }}>
          <p style={{ fontSize: 25, margin: 0 }}>CURRENCY</p>
        </AppBar>
        <div >
              <Card className="currencyItem">
                {currency.name} {currency.name === "USD" ? 1 / currency.value + 0.35 : currency.value}
              </Card>
        </div>
      </div>
    )
  }
}

export default Currency;
