var StateActions = require('../actions/stateActions');

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
      sucess:(function(city){
        CityActions.receiveCity(city);
      })
    });
  }
};

module.exports = ApiUtil;