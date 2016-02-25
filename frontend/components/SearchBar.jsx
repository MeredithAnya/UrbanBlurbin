 var React = require('react');

var SearchBar = React.createClass({
    getInitialState: function(){
     return {searchedCity: " "};
    },
	placeChanged: function(){
     this.setState({searchedCity: this.searchedCity.name});
	},
	handleSearch: function(){
		//get city object from city Store
		//redirect to page /state/ city.state_id/ city_id
		debugger;
	},

    componentDidMount: function(){
    	
	var input = document.getElementById('pac-input');
	var searchBox = new google.maps.places.SearchBox(input);
	var options = {
	  types: ['(cities)'],
	  componentRestrictions: {country: "us"}
	 };
	var that = this;
	var autocomplete = new google.maps.places.Autocomplete(input, options);
    this.placeToken = autocomplete.addListener('place_changed', function(){
    	that.searchedCity = autocomplete.getPlace();
    	that.placeChanged();
    });	
    },
    componentWillUnmount: function(){
     this.placeToken.remove();
    },

	render: function(){
		return (
		  <form onSubmit={this.handleSearch}>
			<input id="pac-input" className="controls" type="text" placeholder="Search Box"/>
			<button>Search</button>
		  </form>	
		);
	}
});

module.exports = SearchBar;