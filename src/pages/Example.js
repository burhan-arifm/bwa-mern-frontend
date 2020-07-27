import React, { Component } from 'react';
import NumberInput from "components/number-input";

export default class Example extends Component {
  state = { value: "1" };

  handleChange = e => { this.setState({ [e.target.name]: e.target.value })};

  render() {
    return (
      <div className="container borderize-orange">
        <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
          <div className="col-auto">
            <NumberInput max={ 30 } onChange={ this.handleChange } name="value" value={ this.state.value } suffix=" night" isSuffixPlural />
          </div>
        </div>
      </div>
    )
  }
}
