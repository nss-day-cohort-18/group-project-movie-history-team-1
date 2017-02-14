'use strict';

let cardMovieTemplate = function(movie, userId) {
    return new Promise(function(resolve, reject) {
        let cardItems = {
            image: movie.poster_path,
            title: movie.title,
            year: movie.release_date.slice(0, 4),
            myRatings: userId ? `${movie.ratings}` : `${movie.popularity}`
        };
        let cardTemplate = `<div class="card" style="width: 20rem;">
                                <img class="card-img-top" src="${cardItems.image}" alt="Card image cap">
                                <div class="card-block">
                                    <h4 class="card-title">${cardItems.title}</h4>
                                    <p class="card-text">${cardItems.year}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">${cardItems.myRatings}</li>
                                </ul>
                            </div>`;
        resolve(cardTemplate);
        reject();
    });
};

module.exports = cardMovieTemplate;