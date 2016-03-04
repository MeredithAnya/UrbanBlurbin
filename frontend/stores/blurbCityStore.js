var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _cities = {};

var BlurbCityStore = new Store(AppDispatcher);

BlurbCityStore.all = function(){
  var cities = [];	
  for(var id in _cities){
  	cities.push(_cities[id]);
  }
  return cities;
};

var resetCities = function(cities){
  _cities = {};	
  cities.forEach(function(city){
  	_cities[city.id] = city;
  });
};

BlurbCityStore.__onDispatch = function(payload){
  switch(payload.actionType){
  	case "BLURB_CITIES_RECEIVED":
      
	    resetCities(payload.cities);
	  	BlurbCityStore.__emitChange();
	  	break;

  }
};

module.exports = BlurbCityStore;