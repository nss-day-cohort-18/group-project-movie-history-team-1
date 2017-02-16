"use strict";
let firebase = require("./configFirebase"),
	provider = new firebase.auth.GoogleAuthProvider(),
	currentUser = null,
	email = $('#userEmail'),
	password = $('#userPass');

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
  	
// firebase.auth().createUserWithEmailAndPassword(email.val(), pass.val()).then(function(user){
//     console.log("everything went fine");
//     console.log("user object:" + user);
//     // can save the user data here.
// }).catch(function(error) {
//     console.log("there was an error");
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorCode + ' - ' + errorMessage);
// });

// } else {
//     console.log("fill in both fields");
// }  

// function getUser() {
// 	return currentUser;
// }
// function setUser(val) {
// 	currentUser = val;
// }

firebase.auth().signOut().then(function() {
  // Sign-out successful.
}, function(error) {
  // An error happened.
});

// getUser, setUser
module.exports = {logInGoogle, logOut};
