"use strict";

var movieConfig = {
  url: "http://www.omdbapi.com/?"
};

function getMovieURL(){
	return movieConfig;
}

module.exports = {getMovieURL}