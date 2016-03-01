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
	              <section className="group usa-state-item">
	              <ul className="group state-cities">
	              <h1 className="state-name">{this.state.usaState.name}</h1>
	              <li className="top-cities-header">Top cities:</li>
	              <li >Top City One</li>
	              <li >Top City Two</li>
	              <li >Top City Three</li>
	              </ul>
	              </section>
	              
	             <div className='group city-detail'>
	               {this.props.children}
	             <h1>Search for a specific city to see their blurbs</h1>
	              <SearchBar options={options} router={this.context.router}/>
	             </div> 
	           </div>
           </div>
		);
	}

});

module.exports = USAState;