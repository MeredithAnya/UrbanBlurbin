var React = require('react');
var Map = require('./Map');
var NavBar = require('./NavBar');

var App = React.createClass({
	render: function(){
		return(
          <div> 
          <NavBar/>
          <Map/>
          </div>
		);
	}

});

module.exports = App;