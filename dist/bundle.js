/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Submarine = __webpack_require__(/*! ./submarine */ \"./src/submarine.js\");\n\n\nclass GameBackground {\n    constructor(canvasCtx, gameCanvas, subDepth){\n        this.canvasCtx = canvasCtx;\n        this.gameCanvas = gameCanvas;\n        this.subDepth = subDepth\n        this.image = new Image();\n        this.image.src = \"https://www.transparenttextures.com/patterns/asfalt-light.png\";\n        this.width = gameCanvas.width;\n        this.height = gameCanvas.height;\n        this.speedX = 0;\n        this.speedY = 0;\n        this.x = 0;\n        this.y = 0; \n        this.clipHeight = 0;\n        this.update = this.update.bind(this);\n        this.atSurface = this.atSurface.bind(this);\n    }\n    update(){\n      debugger;\n      this.atSurface();\n          this.canvasCtx.drawImage(\n            this.image,\n            this.x += this.speedX,\n            this.y += this.speedY,\n            this.width,\n            this.height\n          );\n          let scaleHeight = (this.gameCanvas.height / this.image.height)\n          if (this.clipHeight - this.speedY >= 500) {\n            this.y = 0;\n            this.clipHeight = 0;\n          } else {\n          this.clipHeight -= this.speedY;\n          }\n          let imgPosX = 0;\n          let imgPosY = this.height - this.clipHeight;\n          // debugger;\n      // console.log(`\"this.x\": ${this.x}`, `\"this.y\": ${this.y}`)\n      // console.log(`\"imgPosX\": ${imgPosX}`, `\"imgPosY\": ${imgPosY}`)\n      // console.log(`\"clipStartX\": ${clipStartX}`, `\"clipStartY\": ${clipStartY}`, `\"clipWidth\": ${clipWidth}`, `\"clipHeight\": ${this.clipHeight}`)\n\n          this.canvasCtx.drawImage(\n            this.image,\n            0,\n            0,\n            this.image.width,\n            this.clipHeight,\n            imgPosX,\n            imgPosY,\n            this.gameCanvas.width,\n            this.clipHeight * scaleHeight\n          );\n    }\n    atSurface () {\n      if (this.subDepth <= 0) console.log(\"no\");\n    }\n}\nmodule.exports = GameBackground;\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Submarine = __webpack_require__(/*! ./submarine */ \"./src/submarine.js\");\nconst GameBackground = __webpack_require__(/*! ./background */ \"./src/background.js\");\nconst converter = __webpack_require__(/*! ./util/conversions */ \"./src/util/conversions.js\")\n\n\nclass Game {\n    constructor(canvasCtx, gameCanvas){\n        this.canvasCtx = canvasCtx;\n        this.gameCanvas = gameCanvas;\n        this.background = new GameBackground(this.canvasCtx, this.gameCanvas, this.subDepth);\n        this.submarine = new Submarine(this.canvasCtx, this.gameCanvas);\n        this.updateGameArea = this.updateGameArea.bind(this);\n        this.subDepth = 20;\n        this.clearCanvas = this.clearCanvas.bind(this);\n        this.interval;\n        this.keysReleased = this.keysReleased.bind(this);\n        this.depthBox = document.createElement(\"div\");\n        this.depthBox.setAttribute(\"id\", \"depth-box\");\n        this.keys = {37: false, 38: false, 39: false, 40: false};\n        window.addEventListener(\"keydown\", this.updateGameArea, false);\n        window.addEventListener(\"keyup\", this.keysReleased, false);\n        // this.start();\n        this.updateGameArea();\n    }\n        \n    start() {\n        this.updateDepth();\n        this.interval = setInterval(this.updateGameArea, 20);\n    }\n\n    clearCanvas() {\n        this.canvasCtx.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);\n    }\n\n    stop() {\n        clearInterval(this.interval);\n    }\n\n    keysReleased(e) {\n        this.keys[e.keyCode] = false;\n        this.updateGameArea(e);\n    }\n    newPos(e) {\n        this.submarine.speedX = 0;\n        this.submarine.speedY = 0;\n        this.background.speedX = 0;\n        this.background.speedY = 0;\n        if (e.type === \"keydown\") {\n        this.keys[e.keyCode] = true;\n        }\n        if (this.keys[37]) {\n            this.submarine.speedX = -5;\n            // this.background.speedX = 5;\n        }\n        if (this.keys[39]) {\n            this.submarine.speedX = 5;\n            // this.background.speedX = -5;\n        }\n        if (this.keys[38]) {\n            this.submarine.speedY = -5;\n            this.background.speedY = 5;\n        }\n        if (this.keys[40]) {\n            this.submarine.speedY = 5;\n            this.background.speedY = -5;\n        }\n        if (this.subDepth + this.submarine.speedY >= 0) {\n        this.subDepth += this.submarine.speedY;\n        }\n        e.preventDefault();\n        this.updateDepth();\n  }\n\n    updateGameArea(e) {\n        this.clearCanvas();\n        if (e) {\n            this.newPos(e)\n        }\n        this.background.update();\n        this.submarine.update();\n    }\n\n    updateDepth(){\n        let feetTextForBox = '';\n        let metersTextForBox = '';\n        let feetDepthItem = document.createElement(\"li\");\n        let metersDepthItem = document.createElement(\"li\");\n        let meters = this.subDepth;\n        let feet = converter.metersToFeet(meters).toFixed(2);\n        feetTextForBox = document.createTextNode(`Depth: Feet ${feet}`);\n        metersTextForBox = document.createTextNode(`Depth: Meters ${meters}`);\n        feetDepthItem.appendChild(feetTextForBox);\n        metersDepthItem.appendChild(metersTextForBox);\n        if (this.depthBox.childElementCount === 0) {\n            this.depthBox.appendChild(feetDepthItem);\n            this.depthBox.appendChild(metersDepthItem);\n        } else {\n            this.depthBox.replaceChild(feetDepthItem, this.depthBox.childNodes[0]);\n            this.depthBox.replaceChild(metersDepthItem, this.depthBox.childNodes[1]);\n        }\n        let container = document.getElementsByClassName(\"canvas-controller-container\")\n        container[0].appendChild(this.depthBox);\n    }\n    \n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const gameCanvas = document.getElementById(\"game-canvas\");\n    const canvasCtx = gameCanvas.getContext(\"2d\");\n    \n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvasCtx, gameCanvas);\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/submarine.js":
/*!**************************!*\
  !*** ./src/submarine.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const converter = __webpack_require__(/*! ./util/conversions */ \"./src/util/conversions.js\");\n\nclass Submarine {\n  constructor(canvasCtx, gameCanvas) {\n    this.canvasCtx = canvasCtx;\n    this.gameCanvas = gameCanvas;\n    this.image = new Image();\n    this.image.src = \"./images/submarine.png\";\n    this.width = 100;\n    this.height = 100;\n    this.speedX = 0;\n    this.speedY = 0;\n    this.x = 200;\n    this.y = 200;\n    this.update = this.update.bind(this);\n  }\n\n  update() {\n    if (this.atBoundaryX()) {\n      this.speedX = 0\n    }\n    if (this.atBoundaryY()) {\n      this.speedY = 0\n    }\n    this.canvasCtx.drawImage(\n      this.image,\n      (this.x += this.speedX),\n      (this.y += this.speedY),\n      this.width,\n      this.height\n    );\n  }\n\n  atBoundaryX() {\n    const posX = this.x + this.speedX;\n    const canvasBndryX = this.gameCanvas.width * 0.1;\n    if (posX <= canvasBndryX || posX + this.width >= this.gameCanvas.width - canvasBndryX) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  atBoundaryY() {\n    const posY = this.y + this.speedY;\n    const canvasBndryY = this.gameCanvas.height * 0.1;\n    if (posY + (this.height / 2) <= canvasBndryY || posY + (this.height / 2) >= this.gameCanvas.height - canvasBndryY){\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\nmodule.exports = Submarine;\n\n\n//# sourceURL=webpack:///./src/submarine.js?");

/***/ }),

/***/ "./src/util/conversions.js":
/*!*********************************!*\
  !*** ./src/util/conversions.js ***!
  \*********************************/
/*! exports provided: metersToFeet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"metersToFeet\", function() { return metersToFeet; });\nconst metersToFeet = (meters) => (meters * 3.2808);\n\n//# sourceURL=webpack:///./src/util/conversions.js?");

/***/ })

/******/ });