var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var App = require('./components/App');
var USAState = require('./components/USAState');
var Map = require('./components/Map');
var SearchBar = require('./components/SearchBar');


var ApiUtil = require('./util/apiUtil');
var StateStore = require('./stores/stateStore');


var routes = (
  <Route path="/" component={App}>
  <IndexRoute component={Map}/>
  <Route path="state/:stateId"component={USAState}>

  </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>,
    document.getElementById('content')
  );
});

window.ApiUtil = ApiUtil;
window.StateStore = StateStore;
