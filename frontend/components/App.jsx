var React = require('react');
var Map = require('./Map');

var App = React.createClass({
	render: function(){
		return(
          <div> 
          <h1>UrbanBlurbin</h1>
          <Map/>
          </div>
		);
	}

});

module.exports = App;