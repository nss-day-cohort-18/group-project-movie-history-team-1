"use strict";

let firebase = require("./configFirebase");

function getMovies(userID) {
	return new Promise( function (resolve, reject){
		$.ajax({
			url: `https://movie-history-team-team.firebaseio.com/movies.json?orderBy="uid"&equalTo="${userID}"`
		}).done( function(){
			resolve();
		});
	});
}

module.exports = {getMovies};

