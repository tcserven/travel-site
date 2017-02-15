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

// wont work without webpack (part of NODE JS)
// var Person = require("./modules/Person")
// We can do the same thing with es6
import Person from './modules/Person';

// alert('test for abcasdasd');
class Adult extends Person {
	payTaxes() {
		console.log(this.name + ' now owes 0$ in taxes');
	}
}

var john = new Person('john', 'blue');
john.greet();
var jane = new Adult('jane', 'gfreen');
jane.greet();
jane.payTaxes();


