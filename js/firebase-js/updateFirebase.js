"use strict";

let firebase = require("./configFirebase");

// add a movie which will contain the user infomation
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

function addMovies(moviesArray){
	console.log('calling to firebase');
	 return new Promise( function (resolve, reject){
		$.ajax({
			url: `https://group-project-b2ed0.firebaseio.com/movies.json`,
			type: 'POST',
			data: JSON.stringify(moviesArray),
			dataType: 'json'
		}).done( function(){
			console.log('posted');
			resolve(moviesArray);
		});
	});
}

module.exports = {addMovie, addMovies};