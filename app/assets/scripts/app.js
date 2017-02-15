// function person(name, favColour) {
// 	console.log("hey " + name + " there " + favColour);
// }

// var john = {
// 	name: "john", 
// 	favColour: "blue",
// 	greet: function() {
// 		console.log("hey" + john.name + ' my fav colouris ' + john.favColour);
// 	}
// };

// // constructor function
// function Person(fullName, favColour) {
// 	this.greet = function() {
// 		console.log("hey " + this.name + ' my fav colour is ' + this.favColour);
// 	};
// 	this.name = fullName,
// 	this.favColour = favColour;
// }

// person(john.name, john.favColour);

// wont work without webpack
var Person = require("./modules/Person")

// alert('test for abcasdasd');


var john = new Person('john', 'blue');
// john.greet();
var jane = new Person('jane', 'gfreen');
// jane.greet();


