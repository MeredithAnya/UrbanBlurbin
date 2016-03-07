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
     this.favoriteToken = FavoriteStore.addListener(this.changeFavs);
	 this.cityToken = CityStore.addListener(this._onChange);
	 ApiUtil.fetchUserFavorites(window.current_user);
     ApiUtil.fetchCity(id);

	},
	_onChange: function(){
		
	 var id = parseInt(this.props.params.cityId);
     this.setState({city: CityStore.find(id)});
	},
	changeFavs: function(){
      this.setState({favorites: FavoriteStore.all()});
	},
	componentWillReceiveProps: function(newProps){
		
     var id = parseInt(newProps.params.cityId);
     ApiUtil.fetchCity(id);
	},
	componentWillUnmount: function(){
	  this.favoriteToken.remove();
      this.cityToken.remove();
	},
	favoriteCity: function(){
		var favorite = { favorite: {

			username: window.current_user,
			city_id: this.state.city.id
		  }
		}
		this.cityFavorited() ? ApiUtil.unfavoriteCity(favorite) : ApiUtil.favoriteCity(favorite);
		
		
	},
	cityFavorited: function(){
		var favorited = false;
		var that = this;
		this.state.favorites.forEach(function(city){
			if (city.id == that.state.city.id){
               favorited = true;
			} 

		});
		return favorited;
	},
	render: function(){
       
		var heartId = this.cityFavorited() ? "heart-icon-black" : "heart-icon-red";
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
			  <button onClick={this.favoriteCity}><img id={heartId} alt={"favorite" + cityName} src="./assets/heart-icon.png"></img></button>
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