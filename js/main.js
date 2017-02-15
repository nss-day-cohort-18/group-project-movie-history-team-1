"use strict";

/* 

Movie History is a multiple-page application that allows users to view 
and store movies. 
There is an initial page, visible by anyone, that serves the purpose of 
listing movies from OMDb API. The user is able to search for movies
by title, series, episodes, or year. From the visitor page, 
the user is also prompted to create an account with us. 
For this application, we use firebase as our user database. 

We refer to firebase to store movie information related to our 
member. Movie information includes the following: 
	1. userId
	2. movieID
	3. watched (true or false)
	4. rating of the movie
	5. email
	6. password
	7. username

If the user is a member of the application, they are allowed a special 
page. 
This page allows the member to store specific information about their 
favorite movies. This information includes: 
	
	1. Whether or not they've watched the movie
	2. A personal rating that they give to the movie
		(comparable to rotten tomatoes rating)
*/

/*============================================*/
/*================REQUIRES====================*/
/*============================================*/
let config = require('./firebase-js/configFirebase.js'),
	readFirebase = require('./firebase-js/readFirebase.js'),
	createUser = require('./firebase-js/createUser.js'),
	updateUser = require('./firebase-js/updateFirebase.js'),
	removeUser = require('./firebase-js/deleteFirebase.js'),
	movieLoad = require('./movies/movieLoad.js'),
	printer = require ('./templates/movieTemplate.js');
// test for api call for movie info
// console.log("hello?", movieLoad.pullMovieByTitle("rambo"));

/*============================================*/
/*==================LOGIN=====================*/
/*============================================*/

 //login
$("#login").click(()=>{
	console.log('you clicked login');
	createUser.logInGoogle();  
});

//logout
$("#logout").click(()=>{
	console.log('you clicked logout');
	createUser.logOut();
	$("#logout").addClass("hidden");
    $("#login").removeClass("hidden");
});

//register
$("#register").click(()=>{
	console.log("youclickedregister");
	if(email.val() && password.val()){
	createUser.setUser();
	}
});

//Sends you to the main movie-listing page without signup
// $('.browse-movies').click(function(event) {
// 	movieLoad.movieAPI().then(
// 		() => {
// 			$('.login').addClass('hidden');
// 			$('.visitor').removeClass('hidden');
// 		}
// 	);
// });



/*============================================*/
/*=================VISITOR====================*/
/*============================================*/



/*

This function will serve to filter the movies on the visitor page.
*/

$('.movie-filters').change(function(event) {
	let targetVal = $(event.target).val();
	switch (targetVal) {
		case "year":
			console.log(targetVal);
			break;
		case "type": 
			console.log(targetVal);
			break;
		case "title":
			console.log(targetVal);
			break;
	}
});




/*============================================*/
/*=================MEMBER=====================*/
/*============================================*/


/* 

Function that filters the user page. The filters include: 

	1. Watched Movies
	2. Un-Watched movies
	3. All Movieas
*/

$('.btn-group').click(function(event) {
	let buttonValue = $(event.target).val();
	$(".card").addClass("hidden");
	switch (buttonValue) {
		case "untracked": 
			$('.untracked').removeClass("hidden");
			console.log(buttonValue);
			break;
		case "unwatched": 
			$('.unwatched').removeClass("hidden");
			console.log(buttonValue);
			break;
		case "watched": 
			$('.watched').removeClass("hidden");
			console.log(buttonValue);
			break;
	}
});


/* 

Function that checks OMDb and our firebase database for specific keywords
to search movies with the search input.
*/
// let formControl = (submitValue) => {
	
	
// 	}
	//go to firebase to search related movies
	// readFirebase.readMovies();
	//also go to movie load to compare movies with the api call

// 	if (keyWordValues.length === 0) {
// 		console.log(movieLoad.pullMovieByTitle(yearValues[0]));
// 	} else {
// 		if (yearValues.length === 0) {
// 			console.log(movieLoad.pullMovieByTitle(submitValue));
// 		} else {
// 			console.log(movieLoad.pullMovieByTitle(keyWordValues.join(" "), yearValues[0]));
// 		}
// 	}
// };

$('.form-control').keyup(function(event) {
    	if(event.which == 13) {
    		// $('.card').remove();
        	console.log('this.value line 180:', $(this).val());
        	movieLoad.pullMovieByTitle($(this).val())
			.then((movieData)=>{
			console.log('movieData passed to parse:', movieData);
			 movieLoad.parseMovies(movieData)
			 .then((moviesArray)=>{
			 $(".form-control").html("");
			 printer.printCards(moviesArray);
		});
     });
   }
});

/* 

This function adds movies dto the user's watched-list within firebase and changes the 
watched boolean value to false. It also adds the movie to the user's movie list.
*/

$('.card').click(function(event) {
	if (event.target.hasClass('watchlist')) {
		//unwatched is a sass comp that removes hidden from the star-rating
		//as well at the delete movie button.
		$(this).addClass('.unwatched');
		//takes the card id and sorts it through the dom-array
		updateUser.sortMovie(event.target.id).then(
			//sortMovie() brings back a movie obj  to be sent to firebase for the 
			//user's movie-list
			(movieObj) => updateUser.updateFirebase(movieObj)
		);
	}
});


/*

Changes the card's watch to true. Also includes sass comp that 
changes the background-color and star-rating to whatever the user chooses
*/

$('.star-rating').change(function(event) {
	$(this).parent('.movie').addClass('watched');
	let watch = true;
	let targetVal = parseInt($(event.target).val());
	let ratingType = null;
	let determineValue = () => {
		if (targetVal > 0 && targetVal <= 3) {
			ratingType = "low";
		} else if (targetVal > 3 && targetVal <= 6) {
			ratingType = "midrange";
		} else if (targetVal > 6 && targetVal <= 9) {
			ratingType = "highrange";
		} else {
			ratingType = "favourite";
		}
	};
	determineValue().then(
		updateUser.changeToWatched(watch, targetVal, ratingType)
	);
});


/*

Listens for a card to be deleted from the movie list
ONLY AVALABLE WITH THE USER'S WATCHED OR UNWATCHED MOVIES
*/

$('.movie-delete').click(function(event) {
	let cardMovieId = $(this).parent('.movie-card').id;
	$(this).parent('.movie-card').remove();
	removeUser.removeFromLocalArray(cardMovieId).then(
		(cardMovieObj) => removeUser.removeFromFirebase(cardMovieObj)
	);
});


/*

Listens for when the user wants to sign out of their account, sign up, 
or a different user would like to sign in.
*/

$('.login-user').click(function(event) {
	createUser.logIn();
});

$('.logout-user').click(function(event) {
	createUser.logOut();
});

$('.get-user').click(function(event) {
	createUser.getUser();
});

















