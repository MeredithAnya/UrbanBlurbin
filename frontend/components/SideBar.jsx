var React = require('react');
var Link = require('react-router').Link
var WriteABlurb = require('./WriteABlurb');
var Favorites = require('./Favorites');

var SideBar = React.createClass({
  getInitialState: function(){
    return {blurbOpen: false,
            favoriteOpen: false};
  },
  openBlurb: function(){
   this.setState({blurbOpen: true});
  },
  closeBlurb: function(){
    this.setState({blurbOpen: false});
  },
  openFavorites: function(){
    this.setState({favoriteOpen: true});
  },
  closeFavorites: function(){
    this.setState({favoriteOpen: false});
  },

  render: function(){
    var blurbClass = (this.state.blurbOpen ? "sidebar-blurb-active" : "sidebar-blurb");
    var sidebarClass = (window.current_user ? "group sidebar-nav-with-favs" : "group sidebar-nav");
    var favoritesClass = (this.state.favoriteOpen ? "sidebar-favorites-active" :"sidebar-favorites" )
    if (this.state.blurbOpen){
      var blurbTab = <WriteABlurb closeBlurb={this.closeBlurb}/>;
    }
    if (window.current_user){
      var favoriteTabLi = <li onClick={this.openFavorites} className={favoritesClass}>My Fav Cities<img id="city-icon" src="./assets/city-icon.png"></img></li>;
    }
    if (this.state.favoriteOpen){ 
      var favoriteTab = <Favorites/>;
    }
   	return (
     
   		<header className="group sidebar-header">
   		<nav className={sidebarClass}>
          <ul className='group sidebar'>
           <Link to='/'>States<img id="states-icon" src="./assets/states-icon.png"></img></Link>
           <li onClick={this.openBlurb} className={blurbClass}>Write A Blurb<img id="blurb-icon" src="./assets/blurb-icon.png"></img></li>
           {favoriteTabLi}
           </ul>
   		</nav>
      {blurbTab}
      {favoriteTab}
   		</header>

   	);
   }
});

module.exports = SideBar;