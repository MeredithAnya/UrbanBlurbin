var React = require('react');

var BlurbItem = React.createClass({
   render: function(){
   	return (
   		<div className="group blurb-item">
   		<ul>
   		<li className="ratings"><span className="rating-title">Traffic</span> <span className="rating-num">{this.props.traffic}</span></li>
   		<li className="ratings"><span className="rating-title">Weather</span> <span className="rating-num">{this.props.weather}</span></li>
   		<li className="ratings"><span className="rating-title">Food</span><span className="rating-num">{this.props.food}</span></li>
   		<li className="ratings"><span className="rating-title">Nightlife</span><span className="rating-num">{this.props.nightlife}</span></li>
         </ul>
   		<li className="group blurb-text">{this.props.blurb}</li>
   		</div>
   		);
   }
});

module.exports = BlurbItem;