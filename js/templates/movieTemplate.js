// This file builds the DOM elements for the wrapper section of index.html.
"use strict";

// let $ = require ("../lib/node_modules/jquery/dist/jquery.min.js");
    

//puts cards on the DOM takes ad array of objects (movies)
function printCards(movies) {

    return new Promise((resolve, reject)=>{
        //dont need this promise bc synchronous
        $(".container").html("");

        let cards = "", 
            counter = 0;

            movies.forEach(movie => {

            if(movie.poster !== null) {

            cards += `<div class="thumbnail col-sm-6 col-md-4 card untracked">
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster}" alt="...">
                        <div class="caption">
                            <h3>${movie.title}</h3>
                            <button type="button" class="btn btn-default add-to-watchlist">Add to Watchlist</button>
                            <div class="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
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


// 'use strict';

// let cardMovieTemplate = function(movie, userId) {
//     return new Promise(function(resolve, reject) {
//         let cardItems = {
//             image: movie.poster_path,
//             title: movie.title,
//             year: movie.release_date.slice(0, 4),
//             // myRatings: userId ? `${movie.ratings}` : `${movie.popularity}`
//         };
//         let cardTemplate = `<div class="row">
//                                 <div class="col-sm-6 col-md-4">
//                                     <div class="thumbnail">
//                                         <img src="https://image.tmdb.org/t/p/w500${cardItems.image}" alt="Movie image ${cardItems.title}">
//                                         <div class="caption">
//                                             <h3>${cardItems.title}</h3>
//                                             <p>${cardItems.year}</p>
//                                             <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>`;
//         resolve(cardTemplate);
//         reject();
//     });
// };

// module.exports = cardMovieTemplate;