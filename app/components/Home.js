var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('../components/MainContainer');

function Home(props){
  return (
    <MainContainer>
      <h1>Weather App</h1>
      <p className='lead'>Some fancy text</p>
      <Link to='/'>
        <button type='button' className='btn btn-large btn-success'>Get Started</button>
      </Link>
    </MainContainer>
  )
}

module.exports = Home;