"use strict";

let movieConfig = require("./movieConfig.js");


// grabing a movie from omdb, testing with title or year
// t specifies title for search parameters
function pullMovieByTitle(searchTitle, movieYear) {
return new Promise( function(resolve, reject){
		$.ajax({
	    url: movieConfig.getMovieURL().url,
	    type: 'GET',
	    data: { t: searchTitle, tomatoes: true, y: movieYear}
	    success: resolve()
		});
	});
}

// if above function fails still to break up year and movie searches
// y specifics year to api for search
// function pullMovieByYear(movieYear) {
// 	return new Promise( function(resolve, reject){
// 		$.ajax({
// 	    url: movieConfig.getMovieURL().url,
// 	    type: 'GET',
// 	    data: { y: movieYear, tomatoes: true},
// 	    success: resolve()
// 		});
// 	});
// }



module.exports = {pullMovieByTitle};