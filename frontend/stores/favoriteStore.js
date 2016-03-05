var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _favorities = [];

var FavoriteStore = new Store(AppDispatcher);

FavoriteStore.all = function(){
  return _favorities.slice(0);
};

var resetFavorites = function(favorites){
  _favorites = [];	
  favorities.forEach(function(fav){
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