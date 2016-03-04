var React = require('react');
var SearchAllCities = require('./SearchAllCities');
var BlurbCityStore = require('../stores/BlurbCityStore');

var WriteABlurb = React.createClass({
  getInitialState: function(){
    return {cities: BlurbCityStore.all()};
  },
  componentDidMount: function(){
    this.cityToken = BlurbCityStore.addListener(this.onChange);
    ApiUtil.fetchBlurbCities();
  },
  onChange: function(){
    this.setState({cities: BlurbCityStore.all()});
  },
  componentWillUnmount: function(){
    this.cityToken.remove();
  },

  render: function(){
  	return (
  		<div className="group write-blurb-tab">
  		 <p> Which city do you want to blurb about?</p>
  		 <SearchAllCities cities={this.state.cities}/>
  		 <button onClick={this.props.closeBlurb}>cancel</button>
  		</div>
  	 );
  }
});

module.exports = WriteABlurb;