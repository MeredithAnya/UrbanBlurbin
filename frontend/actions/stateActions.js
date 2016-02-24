var AppDispatcher = require('../dispatcher/dispatcher');

var StateActions = {
	receiveState: function(state){
		AppDispatcher.dispatch({
			actionType: "STATE_RECEIVED",
			state: state
		});
	}

};

module.exports = StateActions;