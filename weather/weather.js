const request = require('request');

var getWeather = (long, lat, callback) => {
  request({
    url:`https://api.darksky.net/forecast/3a2ca98ca1f6045776a4b42d1922a6e1/${long},${lat}`,
    json: true
  },(error,response,body)=>{
    if (response.statusCode===200) {
      callback(undefined,{
        temperature: body.currently.temperature,
        summary: body.currently.summary
      })
    }
  });
};

module.exports = {
  getWeather
};
