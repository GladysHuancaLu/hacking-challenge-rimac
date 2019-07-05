import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Lending from './components/Lending';

const app = () => (
  <HashRouter >
    <Route path="/" exact component={Home} />
    <Route path="/lending" component={Lending} />
  </HashRouter>
);

export default app;
