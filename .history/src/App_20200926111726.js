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
      this.setState({ currency: response.data.quote });
    } catch (e) {

    }

  }

  renderData(){
    let {currency}=this.state;
console.log(currency)
    for (let key in currency) {
      console.log(key)
     return <p>{key}</p>           
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

    return (
      <div>
{this.renderData()}
      </div>
    );
  }
}

export default Currency;
