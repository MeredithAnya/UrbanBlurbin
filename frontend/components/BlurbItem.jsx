var React = require('react');

var BlurbItem = React.createClass({
   render: function(){
   	return (
   		<div className="group blurb-item">
   		<ul>
   		<li className="ratings">Traffic {this.props.traffic}</li>
   		<li className="ratings">Weather {this.props.weather}</li>
   		<li className="ratings">Food {this.props.food}</li>
   		<li className="ratings">Nightlife {this.props.nightlife}</li>
         </ul>
   		<li className="group blurb-text">{this.props.blurb}</li>
   		</div>
   		);
   }
});

module.exports = BlurbItem;