// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';
import Realty from './components/Realty';
import Search from './components/Search';

const Routes = (props) => (
  <div>
    <Router {...props}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/about?v=:values" component={About} />
      <Route path="/imovel/:attributes/:id" component={Realty} />
      <Route path="/venda/:state/:city/:region/:valuezone/:type" component={Search} />
      <Route path="/venda/:state/:city/:region/:valuezone/:type/:addedparams" component={Search} />
      <Route path="*" component={NotFound} />
    </Router>
  </div>
);

export default Routes;
