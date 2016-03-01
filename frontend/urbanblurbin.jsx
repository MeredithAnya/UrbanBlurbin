var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Modal = require('react-modal');


var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var App = require('./components/App');
var USAState = require('./components/USAState');
var Map = require('./components/Map');
var SearchBar = require('./components/SearchBar');
var City = require('./components/City');
var CityStore = require('./stores/cityStore');


var ApiUtil = require('./util/apiUtil');
var StateStore = require('./stores/stateStore');


var routes = (
  <Route path="/" component={App}>
  <IndexRoute component={Map}/>
  <Route path="states/:stateId"component={USAState}>
      <Route path="cities/:cityId"component={City}/>
    <Route/>  
  </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  Modal.setAppElement(document.getElementById('content'));
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>,
    document.getElementById('content')
  );
});

window.CityStore = CityStore;
window.ApiUtil = ApiUtil;

