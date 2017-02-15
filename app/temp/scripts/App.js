/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// constructor function - old way
function Person(fullName, favColour) {
	this.greet = function() {
		console.log("hey " + this.name + ' my fav colour is ' + this.favColour);
	};
	this.name = fullName,
	this.favColour = favColour;
}

// new way with es6 and babel
// class Person {
// 	constructor(fullName, favColour) {
// 		this.name = name;
// 		this.favouriteColour = favColour;
// 	}

// 	greet() {
// 		console.log("Hi there, my name is " + this.name + " and there is " + this.favouriteColour);
// 	}
// }

module.exports = Person;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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
var Person = __webpack_require__(0)

// alert('test for abcasdasd');


var john = new Person('john', 'blue');
// john.greet();
var jane = new Person('jane', 'gfreen');
// jane.greet();




/***/ })
/******/ ]);