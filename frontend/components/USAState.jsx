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

		return (
           <div>
	           <div className="usa-state">
	              <li className="usa-state-item">This is {this.state.usaState.name}</li>
	           </div>
           </div>
		);
	}

});

module.exports = USAState;