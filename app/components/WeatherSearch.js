var React = require('react');
var PropTypes = React.PropTypes;

function getStyles(props){
  return {
    display: 'flex',
    flexDirection: props.flexDirection || 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '300px'
  }
}

function InputField(props){
  return (
    <input
        className="form-control"
        placeholder="Perth, Australia"
        onChange={props.onUpdateWeatherSearch}
        value={props.location}
        type="text" />
  )
}

function Button(props){
  return (
   <button
      className="btn btn-success"
      type="button"
      style={{margin:'10px'}}
      onClick={props.onSubmitWeatherSearch}>
       Get Weather
    </button>
  )
}

function WeatherSearch(props){
  return (
    <div style={getStyles(props)}>
      <InputField
        onUpdateWeatherSearch = {props.onUpdateWeatherSearch}
        location = {props.location}
       />
      <Button 
        onSubmitWeatherSearch = {props.onSubmitWeatherSearch}
      />
    </div>
  )
}

WeatherSearch.propTypes = {
  location: PropTypes.string.isRequired,
  flexDirection: PropTypes.string,
  onUpdateWeatherSearch: PropTypes.func.isRequired,
  onSubmitWeatherSearch: PropTypes.func.isRequired
}

module.exports = WeatherSearch;
 
