"use strict";
let movieGetter = require('./movie-getter.js'),
		movieData = movieGetter();


var movieConfig = {
	otherapiURL: movieData.omDbURL,
  url: movieData.MDBurl
};

// safekeeping url in one location for easy transition if needed
function getMovieURL(){
	return movieConfig;
}

module.exports = getMovieURL;