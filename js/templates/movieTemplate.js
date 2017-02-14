'use strict';

let cardMovieTemplate = function(movie, userId) {
    return new Promise(function(resolve, reject) {
        let cardItems = {
            image: movie.img,
            title: movie.title,
            year: movie.year,
            actors: movie.actors,
            ratings: movie.ratings,
            myRatings: movie ? `${movie.myRatings}` : ''
        };
        let cardTemplate = `<div class="card" style="width: 20rem;">
                                <img class="card-img-top" src="${movie.image}" alt="Card image cap">
                                <div class="card-block">
                                    <h4 class="card-title">${movie.title}</h4>
                                    <p class="card-text">${movie.year}</p>
                                    <p class="card-text">${movie.actors}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">${movie.ratings}</li>
                                    <li class="list-group-item">${movie.myRatings}</li>
                                </ul>
                            </div>`;
        resolve(cardTemplate);
        reject();
    });
};