var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.css');
var Header = require('../components/Header');

var styles = {
  width: '100%',
  height: '92%'
}

function Main(props) {
  return (
    <div style={styles}>
      <Header />
      <ReactCSSTransitionGroup
        transitionName="appear"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
          {React.cloneElement(props.children, {key: props.location.pathname})}
      </ReactCSSTransitionGroup>
    </div>
  )
}

module.exports = Main;