var React = require('react');
var Link = require('react-router').Link

var SideBar = React.createClass({
   render: function(){
   	return (
   		<header className="group sidebar-header">
   		<nav className="group sidebar-nav">
          <ul className='group sidebar'>
           <Link to='/'>States<img id="states-icon" src="./assets/states-icon.png"></img></Link>
           <Link to='/'>Cities</Link>
           <Link to='/'>Write A Blurb</Link>
          </ul>
   		</nav>
   		</header>
   	);
   }
});

module.exports = SideBar;