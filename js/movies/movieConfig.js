"use strict";

var movieConfig = {
  url: "http://www.omdbapi.com/?"
};

// safekeeping url in one location for easy transition if needed
function getMovieURL(){
	return movieConfig;
}

module.exports = {getMovieURL};