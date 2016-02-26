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
  }
};

module.exports = ApiUtil;