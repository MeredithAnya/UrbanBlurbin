var React = require('react');

var AutocompleteCities = React.createClass({
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
            cities.push(city.name);
	      });
	      return cities;

	    }

	    this.props.cities.forEach(function (city) {
	      var sub = city.name.slice(0, this.state.inputVal.length);
	      if(sub.toLowerCase() === this.state.inputVal.toLowerCase()){
	        matches.push(city.name);
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
	    
	    this.setState({ inputVal: city });
	  },
	  handleSearch: function(event){
           event.preventDefault();
           
           var id;
           var stateId = this.props.stateId;
           var name = this.state.inputVal;
           this.props.cities.forEach(function(city){
	            if (city.name == name){
	            	id = city.id;
	            }
	       });

          this.props.router.replace({pathname:'/states/' + stateId + "/cities/" + id});
	  },

	  render: function () {
	  	
	   if (this.props.cities){	
	    var results = this.matches().map(function (result, i) {
	      return (
	          <li key={i} onClick={this.selectCity}>{result}</li>
	      );
	    }.bind(this));
        }

	    return(
	      <div className="city-search-container">
	        <input className="city-search" onChange={this.handleInput} value={this.state.inputVal} />
	        <button onClick={this.handleSearch} className="city-search-button"></button>
	        <ul className="city-search-item">
	          {results}
	        </ul>
	      </div>
	    );
	  }

});

module.exports = AutocompleteCities;