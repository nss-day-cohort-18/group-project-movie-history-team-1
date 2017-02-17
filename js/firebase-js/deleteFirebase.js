"use strict";

let firebase = require("./configFirebase");

//specifying uid to delete from fb
function deleteMovie(deleteKey) {
console.log('trying to delete this key:', deleteKey);
	return new Promise( function (resolve, reject){
		$.ajax({
			url: `https://group-project-b2ed0.firebaseio.com/${deleteKey}.json`,
			method: 'DELETE'
		}).done( function(){
			resolve();
		});
	});
}

module.exports = {deleteMovie};