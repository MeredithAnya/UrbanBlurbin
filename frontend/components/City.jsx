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

     var id = parseInt(this.props.params.cityId);
	 this.cityToken = CityStore.addListener(this._onChange);
     ApiUtil.fetchCity(id);
	},
	_onChange: function(){
	 var id = parseInt(this.props.params.cityId);
     this.setState({city: CityStore.find(id)});
	},
	componentWillReceiveProps: function(newProps){
      debugger;
	},
	componentWillUnmount: function(){
      this.cityToken.remove();
	},
	render: function(){
		
		if (this.state.city){
			if (this.state.city.blurbs){
				var blurbs = [];
				this.state.city.blurbs.forEach(function(blurb){
					blurbs.push(blurb);
				});
				blurbs = blurbs.reverse();
			}	
			if (this.state.city.avgs){
				var averages = this.state.city.avgs;
				var overall = averages.overall;
			}
			var cityName = this.state.city.name;
		}
		
		return (
			<div className="group usa-city">
			  <li className="city-name-title">{cityName} <span style={{float: 'right', fontSize: '22px', }} className="overall-score"> Overall {overall}</span></li>
			  <Averages avgs={averages}/>
			  <div className="city-blurbs">
              	<Blurb blurbs={blurbs}/>
              </div>
            </div>
		 );
	}

});

module.exports = City;