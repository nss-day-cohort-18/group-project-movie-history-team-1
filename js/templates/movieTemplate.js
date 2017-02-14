'use strict';

let cardMovieTemplate = function(movie, userId) {
    return new Promise(function(resolve, reject) {
        let cardItems = {
            image: movie.poster_path,
            title: movie.title,
            year: movie.release_date.slice(0, 4),
            myRatings: userId ? `${movie.ratings}` : `${movie.popularity}`
        };
        let cardTemplate = `<div class="row">
                                <div class="col-sm-6 col-md-4">
                                    <div class="thumbnail">
                                        <img src="https://image.tmdb.org/t/p/w500${cardItems.image}" alt="Movie image ${cardItems.title}">
                                        <div class="caption">
                                            <h3>${cardItems.title}</h3>
                                            <p>${cardItems.year}</p>
                                            <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
        resolve(cardTemplate);
        reject();
    });
};

module.exports = cardMovieTemplate;