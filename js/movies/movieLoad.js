"use strict";

let movieConfig = require("./movieConfig.js");

function pullMovieByTitle(searchTitle, movieYear) {

return new Promise( function(resolve, reject){
		$.ajax({
	    url: movieConfig.getMovieURL().url,
	    type: 'GET',
	    data: { t: searchTitle, tomatoes: true}, y: movieYear
	    success: resolve()
		});
	});
}

function pullMovieByYear(movieYear) {
	return new Promise( function(resolve, reject){
		$.ajax({
	    url: movieConfig.getMovieURL().url,
	    type: 'GET',
	    data: { y: movieYear, tomatoes: true},
	    success: resolve()
		});
	});
}
}


module.exports = {pullMovieByTitle, pullMovieByYear};