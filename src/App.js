import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Steps from './components/Steps';

const app = () => (
  <HashRouter >
    <Route path="/" exact component={Home} />
    <Route path="/steps" component={Steps} />
  </HashRouter>
);

export default app;
