var React = require('react');
var WeatherSearchContainer = require('../containers/WeatherSearchContainer');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var styles= {
  container: {
    backgroundSize:'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center', 
    height: '100%',
    width: '100%'
  },
  header:{
    fontSize: '45px',
    color: '#fff',
    fontWeight: '100'
  }
}

function Home(props){
  return (
      <div style={styles.container}>
        <h1 style={styles.header}>
            Enter a City and Region</h1>
        <WeatherSearchContainer flexDirection='column'/>
      </div>
  )
}

module.exports = Home;