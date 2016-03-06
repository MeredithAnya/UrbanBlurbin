var StateActions = require('../actions/stateActions');
var CityActions = require('../actions/cityActions');
var FavoriteActions = require('../actions/FavoriteActions');

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
      url: 'api/cities/',
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
  }
  
};

module.exports = ApiUtil;