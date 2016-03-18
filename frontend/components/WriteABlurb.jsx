var React = require('react');
var SearchAllCities = require('./SearchAllCities');
var BlurbCityStore = require('../stores/blurbCityStore');
var ApiUtil = require('../util/apiUtil');
var ModalForm = require('./ModalForm');
var STATE_IDS = require('../constants/stateIDs');

var WriteABlurb = React.createClass({
  getInitialState: function(){
    return {cities: BlurbCityStore.all(),
            modalIsOpen: false,
            finalCity: {}};
  },
  componentDidMount: function(){
    this.cityToken = BlurbCityStore.addListener(this.onChange);
    ApiUtil.fetchBlurbCities();
  },
  onChange: function(){
    this.setState({cities: BlurbCityStore.all()});
  },
  componentWillUnmount: function(){
    this.cityToken.remove();
  },
  openModal: function() {
	this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  selectedCity: function(event){
    event.preventDefault();
    
    var liElement = event.target.innerHTML,
        liLength = liElement.length,
        cityName = liElement.slice(0, liLength - 4),
        stateName = liElement.slice(cityName.length + 2);

      
      this.setState({finalCity: BlurbCityStore.findByNamesAndIds(cityName, STATE_IDS[stateName])});
  },

  render: function(){
    if (this.state.finalCity.id){
      var cityId = this.state.finalCity.id;
    }
  	return (
  		<div className="group write-blurb-tab">
  		 <p> Which city do you want to blurb about?</p>
  		 <SearchAllCities selectedCity={this.selectedCity} cities={this.state.cities}/>
  		 <button onClick={this.openModal}>Go Blurb</button>
  		 <ModalForm isOpen={this.state.modalIsOpen}
			     	           onRequestClose={this.closeModal}
			     	           cityId={cityId}
                       cities={this.state.cities}
                       cityName={this.state.finalCity.name}/>
			     	           
  		 <button onClick={this.props.closeBlurb}>cancel</button>
  		</div>
  	 );
  }
});

module.exports = WriteABlurb;