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
	componentWillReceiveProps: function(newProps){  
      var id = parseInt(newProps.params.stateId);
      ApiUtil.fetchState(id); 	
     
	},
	_onChange: function(){ 
       this.setState({usaState: StateStore.all(),
       	              cities: StateStore.getCities()});
	},
	componentWillUnmount: function(){
		this.stateToken.remove();
	},

	topCities: function(){
		
      if (this.state.cities){
      	var that = this;
      	var topCities = this.state.cities.map(function(topCity, index){
      	var link = "/states/" + that.state.usaState.id + "/cities/" + topCity.id;
      		return <li key={index} className="top-city"><Link className="top-city-link" to={link}>{topCity.name}</Link><span className="top-city-rating">{topCity.avgs.overall}</span></li>;
      	});
      }
      return topCities;
	},

	 contextTypes: {
     router: React.PropTypes.object.isRequired
    },
  

	render: function(){
		
		if (this.state.usaState.cities){
			
			var cities = this.state.usaState.cities.map(function(city, index){
	          return <li className='group state-cities' key={index}>{city.name}</li>;
			});	
	
			if (this.props.params.cityId){
				var searchMoreCities = (<div className="search-more-cities">
										<h1>Search other cities in {this.state.usaState.name}</h1>
	                                	<AutocompleteCities router={this.context.router} 
	                                	                    stateId={this.state.usaState.id} 
	                                	                    cities={this.state.usaState.cities}/>
	                                </div>);
			}else 
			  var searchCities = (<div>
										<h1>Search for cities in {this.state.usaState.name}</h1>
	                                	<AutocompleteCities router={this.context.router} 
	                                	                    stateId={this.state.usaState.id} 
	                                	                    cities={this.state.usaState.cities}/>
	                               </div>);
	
			
		}
			var topCities = this.topCities();
      
        
		return (

           <div className="state-component">
             <SideBar/>
	           <div className="group usa-state">
	              <section className="group usa-state-item">
	              <ul className="group state-cities">
	              <h1 className="state-name">{this.state.usaState.name}</h1>
	              <h2 className="top-cities-header">TOP CITIES</h2>
	              {topCities}
	              </ul>
	              {searchMoreCities}

	              </section>
	              
	             <div className='group city-detail'>
                 <ModalButton cityId={this.props.params.cityId}
                              stateId={this.props.params.stateId}/>
	               {this.props.children}
	             {searchCities}
	             </div>
			    
			   </div>
			      
	           
           </div>
		);
	}

});

module.exports = USAState;