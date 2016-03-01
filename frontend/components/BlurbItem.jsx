var React = require('react');

var BlurbItem = React.createClass({
   render: function(){
   	return (
   		<div className="blurb-item">
   		<ul>
   		<li>{this.props.traffic}</li>
   		<li>{this.props.weather}</li>
   		<li>{this.props.food}</li>
   		<li>{this.props.nightlife}</li>
   		<li>{this.props.blurb}</li>
   		</ul>
   		</div>
   		);
   }
});

module.exports = BlurbItem;