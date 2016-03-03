var React = require('react');
var SideBar =require('./SideBar');
var SearchBar =require('./SearchBar');
var StateStore = require('../stores/stateStore');
var ApiUtil = require('../util/apiUtil');
var Modal = require('react-modal');
var AutocompleteCities = require('./AutocompleteCities');
var ModalButton = require('./ModalButton');
var ModalForm = require('./ModalForm');
var Link = require('react-router').Link





var USAState = React.createClass({

	getInitialState: function(){
		return {usaState: StateStore.all(),
			    cities: []};
	},

	componentDidMount: function(){
     
	 var id = parseInt(this.props.params.stateId);
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
			var link = "/states/" + this.state.usaState.id + "/cities/1";
			var topCityOne = <Link to={link}>{this.state.usaState.topCityOne.name}</Link>;
			var topCityTwo = <Link to="/">{this.state.usaState.topCityTwo.name}</Link>;
			var topCityThree = <Link to="/">{this.state.usaState.topCityThree.name}</Link>;
	
			
		}
      
        
		return (
           <div>
             <SideBar/>
	           <div className="group usa-state">
	              <section className="group usa-state-item">
	              <ul className="group state-cities">
	              <h1 className="state-name">{this.state.usaState.name}</h1>
	              <h2 className="top-cities-header">Top cities:</h2>
	              <li >{topCityOne}</li>
	              <li >{topCityTwo}</li>
	              <li >{topCityThree}</li>
	              </ul>

	              </section>
	              
	             <div className='group city-detail'>
	               {this.props.children}
	             <h1>Search by cities in {this.state.usaState.name}</h1>
	              <AutocompleteCities cities={this.state.usaState.cities}/>
	             </div>
	             
                 <ModalButton cityId={this.props.params.cityId} />
                 
			    
			       </div>
			      
	           
           </div>
		);
	}

});

module.exports = USAState;