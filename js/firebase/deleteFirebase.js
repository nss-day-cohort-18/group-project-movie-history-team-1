"use strict";

let firebase = require("./configFirebase");

function deleteMovie(movieID) {
	return new Promise( function (resolve, reject){
		$.ajax({
			url: `https://movie-history-team-team.firebaseio.com/movies/${movieID}.json`,
			method: 'DELETE'
		}).done( function(){
			resolve();
		});
	});
}

module.exports = {deleteMovie};