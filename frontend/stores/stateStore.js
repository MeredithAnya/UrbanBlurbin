var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _states = [];

var StateStore = new Store(AppDispatcher);

StateStore.all = function(){
	return _states.slice(0);
};

StateStore.findStore = function(id){
  _states.forEach(function(state){
  	if (state.id === id){
  		var found = state;
  		break;
  	}
  });
    return found;

};

StateStore.__onDispatch = function(payload){
  switch(payload.actionType){
  	case "":
 
  	StateStore.__emitChange();
  	break;
  }
};