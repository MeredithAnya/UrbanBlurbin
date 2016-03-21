var StateActions = require('../actions/stateActions');
var CityActions = require('../actions/cityActions');
var FavoriteActions = require('../actions/favoriteActions');

var ApiUtil = {
  fetchState: function(id){
   
  	$.ajax({
      url: 'api/states/' + id,
      type: 'GET',
      dataType: 'json',
      success:(function(state){
      	StateActions.receiveState(state);
      })
  	});
  },
  fetchCity: function(id){
    
    $.ajax({
      url: 'api/cities/' + id,
      type: 'GET',
      dataType: 'json',
      success:(function(city){
        CityActions.receiveCity(city);
      })
    });
  },
  fetchBlurbCities: function(){
    $.ajax({
      url: 'api/cities',
      type: 'GET',
      dataType: 'json',
      success:(function(cities){
        CityActions.receiveBlurbCities(cities);
      })
    });
  },
  createBlurb: function(blurb){
    $.ajax({
      url: 'api/blurbs',
      type: 'POST',
      dataType: 'json',
      data: blurb,
      success:(function(city){
        CityActions.receiveCity(city);
      })

    });
  },
  fetchUserFavorites: function(username){
    $.ajax({
      url: 'api/favorites/' + username,
      type: 'GET',
      dataType: 'json',
      success:(function(favorites){
        FavoriteActions.receiveFavorites(favorites);
      })

    });
  },
  favoriteCity: function(favorite){
    
    $.ajax({
      url: 'api/favorites',
      type: 'POST',
      dataType: 'json',
      data: favorite,
      success:(function(favorites){
        FavoriteActions.receiveFavorites(favorites);
      })

    });
  }, 
  unfavoriteCity: function(favorite){

    $.ajax({
      url: 'api/favorites',
      type: 'DELETE',
      dataType: 'json',
      data: favorite,
      success:(function(favorites){
        
        FavoriteActions.receiveFavorites(favorites);
      })

    });
  },
  signOut: function(){
    $.ajax({
      url: '/session',
      method: 'DELETE',
      success: function(){
           window.location = "/";
      }

    });

  },
  loginDemoUser: function(demo){
    
    $.ajax({
      url: 'session',
      type: 'POST',
      dataType: 'json',
      data: demo,
      success:(function(info){
        window.current_user = info.name;
        window.location = "#/states/" + info.stateId + "/cities/" + info.cityId;
      })
    });
  }
  
};

module.exports = ApiUtil;