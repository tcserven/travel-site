// constructor function - old way
// function Person(fullName, favColour) {
// 	this.greet = function() {
// 		console.log("hey " + this.name + ' my fav colour is ' + this.favColour);
// 	};
// 	this.name = fullName,
// 	this.favColour = favColour;
// }

// new way with es6 and babel
class Person {
	constructor(fullName, favColour) {
		this.name = fullName;
		this.favouriteColour = favColour;
	}

	greet() {
		console.log("Hi there, my name is " + this.name + " and there is " + this.favouriteColour);
	}
}

// Node JS way
// module.exports = Person;
export default Person;