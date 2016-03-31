var React = require('react');
var PropTypes = React.PropTypes;

function getStyles(props){
  return {
    display: 'flex',
    flexDirection: props.flexDirection || 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '300px'
  }
}

function InputField(props){
  return (
    <input
      className="form-control"
      placeholder="Perth, Australia"
      onChange={props.onUpdateGetCity}
      value={props.city}
      type="text" />
  )
}

function Button(props){
  return (
   <button
      className="btn btn-success"
      type="button"
      style={{margin:'10px'}}
      onClick={props.onSubmitGetCity}>
       Get Weather
    </button>
  )
}

function GetCity(props){
  return (
    <div style={getStyles(props)}>
      <InputField
        onUpdateGetCity = {props.onUpdateGetCity}
        city = {props.city}
       />
      <Button 
        onSubmitGetCity = {props.onSubmitGetCity}
      />
    </div>
  )
}

GetCity.propTypes = {
  city: PropTypes.string.isRequired,
  flexDirection: PropTypes.string,
  onUpdateGetCity: PropTypes.func.isRequired,
  onSubmitGetCity: PropTypes.func.isRequired
}

module.exports = GetCity;
 