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

eval("function Persona() {\n    console.log('Creant persona');\n}\n\n\n$pers = new Persona();\n\nvar Persona2= function (name) {\n    this.name= name;\n    console.log('Creant persona2');\n};\nPersona2.prototype.SayHellp= function (name) {\n    this.name= name;\n    console.log('Hola ' + name);\n};\n\n\n\n$pers1 = new Persona2();\n$pers2 = new Persona2();\n$pers3 = new Persona2();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2luZGV4LmpzPzhmZDUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gUGVyc29uYSgpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYW50IHBlcnNvbmEnKTtcbn1cblxuXG4kcGVycyA9IG5ldyBQZXJzb25hKCk7XG5cbnZhciBQZXJzb25hMj0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aGlzLm5hbWU9IG5hbWU7XG4gICAgY29uc29sZS5sb2coJ0NyZWFudCBwZXJzb25hMicpO1xufTtcblBlcnNvbmEyLnByb3RvdHlwZS5TYXlIZWxscD0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aGlzLm5hbWU9IG5hbWU7XG4gICAgY29uc29sZS5sb2coJ0hvbGEgJyArIG5hbWUpO1xufTtcblxuXG5cbiRwZXJzMSA9IG5ldyBQZXJzb25hMigpO1xuJHBlcnMyID0gbmV3IFBlcnNvbmEyKCk7XG4kcGVyczMgPSBuZXcgUGVyc29uYTIoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);