var React = require('react');
var styles = require('../styles');
var Header = require('../components/Header')

function MainContainer(props){
  return (
    <div>
      <Header />
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        {props.children}
      </div>
    </div>
  )
}

module.exports = MainContainer;