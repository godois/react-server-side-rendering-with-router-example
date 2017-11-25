// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import logo from './realty.png';

import './style.css';

class Realty extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <h1>
        <img src={logo} className="App-logo" alt="logo" />          
        <br/>Imóvel: 
        <br/>Attributes: {this.props.params.attributes}
        <br/>ID: {this.props.params.id}
        </h1>
      </div>
    );
  }
}

export default Realty;
