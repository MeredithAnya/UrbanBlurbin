var React = require('react');
var Modal = require('react-modal');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/apiUtil');

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
    	         blurb: ""};
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
	            <ul className="list-of-labels">
                <label>Traffic</label>
	              <label>Weather</label>
                <label>Food</label>
                <label>Nightlife</label>
              </ul>  
                <section className="rating-inputs">
	              <input className="rating-traffic-input" type="range" defaultValue={0} max={5} step={1} valueLink={this.linkState('traffic')}/>

	              <input className="rating-weather-input" type="range" defaultValue={0} max={5} step={1} valueLink={this.linkState('weather')}/>

                <input className="rating-food-input" type="range" defaultValue={0} max={5} step={1} valueLink={this.linkState('food')}/>
                 
	              <input className="rating-nightlife-input" type="range" defaultValue={0} max={5} step={1} valueLink={this.linkState('nightlife')}/>
                </section>
                <section className="input-number-dynamic">
                <span >{this.state.traffic}</span>
                <span >{this.state.weather}</span>
                <span >{this.state.food}</span>
                <span >{this.state.nightlife}</span>
                </section> 
               <div className="blurb-input">
	             <label>Here is your chance to personalize your blurb for {this.props.cityName}!</label>
	              <textarea placeholder="Start Blurbing!" valueLink={this.linkState('blurb')}/> 
	            </div>
	            <input className="modal-submit-button" type="submit"/>
	            <button onClick={this.props.onRequestClose}>Cancel</button>
            </form>
	        </Modal>
   		);
   }
});


module.exports = ModalForm;
