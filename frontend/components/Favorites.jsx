var React = require('react');

var Favorities = React.createClass({
	getInitialState: function(){
      return {currentFavorites: FavoriteStore.all()};
	},
	componentDidMount: function(){
		this.favoriteToken = FavoritieStore.addListener(this.onChange);
		ApiUtil.fetchUserFavorites();
	}
	onChange: function(){
      this.favoriteToken.remove();
	}
	render: function(){
		return  (
			<div className="favorites-tab">
			</div>
			);
	}

});

module.exports = Favorities;