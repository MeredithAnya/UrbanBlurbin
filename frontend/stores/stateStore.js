var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _state = {};

var StateStore = new Store(AppDispatcher);

StateStore.all = function(){
	return _state;
};

StateStore.getCities = function(){
   cities = []
   cities.push(_state.topCityOne);
   cities.push(_state.topCityTwo);
   cities.push(_state.topCityThree);
   return cities;
};

var resetState = function(state){
  _state = state;
};

StateStore.__onDispatch = function(payload){
  switch(payload.actionType){
  	case "STATE_RECEIVED":
    resetState(payload.state);
  	StateStore.__emitChange();
  	break;
  }
};

module.exports = StateStore;