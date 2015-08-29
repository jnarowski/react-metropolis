require('./main.scss');

import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import React, { Component } from 'react';
import Show from './components/core/show.js';
import Index from './components/core/index.js';

export default class App extends Component {
  render() {
    return (
    	<div className="Detail">
    		<RouteHandler/>
    	</div>
    ); 
  }
}

let routes = (  
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Index}/>
    <Route name="show" path="/show/:component_name" handler={Show}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.getElementById('root'));
});