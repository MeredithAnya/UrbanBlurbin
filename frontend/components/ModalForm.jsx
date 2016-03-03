var React = require('react');
var Modal = require('react-modal');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var ModalForm = React.createClass({

	submitBlurb: function(e){
    	debugger;

    },

    render: function(){
    	

   	return (
   		    <Modal
	          isOpen={this.props.isOpen}
	          onRequestClose={this.props.onRequestClose}
	          style={customStyles}>
	          
	          <form className="modal-form" onSubmit={this.submitBlurb}>
	            <label>Traffic
	              <input type="range" defaultValue={0} max={5} step={1} name="blurb[traffic]"/>
	            </label>

	            <label>Weather
	              <input type="range" defaultValue={0} max={5} step={1} name="blurb[weather]"/>
	            </label>
	            <input type="submit"/>
	          </form>
	            <button onClick={this.props.onRequestClose}>close</button>
	        </Modal>
   		);
   }
});


module.exports = ModalForm;
