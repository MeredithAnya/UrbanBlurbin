var React = require('react');
var CityStore = require('../stores/cityStore');
var ModalForm = require('./ModalForm');

var ModalButton = React.createClass({
	
	getInitialState: function(){
      return {modalIsOpen: false};
	},
	openModal: function() {
    	this.setState({modalIsOpen: true});
    },

	closeModal: function() {
	    this.setState({modalIsOpen: false});
	},
    render: function() {
    	
	  if (this.props.cityId){
    	var city = CityStore.find(parseInt(this.props.cityId));
    	if (city){
        	return (<div className="group" id="modal">
                               <img className="bird-icon" src="./assets/bird-icon.png"></img>
        					   <button className="cloud-modal" onClick={this.openModal}>Have something to say about {city.name} ?</button>
			     	<ModalForm isOpen={this.state.modalIsOpen}
			     	           onRequestClose={this.closeModal}/>
			     	           </div>
			     	);	
    	}
             
      }
    	return <div/>;
    }
});

module.exports = ModalButton;