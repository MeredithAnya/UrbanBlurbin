var React = require('react');
var BlurbItem = require('./BlurbItem');

var Blurb = React.createClass({
  render: function(){
  	
  	if (this.props.blurbs){
	  	var blurbItems = this.props.blurbs.map(function(blurb, index){
	      return <BlurbItem key={index}
                          blurb={blurb.blurb} 
	                        traffic={blurb.traffic} 
	                        weather={blurb.weather}
	                        food={blurb.food}
	                        nightlife={blurb.nightlife}/>;
	  	});
  		
  	}
  	return (
  		<div className="blurb-header">
  		
  		{blurbItems}
  		</div>
  		);
  }
});

module.exports = Blurb;