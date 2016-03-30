var React = require('react');
var styles = require('../styles')
var WeatherSearchContainer = require('../containers/WeatherSearchContainer');

function Header(props) {
  return (
      <div style={styles.header}>
        <h2 style={styles.noMargin}>Clever Title</h2>
        <WeatherSearchContainer />
      </div> 
  )
}

module.exports = Header;