"use strict";

var movieConfig = {
  otherapiURL: "http://www.omdbapi.com/?",
  url: "https://api.themoviedb.org/3/search/movie?api_key=838eabeda5ff3bb866d5c5fc023308d1"
};

// safekeeping url in one location for easy transition if needed
function getMovieURL(){
	return movieConfig;
}

module.exports = {getMovieURL};