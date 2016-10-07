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

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("//console.log('hello world at external file');\n\nvar showFullName  = function () {\n    console.log(this.firstName + ' ' + this.lastName + '' + arguments[0]);\n\n\n}\n//namespaces de moment no tenim classe\n\nvar name = 'Marc';\n\nvar person= {\n    firstName: 'Marc',\n    lastName: 'Calafell Gisbert',\n    showFullName:function () {\n        console.log(this.firstName + ' ' + this.lastName)\n    }\n\n}\n\nperson.showFullName();\n\nvar copia = showFullName.bind(person);\n\nshowFullName();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2luZGV4LmpzPzhmZDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9jb25zb2xlLmxvZygnaGVsbG8gd29ybGQgYXQgZXh0ZXJuYWwgZmlsZScpO1xuXG52YXIgc2hvd0Z1bGxOYW1lICA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0TmFtZSArICcgJyArIHRoaXMubGFzdE5hbWUgKyAnJyArIGFyZ3VtZW50c1swXSk7XG5cblxufVxuLy9uYW1lc3BhY2VzIGRlIG1vbWVudCBubyB0ZW5pbSBjbGFzc2VcblxudmFyIG5hbWUgPSAnTWFyYyc7XG5cbnZhciBwZXJzb249IHtcbiAgICBmaXJzdE5hbWU6ICdNYXJjJyxcbiAgICBsYXN0TmFtZTogJ0NhbGFmZWxsIEdpc2JlcnQnLFxuICAgIHNob3dGdWxsTmFtZTpmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3ROYW1lICsgJyAnICsgdGhpcy5sYXN0TmFtZSlcbiAgICB9XG5cbn1cblxucGVyc29uLnNob3dGdWxsTmFtZSgpO1xuXG52YXIgY29waWEgPSBzaG93RnVsbE5hbWUuYmluZChwZXJzb24pO1xuXG5zaG93RnVsbE5hbWUoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);