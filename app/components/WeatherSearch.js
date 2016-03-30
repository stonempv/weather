var React = require('react');
var styles = require('../styles')
var PropTypes = React.PropTypes;

function WeatherSearch(props){
  return (
    <div style={styles.headerWeatherSearch}>
      <input
        className="form-control"
        placeholder="Perth, Australia"
        onChange={props.onUpdateWeatherSearch}
        value={props.location}
        type="text" />
      <button
        className="btn btn-success"
        type="button"
        style={{margin:'10px'}}
        onClick={props.onSubmitWeatherSearch}>
         Get Weather
      </button>
    </div>
  )
}

WeatherSearch.propTypes = {
  location: PropTypes.string.isRequired,
  onUpdateWeatherSearch: PropTypes.func.isRequired,
  onSubmitWeatherSearch: PropTypes.func.isRequired
}

module.exports = WeatherSearch;

