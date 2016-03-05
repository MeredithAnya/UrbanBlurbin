var React = require('react');
var Link = require('react-router').Link
var WriteABlurb = require('./WriteABlurb');

var SideBar = React.createClass({
  getInitialState: function(){
    return {blurbOpen: false};
  },
  openBlurb: function(){
   this.setState({blurbOpen: true});
  },
  closeBlurb: function(){
    this.setState({blurbOpen: false});
  },

  render: function(){
    if (this.state.blurbOpen){
      var blurbTab = <WriteABlurb closeBlurb={this.closeBlurb}/>;
    }
    if (window.current_user){
      debugger;
    }
   	return (
     
   		<header className="group sidebar-header">
   		<nav className="group sidebar-nav">
          <ul className='group sidebar'>
           <Link to='/'>States<img id="states-icon" src="./assets/states-icon.png"></img></Link>
           <li onClick={this.openBlurb} className="sidebar-blurb">Write A Blurb<img id="blurb-icon" src="./assets/blurb-icon.png"></img></li>
          </ul>
   		</nav>
      {blurbTab}
   		</header>

   	);
   }
});

module.exports = SideBar;