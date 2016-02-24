var React = require('react');

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
                    
		} else {
			signing = <button onClick={this.signOut}> Sign Out </button>;
		}
	   
		
		return (
			<header className="header">	
	          <nav className="group header-nav">
	           <img className="group header-logo" src="./assets/UrbanBlurbin-logo.png"/>
		           <ul className="group header-list">
		           {signing}
		           </ul>
	          </nav>
	        </header>  

		);
	}

});

module.exports = NavBar;