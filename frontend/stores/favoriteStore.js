var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _favorites = [];

var FavoriteStore = new Store(AppDispatcher);

FavoriteStore.all = function(){
  return _favorites.slice(0);
};

var resetFavorites = function(favorites){
  _favorites = [];	
  favorites.forEach(function(fav){
  	_favorites.push(fav);
  });
};

FavoriteStore.__onDispatch = function(payload){
  switch(payload.actionType){
  	case "FAVORITES_RECEIVED":
	    resetFavorites(payload.favorites);
	  	FavoriteStore.__emitChange();
	  	break;

  }
};

module.exports = FavoriteStore;