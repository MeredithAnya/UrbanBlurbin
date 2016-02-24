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
  	}
  });
    return found;

};
resetState = function(state){
  _states = state;
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