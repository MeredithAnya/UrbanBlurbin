var AppDispatcher = require('../dispatcher/dispatcher');

var FavoriteActions = {
	receiveFavorites: function(favorites){
		AppDispatcher.dispatch({
			actionType: "FAVORITES_RECEIVED",
			favorites: favorites
		});
	}

};

module.exports = FavoriteActions;