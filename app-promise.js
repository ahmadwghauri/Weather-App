const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
            .options({
              a: {
                demand: true,
                alias: 'address',
                describe: 'Address to fetch weather for',
                string: true
              }
            })
            .help()
            .alias('help','h')
            .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geoUrl).then((response)=>{
  if (response.data.status === 'ZERO_RESULTS') {
    console.log('Unable to find address');
  }
  else {
    var long = response.data.results[0].geometry.location.lng;
    var lat = response.data.results[0].geometry.location.lat;
    var url = `https://api.darksky.net/forecast/3a2ca98ca1f6045776a4b42d1922a6e1/${long},${lat}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(url)
  }
}).then((response)=>{
  var temperature = response.data.currently.temperature;
  var summary = response.data.currently.summary;
  console.log(`Temperature is ${temperature}. ${summary}`);
}).catch((e)=>{
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to server');
  }
});
