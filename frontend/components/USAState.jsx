var React = require('react');
var NavBar = require('./NavBar');

var USAState = React.createClass({

	getInitialState: function(){
		return {usaState: StateStore.all()};
	},
	componentDidMount: function(){
	 var id = parseInt(this.props.location.query.stateId);
	 this.stateToken = StateStore.addListener(this._onChange);
     ApiUtil.fetchState(id);
	},
	_onChange: function(){
	
     this.setState({usaState: StateStore.all()});
	},

	render: function(){
		
		if (this.state.usaState.length != 0){
			
			var cities = this.state.usaState.cities.map(function(city, index){
	          return <li className='group state-cities' key={index}>{city.name}</li>;
			});	
		}
      
		return (
           <div>
	           <div className="usa-state">
	              <li className="group usa-state-item">This is {this.state.usaState.name}</li>
	              {cities}
	           </div>
           </div>
		);
	}

});

module.exports = USAState;