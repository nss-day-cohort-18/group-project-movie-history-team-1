"use strict";

let firebase = require("./configFirebase");

//specifying uid to delete from fb
function deleteMovie(uid) {
	return new Promise( function (resolve, reject){
		$.ajax({
			url: `https://movie-history-team-team.firebaseio.com/movies/${uid}.json`,
			method: 'DELETE'
		}).done( function(){
			resolve();
		});
	});
}

module.exports = deleteMovie;