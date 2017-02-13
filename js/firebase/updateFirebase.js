"use strict";

let firebase = require("./configFirebase");

function addMovie(movieObj) {
	return new Promise( function (resolve, reject){
		$.ajax({
			url: `https://movie-history-team-team.firebaseio.com/movies.json`,
			type: 'POST',
			data: JSON.stringify(movieObj),
			dataType: 'json'
		}).done( function(){
			resolve();
		});
	});
}

module.exports = {addMovie};