var React = require('react');
var Map = require('./Map');
var NavBar = require('./NavBar');


var App = React.createClass({
	
	contextTypes: {
     router: React.PropTypes.object.isRequired
    },
	render: function(){
		return(
          <div className="app"> 
          <NavBar/>
           {this.props.children}
          </div>
		);
	}

});

module.exports = App;