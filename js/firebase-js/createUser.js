"use strict";
let firebase = require("./configFirebase"),
	provider = new firebase.auth.GoogleAuthProvider(),
	currentUser = null;

firebase.auth().onAuthStateChanged(function(user){
	if (user){
		currentUser = user.uid;
		console.log("currentUser logged in", currentUser);
		$("#login").addClass("hidden");
		$("#logout").removeClass("hidden");

	} else {
		currentUser = null;
		console.log("currentUser not logged in");
	}
});

function logInGoogle() {
	return firebase.auth().signInWithPopup(provider);
}
function logOut() {
	return firebase.auth().signOut();
} 

function getUser() {
	return currentUser;
}
function setUser(val) {
	currentUser = val;
}



firebase.auth().signOut().then(function() {
  // Sign-out successful.
}, function(error) {
  // An error happened.
});

//
module.exports = {logInGoogle, logOut, getUser, setUser};

