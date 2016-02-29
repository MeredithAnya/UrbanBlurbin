var React = require('react');
var CityStore = require('../stores/cityStore');
var ApiUtil = require('../util/apiUtil');

var City = React.createClass({
	getInitialState: function(){
		return {city: {}};
	},
	componentDidMount: function(){
     var id = parseInt(this.props.location.query.cityId);
	 this.cityToken = CityStore.addListener(this._onChange);
     ApiUtil.fetchCity(id);
	},
	_onChange: function(){
	 
     this.setState({city: CityStore.find()});
	},
	componentWillReceiveProps: function(newProps){
     
	},
	componentWillUnmount: function(){
      this.cityToken.remove();
	},
	render: function(){
		return (
			<div className="group usa-city">
			  <li>This is {this.state.city.name}</li>
			</div>
		 );
	}

});

module.exports = City;