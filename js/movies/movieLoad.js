"use strict";

let movieConfig = require("./movieConfig.js");

function pullMovie(searchTitle) {

return new Promise( function(resolve, reject){
		$.ajax({
	    url: movieConfig.getMovieURL().url,
	    type: 'GET',
	    data: { t: searchTitle, tomatoes: true},
	    success: resolve()
		});
	});
}

module.exports = {pullMovie};