var axios = require('axios');

var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = '3d16791ccf8987e06a86a6ad02779bf6';

function prepRouteParams (queryStringData) {
  return Object.keys(queryStringData)
    .map(function (key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);
    }).join('&')
}

function prepUrl (type, queryStringData) {
  return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5
  }
}

function getForecast (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('forecast/daily', queryStringData);

  return axios.get(url)
    .then(function (forecastData) {
      console.log(forecastData.data)
    })
}

function getWeather(city){
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('weather', queryStringData);

  return axios.get(url)
    .then(function(forecastData) {
      console.log(forecastData.data)
    })
}

module.exports = {
  getForecast: getForecast,
  getWeather: getWeather
}

