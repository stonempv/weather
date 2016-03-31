var React = require('react');
var GetCity = require('../components/GetCity');
var getForecast = require('../helpers/api').getForecast;
var getWeather = require('../helpers/api').getWeather;

var GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps: function(){
    return({
      flexDirection: 'row'
    })
  },
  getInitialState: function(){
    return ({
      city: '',
      flexDirection: this.props.flexDirection
    })
  },
  handleUpdateGetCity: function(e){
    this.setState({
      city: e.target.value
    })
  },
  handleSubmitGetCity: function(e){
    e.preventDefault();
    var city = this.state.city;
    this.setState({
      city: ''
    });
    getForecast(city);
    this.context.router.push({
      pathname: 'forecast/'+city
    })
  },
  render: function(){
    return (
      <GetCity 
        onSubmitGetCity={this.handleSubmitGetCity}
        onUpdateGetCity={this.handleUpdateGetCity}
        city={this.state.city}
        flexDirection={this.state.flexDirection}
      />
    )
  }
});

module.exports = GetCityContainer;