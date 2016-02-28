var React = require('react');
var CityStore = require('../stores/cityStore');
var ApiUtil = require('../util/apiUtil');

var City = React.createClass({
	getInitialState: function(){
		return {city: {}};
	},
	componentDidMount: function(){
     
     var id = parseInt(this.props.location.query.cityId);
	 this.stateToken = CityStore.addListener(this._onChange);
     ApiUtil.fetchCity(id);
	},
	_onChange: function(){
	  debugger;
     this.setState({city: CityStore.find()});
	},
	componentWillReceiveProps: function(newProps){
     debugger;
	},
	render: function(){
		return (
			<div className="group usa-city">
			  <li>This is the City Component</li>
			</div>
		 );
	}

});

module.exports = City;