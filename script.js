// // Create an object and an array which we will use in our facebook exercise. 

// // 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// // 2. Create an array which contains the object you have made above and name the array "database".
// var database = [
// 	{
// 		username:"forrest",
// 		password:"asdf",
// 	},
// 	{
// 		username:"sally",
// 		password:"asdf",
// 	},
// 	{
// 		username:"josh",
// 		password:"asdf",
// 	}
// ]

// // 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
// var newsFeed = [
// 	{
// 		username:"myName",
// 		timeline:"Today"
// 	},
// 	{
// 		username:"yourName",
// 		timeline:"Yesterday"
// 	},
// 	{
// 		username:"theirName",
// 		timeline:"yesterYear"
// 	}
// ]



// function isUserValid(username, password) {
// 	for (var i=0; i<database.length; i++) {
// 		if(database[i].username === username && database[i].password === password) {
// 			return true;
// 		}
// 	}
// 	return false
// }


// function signIn(username, password) {
// 	if (isUserValid(username, password)) {
// 		console.log(newsFeed);
// 	} else {
// 		alert("Sorry, wrong username and password")
// 	}
// }

// var usernamePrompt = prompt("What is your username?");
// var passwordPrompt = prompt("What is your password?");

// signIn(usernamePrompt, passwordPrompt);
