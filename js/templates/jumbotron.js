'use strict';

let createJumbotron = function() {
    return new Promise(function(resolve, reject) {
        let jumbotron = `<div class="my-jumbotron">
                            <div class="jumbotron">
                                <h1 class="text-center h1-jumbotron">Start Rating Your Favorite <Movies></Movies>!</h1>
                                <div class="row">
                                    <div class="col-sm-6 text-center">
                                        <h1><a href="#" class="link-jumbotron">Login</a></h1>
                                    </div>
                                    <div class="col-sm-6 text-center">
                                        <h1><a href="#" class="link-jumbotron">Register</a></h1>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        resolve(jumbotron);
        reject();
    });
};

module.exports = createJumbotron;


