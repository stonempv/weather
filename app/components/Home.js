var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('../components/MainContainer');
var WeatherSearchContainer = require('../containers/WeatherSearchContainer');

function Home(props){
  return (
    <MainContainer>
      <div style={{
        backgroundSize:'cover',
        backgroundImage:"url('app/images/pattern.svg')",
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center', 
        height: '100%',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '45px',
          color: '#fff',
          fontWeight: '100'
          }}>
            Enter a City and Region</h1>
        <WeatherSearchContainer flexDirection='column'/>
      </div>
    </MainContainer>
  )
}

module.exports = Home;