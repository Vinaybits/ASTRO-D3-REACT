import React from "react";

import { Component } from "react";


class CustomInput extends Component {
  render() {
    return (
      <div className="wrapper">
        <i onClick={this.props.onClick} className="fa fa-calendar"></i>
      </div>
    )
  }
}

export default CustomInput;