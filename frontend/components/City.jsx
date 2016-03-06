var React = require('react');
var CityStore = require('../stores/cityStore');
var ApiUtil = require('../util/apiUtil');
var Blurb = require('./Blurb');
var Averages = require('./Averages');
var FavoriteStore = require('../stores/favoriteStore');

var City = React.createClass({
	getInitialState: function(){
		return {city: {},
	            favorites: FavoriteStore.all()};
	},
	componentDidMount: function(){

     var id = parseInt(this.props.params.cityId);
	 this.cityToken = CityStore.addListener(this._onChange);
     ApiUtil.fetchCity(id);

	},
	_onChange: function(){
		
	 var id = parseInt(this.props.params.cityId);
     this.setState({city: CityStore.find(id)});
	},
	componentWillReceiveProps: function(newProps){
		
     var id = parseInt(newProps.params.cityId);
     ApiUtil.fetchCity(id);
	},
	componentWillUnmount: function(){
      this.cityToken.remove();
	},
	favoriteCity: function(){

		var favorite = { favorite: {

			username: window.current_user,
			city_id: this.state.city.id
		  }
		}
		
		ApiUtil.favoriteCity(favorite);
		
	},
	render: function(){
        debugger;
		
		if (this.state.city){
			if (this.state.city.blurbs){
				var blurbs = [];
				this.state.city.blurbs.forEach(function(blurb){
					blurbs.push(blurb);
				});
				blurbs = blurbs.reverse();
			}	
			if (this.state.city.avgs){
				var averages = this.state.city.avgs;
				var overall = averages.overall;
			}
			var cityName = this.state.city.name;
		}

		
		return (
			<div className="group usa-city">
			  <section className="city-name-title">
			  <span className="city-name">{cityName}</span>
			  <span  style={{float: 'right', fontSize: '22px', }} className="overall-score"> Overall {overall}</span>
			  <button onClick={this.favoriteCity}><img id="heart-icon-red" src="./assets/heart-icon.png"></img></button>
			  </section>
			  <Averages avgs={averages}/>
			  <div className="city-blurbs">
              	<Blurb blurbs={blurbs}/>
              </div>
            </div>
		 );
	}

});

module.exports = City;