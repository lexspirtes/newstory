import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Latest from './latest';
import Search from './search';
import { Route, BrowserRouter as Router } from 'react-router-dom'

/**
 * routes for app
 */
const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/" component={Latest} />
      <Route path="/search" component={Search} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
