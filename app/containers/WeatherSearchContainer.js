var React = require('react');
var WeatherSearch = require('../components/WeatherSearch');

var WeatherSearchContainer = React.createClass({
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
      location: '',
      flexDirection: this.props.flexDirection
    })
  },
  handleUpdateWeatherSearch: function(e){
    this.setState({
      location: e.target.value
    })
  },
  handleSubmitWeatherSearch: function(e){
    e.preventDefault();
    var location = this.state.location;
    this.setState({
      location: ''
    });
    this.context.router.push({
      pathname: 'search/'+location
    });
  },
  render: function(){
    return (
      <WeatherSearch 
        onSubmitWeatherSearch={this.handleSubmitWeatherSearch}
        onUpdateWeatherSearch={this.handleUpdateWeatherSearch}
        location={this.state.location}
        flexDirection={this.state.flexDirection}
      />
    )
  }
});

module.exports = WeatherSearchContainer;