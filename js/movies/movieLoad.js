"use strict";


function pullMovie(searchTitle) {

return new Promise( function(resolve, reject){
		$.ajax({
	    url: "http://www.omdbapi.com/?",
	    type: 'GET',
	    data: { t: searchTitle, tomatoes: true},
	    success: resolve()
		});
	});
}

module.exports = {pullMovie};