var React = require('react');
var WeatherSearchContainer = require('../containers/WeatherSearchContainer');

var styles = {
  header: {
    background: 'initial',
    backgroundColor: 'rgba(252,90,44,0.89)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color : '#fff',
    padding: '5px'
  },
  noMargin: {
    margin: '0px'
  },
}

function Header(props) {
  return (
      <div style={styles.header}>
        <h2 style={styles.noMargin}>Mike's Weather App</h2>
        <WeatherSearchContainer />
      </div> 
  )
}

module.exports = Header;