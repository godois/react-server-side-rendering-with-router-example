// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import logo from './about-2.png';

import './style.css';

class About extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  number = 0;

  constructor(props) {
    super(props);
    this.randomNumber = Math.random();
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <h1>
          <div id="teste1">
          About {this.randomNumber}
          <img src={logo} className="App-logo" alt="logo" />
          Params: {this.props.location.search}
          </div>
          <div></div>
        </h1>
      </div>
    );
  }
}

export default About;
