var AppDispatcher = require('../dispatcher/dispatcher');

var CityActions = {
	receiveCities: function(cities){
		AppDispatcher.dispatch({
			actionType: "CITIES_RECEIVED",
			cities: cities
		});
	},
	receiveCity: function(city){
		
		AppDispatcher.dispatch({
			actionType: "CITY_RECEIVED",
			city: city
		});
	}

};

module.exports = CityActions;