var React = require('react');
var Modal = require('react-modal');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

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
    mixins: [LinkedStateMixin],
    getInitialState: function(){
    	return { traffic: "0",
    	         weather: "0",
    	         food:    "0",
    	         nightlife: "0",
    	         blurb: "hi"};
    },
	submitBlurb: function(e){
		e.preventDefault();

		var blurb = { blurb: {

			traffic: this.state.traffic,
			weather: this.state.weather,
			food: this.state.food,
			nightlife: this.state.nightlife,
			blurb: this.state.blurb,
			city_id: this.props.cityId
		  }
		}
       debugger;
    	ApiUtil.createBlurb(blurb);
    	this.props.onRequestClose();

    }, 

    render: function(){
    	

   	return (
   		    <Modal
	          isOpen={this.props.isOpen}
	          onRequestClose={this.props.onRequestClose}
	          style={customStyles}>
	          
	          <form className="group modal-form" onSubmit={this.submitBlurb}>
	            <label>Traffic</label>
	            <label>Weather</label>
                <label>Food</label>
                <label>Nightlife</label>

	              <input type="range" defaultValue={0} max={5} step={1} valueLink={this.linkState('traffic')} />

	              <input type="range" defaultValue={0} max={5} step={1} valueLink={this.linkState('weather')}/>

                  <input type="range" defaultValue={0} max={5} step={1} valueLink={this.linkState('food')}/>
                 
	              <input type="range" defaultValue={0} max={5} step={1} valueLink={this.linkState('nightlife')}/>
               <div className="blurb-input">
	             <label>Blurb!</label>
	              <input type="text"  valueLink={this.linkState('blurb')}/> 
	            </div>
	            <input type="submit"/>
	            <button onClick={this.props.onRequestClose}>close</button>
            </form>
	        </Modal>
   		);
   }
});


module.exports = ModalForm;
