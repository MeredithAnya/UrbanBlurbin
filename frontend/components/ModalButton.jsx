var React = require('react');
var CityStore = require('../stores/cityStore');
var ModalForm = require('./ModalForm');
var ApiUtil = require('../util/apiUtil');

var ModalButton = React.createClass({
	
	getInitialState: function(){
      return {modalIsOpen: false,
              currentCity: CityStore.find(this.props.cityId)};
	},
	componentDidMount: function(){
      this.cityToken = CityStore.addListener(this.onChange);
      if (this.props.cityId){
      	ApiUtil.fetchCity(this.props.cityId);
      }
	},
	onChange: function(){
     this.setState({ currentCity: CityStore.find(parseInt(this.props.cityId))});
	},
	componentWillUnmount: function(){
      this.cityToken.remove();
	},

	openModal: function() {
    	this.setState({modalIsOpen: true});
    },

	closeModal: function() {
	    this.setState({modalIsOpen: false});
	},
    render: function() {
    	
    	
    	if (this.state.currentCity){
        	return (<div className="modal-header">
        					   <button className="modal-button" onClick={this.openModal}>Have something to say about {this.state.currentCity.name} ?</button>
			     	<ModalForm isOpen={this.state.modalIsOpen}
			     	           onRequestClose={this.closeModal}
			     	           cityId={this.state.currentCity.id}
                       cityName={this.state.currentCity.name}/>
			     	           </div>
			     	);	
    	}
       
    	return <div/>;
    }
});

module.exports = ModalButton;