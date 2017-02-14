"use strict";

let movieConfig = require("./movieConfig.js");


// grabing a movie from omdb, testing with title or year
// t specifies title for search parameters
function pullMovieByTitle(searchTitle) {
return new Promise( function(resolve, reject){
		$.ajax({
	    url: movieConfig.getMovieURL().url,
	    type: 'GET',
	    data: { query: searchTitle, append_to_response: "images", include_image_language: "en"}
		}).done( function(movieData) {
			resolve(movieData);
		});
	});
}


// if above function fails still to break up year and movie searches
// y specifics year to api for search
// function pullMovieByYear(movieTitle, movieYear) {
// 	return new Promise( function(resolve, reject){
// 		$.ajax({
// 	    url: movieConfig.getMovieURL().url,
// 	    type: 'GET',
// 	    data: {t: movieTitle, y: movieYear, tomatoes: true},
// 	    success: resolve()
// 		});
// 	});
// }




module.exports = {pullMovieByTitle};