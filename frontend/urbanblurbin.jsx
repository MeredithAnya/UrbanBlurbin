var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var App = require('./components/App');


var ApiUtil = require('./util/apiUtil');
var StateStore = require('./stores/stateStore');


var routes = (
  <Route path="/" component={App}>
  
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>,
    document.getElementById('content')
  );
});

window.ApiUtil = ApiUtil;
window.StateStore = StateStore;
