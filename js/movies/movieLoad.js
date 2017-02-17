"use strict";

let key = require ("./movie-getter.js"),
	user = require ("../firebase-js/createUser.js");
	// movieConfig = require("./movieConfig.js");


// grabing a movie from omdb, testing with title or year
// t specifies title for search parameters
function pullMovieByTitle(searchTitle) {
return new Promise( function(resolve, reject){
		$.ajax({
	    url: `https://api.themoviedb.org/3/search/movie?api_key=${key.getKey().apiKey}&language=en-US&query=${searchTitle}&page=1&include_adult=false`
		}).done( function(movieData) {
			resolve(movieData);
		});
	});
}

let moviesArray = [];

function parseMovies(movieData) {
	return new Promise((resolve, reject)=>{
	let moviesObject = {},
		results = movieData.results;
		results.forEach((movie)=> {
			moviesObject = {
				poster : movie.poster_path,
				title : movie.title,
				id : movie.id,
				untracked: true,
				uid: user.getUser(),
				watched: false,
				watchlist: false,
				rating: 0
		};
		moviesArray.push(moviesObject);
	});
		console.log('moviesArray passed from parser:', moviesArray);
		resolve(moviesArray);
	});
}

function getMoviesArray(){
	return moviesArray;
}

module.exports = {pullMovieByTitle, parseMovies, getMoviesArray};