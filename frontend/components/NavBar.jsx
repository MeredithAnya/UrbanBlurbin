var React = require('react');
var Link = require('react-router').Link;

var NavBar = React.createClass({
	getInitialState: function(){
		return {loggedIn: " "};

	},
	signOut: function(){
		$.ajax({
			url: '/session',
			method: 'DELETE',
			success: function(){
              window.location = "/";
			}

		});

	},

	render: function(){

		var signing ;
		if (window.current_user === undefined){
          signing = <a href="/session/new">Sign In</a>;
          var signup = <a href="/users/new">Sign Up</a>;
          
                    
		} else {
			var welcome = <li className="welcome" >Welcome,  {window.current_user}</li>;
			signing = <button onClick={this.signOut}> Sign Out </button>;
		}
	   
		
		return (
			<header className="header">	
	          <nav className="group header-nav">
	           <Link to="/" className="group header-logo"><span>Urban</span><span>Blurbin</span></Link>
		           <ul className="group header-list">
		           <li>{signing}</li>
		           {signup}
		           {welcome}
		           </ul>
	          </nav>
	        </header>  

		);
	}

});

module.exports = NavBar;