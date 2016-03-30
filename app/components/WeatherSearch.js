var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '300px'
}

function WeatherSearch(props){
  styles.flexDirection = props.flexDirection;
  return (
    <div style={styles}>
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
 
