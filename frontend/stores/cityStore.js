var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _cities = {};

var CityStore = new Store(AppDispatcher);

CityStore.all = function(){
  var cities = [];	
  for(var id in _cities){
  	cities.push(_cities[id]);
  }
  return cities;
};

CityStore.find = function(id){
	return _cities[id];
};

resetCities = function(cities){
  _cities = {};	
  cities.forEach(function(city){
  	_cities[city.id] = city;
  });
};
resetCity = function(city){
  _cities[city.id] = city;
};

CityStore.__onDispatch = function(payload){
  switch(payload.actionType){
  	case "CITIES_RECEIVED":
	    resetCities(payload.cities);
	  	CityStore.__emitChange();
	  	break;
  	case "CITY_RECEIVED":
	    resetCity(payload.city);
	  	CityStore.__emitChange();
	  	break;
  }
};

module.exports = CityStore;