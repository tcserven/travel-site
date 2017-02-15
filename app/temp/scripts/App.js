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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// constructor function - old way
// function Person(fullName, favColour) {
// 	this.greet = function() {
// 		console.log("hey " + this.name + ' my fav colour is ' + this.favColour);
// 	};
// 	this.name = fullName,
// 	this.favColour = favColour;
// }

// new way with es6 and babel
var Person = function () {
	function Person(fullName, favColour) {
		_classCallCheck(this, Person);

		this.name = fullName;
		this.favouriteColour = favColour;
	}

	_createClass(Person, [{
		key: "greet",
		value: function greet() {
			console.log("Hi there, my name is " + this.name + " and there is " + this.favouriteColour);
		}
	}]);

	return Person;
}();

// Node JS way
// module.exports = Person;


exports.default = Person;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Person2 = __webpack_require__(0);

var _Person3 = _interopRequireDefault(_Person2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // function person(name, favColour) {
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


// alert('test for abcasdasd');
var Adult = function (_Person) {
	_inherits(Adult, _Person);

	function Adult() {
		_classCallCheck(this, Adult);

		return _possibleConstructorReturn(this, (Adult.__proto__ || Object.getPrototypeOf(Adult)).apply(this, arguments));
	}

	_createClass(Adult, [{
		key: 'payTaxes',
		value: function payTaxes() {
			console.log(this.name + ' now owes 0$ in taxes');
		}
	}]);

	return Adult;
}(_Person3.default);

var john = new _Person3.default('john', 'blue');
john.greet();
var jane = new Adult('jane', 'gfreen');
jane.greet();
jane.payTaxes();

/***/ })
/******/ ]);