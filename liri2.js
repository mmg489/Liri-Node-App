require("dotenv").config();



var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var Spotify = require('node-spotify-api');
 
spotify
  .search({ type: 'track', query: '' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });