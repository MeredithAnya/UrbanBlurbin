var React = require('react');
var SideBar =require('./SideBar');
var SearchBar =require('./SearchBar');
var StateStore = require('../stores/stateStore');
var ApiUtil = require('../util/apiUtil');

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
	componentWillUnmount: function(){
		this.stateToken.remove();
	},
	 contextTypes: {
     router: React.PropTypes.object.isRequired
    },

	render: function(){
		
		if (this.state.usaState.length != 0){
			
			var cities = this.state.usaState.cities.map(function(city, index){
	          return <li className='group state-cities' key={index}>{city.name}</li>;
			});	
		}
		var options = {
		  types: ["(cities)"],
		  componentRestrictions: {country: "US"}
		 };
		 
      
		return (
           <div>
             <SideBar/>
	           <div className="group usa-state">
	              <li className="group usa-state-item">This is {this.state.usaState.name}</li>
	              {cities}
	              <SearchBar options={options} router={this.context.router}/>
	           </div>
	             <div className='city-detail'>
	               {this.props.children}
	             </div> 
           </div>
		);
	}

});

module.exports = USAState;