// This file builds the DOM elements for the wrapper section of index.html.
"use strict";

let movieLoad = require("../movies/movieLoad.js"),
    updateUser = require("../firebase-js/updateFirebase.js");

// let $ = require ("../lib/node_modules/jquery/dist/jquery.min.js");
    

//puts cards on the DOM takes ad array of objects (movies)
function printCards(movies) {

    /* 
    Star Rating via rateYo
    See http://rateyo.fundoocode.ninja/# 
    */
    $(function () {
     
        $(".rateYo").rateYo({
            starWidth: "20px",
            rating: 0,
            maxValue: 10,
            numStars: 10,
            fullStar: true,
            onSet: (rating, rateYoInstance) => {
                console.log(rating);
                $(event.currentTarget).closest(".card").addClass("rated");
                console.log('current target', $(event.currentTarget));
                let movieId = $(event.currentTarget).attr("id");
                let userID = $(event.currentTarget).closest(".card").attr("id");
                console.log('userID to send:', userID);

                let thisArray = movieLoad.getMoviesArray();
                console.log('thisArray:', thisArray);
                let movieTarget = thisArray.filter((movie)=> movie.user == userID && movie.id == movieId);
                console.log('movieTarget should be false:', movieTarget);
                 movieTarget[0].rating = rating;
                 movieTarget[0].watched = true; 
                 movieTarget[0].watchlist = false;
                console.log('movieTarget:', movieTarget);
                updateUser.addMovie(movieTarget[0]);
            }
      });
     
    });

    return new Promise((resolve, reject)=>{
        //dont need this promise bc synchronous
        $(".container").html("");

        let cards = "", 
            counter = 0;

            movies.forEach(movie => {

            if(movie.poster !== null) {

            cards += `<div class="thumbnail col-sm-6 col-md-4 untracked card" id="${movie.uid}">

                        <img src="https://image.tmdb.org/t/p/w500${movie.poster}" alt="...">
                        <div class="caption">
                            <h3>${movie.title}</h3>
                            <button type="button" class="btn btn-default add-to-watchlist" id="${movie.id}">Add to Watchlist</button>
                            <button type="button" class="btn btn-default delete" id="${movie.id}">Delete</button>
                            <div class="rateYo" id="${movie.id}">
                            </div>
                        </div>
                      </div>`;

            counter++;
//every three cards, make a section and prepend it to the container.                                    
            if (counter % 3 === 0) {
            var rowCount = 1;
            $(".container").append(`<section class="row">${cards}</section>`);
            rowCount ++;
            cards = ""; 
           }
        }
    }); //end forEach   

  });//end promise
}//end printCards


module.exports = {printCards};