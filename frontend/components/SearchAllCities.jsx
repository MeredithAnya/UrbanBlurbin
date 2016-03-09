var React = require('react');
var STATE_NAMES = require('../constants/stateNames');

var SearchAllCities = React.createClass({
	getInitialState: function () {
      return { inputVal: "" };
	},

	handleInput: function (event) {
     
	  this.setState({ inputVal: event.currentTarget.value });
	},

	matches: function () {
	    var matches = [];
	    if(this.state.inputVal.length === 0){
	      var cities = [];
	      this.props.cities.map(function(city){
            cities.push([city.name, STATE_NAMES[city.state.id]]);
	      });
	      return cities;

	    }

	    this.props.cities.forEach(function (city) {
	      var sub = city.name.slice(0, this.state.inputVal.length);
	      if(sub.toLowerCase() === this.state.inputVal.toLowerCase()){
	        matches.push([city.name, STATE_NAMES[city.state.id]]);
	      }
	    }.bind(this));

	    if (matches.length === 0) {
	      matches.push("No matches");
	    }

	    return matches;
	},

	 selectCity: function (event) {
	  	event.preventDefault();
	    var city = event.currentTarget.innerText;
      
	    
	    this.setState({ inputVal: city});
	  },

	  render: function () {
	  	
	   if (this.props.cities){	
	    var results = this.matches().map(function (result, i) {
	    	var cityAndState = result[0] + ", " + result[1];
	      return (
	          <li key={i}  onClick={this.selectCity}>{cityAndState}</li>
	      );
	    }.bind(this));
        }

	    return(
	      <div className="city-search-blurb-container">
	        <input className="city-search-blurb" onChange={this.handleInput} value={this.state.inputVal} />
	        <ul className="city-search-item-blurb" onClick={this.props.selectedCity} >
	          {results}
	        </ul>
	      </div>
	    );
	  }

});

module.exports = SearchAllCities;