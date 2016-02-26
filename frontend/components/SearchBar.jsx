 var React = require('react');
 var STATE_IDS = require('../constants/stateIDs');


var SearchBar = React.createClass({
    getInitialState: function(){
     return {searchedCity: {}};
    },

	placeChanged: function(){
		
	 	
	 var stateId = STATE_IDS[this.searchedCity.address_components[2].short_name];
	 var city = this.searchedCity.address_components[0].long_name;	
     this.setState({searchedCity: {city: city,
                                   stateId: stateId }});
	},
	handleSearch: function(){
		var that = this;
		var cityName = this.state.searchedCity.city;
		var stateId = this.state.searchedCity.stateId;
		$.ajax({
           url: "api/city/" + cityName + "/" + stateId,
           method: 'GET',
           success: function(city){
           	that.props.router.replace("/states/"+city.id);
           }
		 })
			
		
	},

    componentDidMount: function(){
    	
	var input = document.getElementById('pac-input');
	var searchBox = new google.maps.places.SearchBox(input);
	
	var that = this;
	var autocomplete = new google.maps.places.Autocomplete(input, this.props.options);
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