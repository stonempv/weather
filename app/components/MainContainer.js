var React = require('react');
var styles = require('../styles');
var Header = require('../components/Header')

function MainContainer(props){
  return (
    <div style={{width: '100%', height:'92%'}}>
      <Header /> 
      {props.children}
    </div>
  )
}

module.exports = MainContainer;