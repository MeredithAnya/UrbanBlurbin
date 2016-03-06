var React = require('react');
var SearchAllCities = require('./SearchAllCities');
var BlurbCityStore = require('../stores/blurbCityStore');
var ApiUtil = require('../util/apiUtil');
var ModalForm = require('./ModalForm');

var WriteABlurb = React.createClass({
  getInitialState: function(){
    return {cities: BlurbCityStore.all(),
            modalIsOpen: false};
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

  render: function(){
  	return (
  		<div className="group write-blurb-tab">
  		 <p> Which city do you want to blurb about?</p>
  		 <SearchAllCities cities={this.state.cities}/>
  		 <button onClick={this.openModal}>Go Blurb</button>
  		 <ModalForm isOpen={this.state.modalIsOpen}
			     	           onRequestClose={this.closeModal}
			     	           cityId={1}/>
			     	           
  		 <button onClick={this.props.closeBlurb}>cancel</button>
  		</div>
  	 );
  }
});

module.exports = WriteABlurb;