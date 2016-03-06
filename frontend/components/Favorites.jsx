var React = require('react');
var FavoriteStore = require('../stores/favoriteStore');
var ApiUtil = require('../util/apiUtil');
var Link = require('react-router').Link

var Favorities = React.createClass({
	getInitialState: function(){
      return {currentFavorites: FavoriteStore.all()};
	},
	componentDidMount: function(){
		this.favoriteToken = FavoriteStore.addListener(this.onChange);
		ApiUtil.fetchUserFavorites(window.current_user);
	},
	onChange: function(){
		this.setState({currentFavorites: FavoriteStore.all()});
	},
	componentWillUnmount: function(){
      this.favoriteToken.remove();

	},
	render: function(){
		if (this.state.currentFavorites){

		  var favs = this.state.currentFavorites.map(function(fav, index){
			return <Link className="favorites-city" key={index} to={'/states/'+ fav.state_id +'/cities/'+ fav.id}>{fav.name}</Link>
		  });

		}
		return  (
			<div className="favorites-tab">
			 <ul className="favorites-list">
              {favs}
             </ul>
			</div>
			);
	}

});

module.exports = Favorities;