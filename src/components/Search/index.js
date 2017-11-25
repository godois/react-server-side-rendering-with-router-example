// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import logo from './search.png';

import './style.css';

class Search extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <h1>
          <img src={logo} className="App-logo" alt="logo" />          
          <br/>Busca pelos parametros: 
          <br/>Estado: {this.props.params.state}
          <br/>Cidade: {this.props.params.city}
          <br/>Zona: {this.props.params.region}
          <br/>ValueZone: {this.props.params.valuezone}
          <br/>Type: {this.props.params.type}
          <br/><br/>
          <p>Refinar busca 
          <Link
                to="/venda/sp/sao-paulo/zona-sul/moema/apartamento_residencial/ibirapuera+paulista">
                refino 
              </Link>
          <br/>AddedParams: {this.props.params.addedparams}
        </p>
        </h1>

      </div>
    );
  }
}

export default Search;
