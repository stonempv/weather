var React = require('react');
var PropTypes = React.PropTypes;
var getDate = require('../helpers/utils').getDate

var styles = {
  cityName: {
    fontSize:'65px',
    color:'#333',
    fontWeight:100,
    textAlign:'center',
    marginTop: '50px',
    marginBottom: '30px'
  },
  daysContainer: {
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '50px auto'
  },
  dayItem: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    margin:'35px'
  },
  date: {
    fontSize:'30px',
    color:'#333',
    fontWeight:100
  }
}

function Loading(props){
  return (
    <h2>Loading</h2>
  )
}

function DayItem(props){
  console.log(props);
  return (
    <div style={styles.dayItem}>
      <img 
        style={{height:'130px'}} 
        src={'./app/images/weather-icons/' + props.data.weather[0].icon +'.svg'} />
      <h2 style={styles.date}>{getDate(props.data.dt)}</h2>
    </div>)
}

function ForecastUI(props){
  return (
    <div>
    <h1 style={styles.cityName}>{props.city}</h1>
    <div style={styles.daysContainer}>
      {props.forecast.list.map(function(listItem){
        return (<DayItem data={listItem}/>)
      })}
    </div>
    </div>
  )
}


function Forecast(props){
  return props.isLoading === true 
    ? <Loading />
    : <div style={{textAlign:'center'}}>
        <ForecastUI city={props.city} forecast={props.forecastData}/>
      </div>
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  forecastData: PropTypes.object.isRequired
}

module.exports = Forecast;