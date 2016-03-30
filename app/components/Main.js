var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.css');

function Main(props) {
  return (
      <ReactCSSTransitionGroup
        transitionName="appear"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
          {React.cloneElement(props.children, {key: props.location.pathname})}
      </ReactCSSTransitionGroup>
    
  )
}

module.exports = Main;