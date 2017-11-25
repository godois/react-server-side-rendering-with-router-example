// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import logo from './about-2.png';

import './style.css';

class About extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <h1>
          About
          <img src={logo} className="App-logo" alt="logo" />
          Params: {this.props.location.search}
        </h1>
      </div>
    );
  }
}

export default About;
