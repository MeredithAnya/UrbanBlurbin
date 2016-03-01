var React = require('react');
var ReactSlider = require('react-slider');

var Averages = React.createClass({

	render: function(){
	  
    if (this.props.avgs) {

		return (	

          <div className="city-averages">
	          <li className="group city-avg-title">Traffic:</li> 
	          <li>{this.props.avgs.traffic}</li>
	          <li className="group city-avg-title">Weather:</li> 
	          <li>{this.props.avgs.weather}</li>
	      	  <li className="group city-avg-title">Food:</li>
	      	  <li>{this.props.avgs.food}</li>
	      	  <li className="group city-avg-title">Nightlife:</li>
	      	  <li>{this.props.avgs.nightlife}</li>
          </div>
		);
    } else {
    	return (
    		<div/>
    		);
    }
	  
	

	}

});

module.exports = Averages;