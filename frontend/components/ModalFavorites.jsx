var React = require('react');
var Modal = require('react-modal');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/apiUtil');

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 200,
    left              : 450,
    right             : 450,
    bottom            : 200,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {

    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var ModalFavorites = React.createClass({
	mixins: [LinkedStateMixin],
	loginDemoUser: function(){
	  var demo = {user: {username: "meredith",
	                     password: "meredith",
	                     cityId: this.props.cityId,
	                     stateId: this.props.stateId}};	
      ApiUtil.loginDemoUser(demo);
      this.props.onRequestClose();
      
	},

	render: function(){
		
		
		return (
	       <div className="favorites-modal">
			<Modal
	          isOpen={this.props.isOpen}
	          onRequestClose={this.props.onRequestClose}
	          style={customStyles}>
	          <button onClick={this.props.onRequestClose}>X</button>
            
	          <ul>
	          <li> Oops! </li>
	          <li>You must be signed in to add a city to your favorites!</li>
	          <a href="/session/new">Sign In</a>
	          <button onClick={this.loginDemoUser}>Demo Account</button>
	          </ul>
	        </Modal>
	        </div>
			);
	}

});

module.exports = ModalFavorites;