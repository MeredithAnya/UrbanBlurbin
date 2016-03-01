var React = require('react');
var CityStore = require('../stores/cityStore');
var ApiUtil = require('../util/apiUtil');
var Blurb = require('./Blurb');
var Averages = require('./Averages');

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
		
		if (this.state.city.blurbs){
			var blurbs = [];
			this.state.city.blurbs.forEach(function(blurb){
				blurbs.push(blurb);
			});
		}
		if (this.state.city.avgs){
			var averages = this.state.city.avgs;
		}
		
		return (
			<div className="group usa-city">
			  <li>Stats for {this.state.city.name}</li>
			  <Averages avgs={averages}/>
			  <div className="city-blurbs">
              	<Blurb blurbs={blurbs}/>
              </div>
            </div>
		 );
	}

});

module.exports = City;