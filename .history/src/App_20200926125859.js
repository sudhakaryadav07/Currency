import React, { Component } from 'react';
import { AppBar, CircularProgress } from '@material-ui/core';
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
    }, 1000);
  }

  initState = async () => {
    try {
      // let response = await axios.get('https://finnhub.io/api/v1/forex/rates?base=INR&token=bthrdp748v6rsb74biig');
      // let { quote } = response.data;
      // this.setState({ currency: { name: 'USD', value: quote['USD'] } });
      this.setState({ currency: { name: 'USD', value: Math.random() } });
    } catch (e) {

    }

  }

  render() {
    let { currency } = this.state;

    return (
      <div className="currencyContainer">
        <AppBar position="fixed" style={{ display: 'flex', alignItems: 'flex-start', paddingLeft: 10, justifyContent: 'center', height: '9%' }}>
          <p style={{ fontSize: 25, margin: 0 }}>CURRENCY</p>
        </AppBar>
        {!currency ?
         <div className="loaderContainer">
         <CircularProgress />
       </div>:
        <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-evenly',width:'100%',padding:'0px 180px 0px 180px' }}>
          <p style={{fontSize:70}}>{currency.name}</p> 
          <p style={{fontSize:70,color:'grey'}}>{currency.name === "USD" ? 1 / currency.value + 0.35 : currency.value}</p>
        </div>}
      </div>
    )
  }
}

export default Currency;
