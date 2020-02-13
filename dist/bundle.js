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
/***/ (function(module, exports) {

eval("\nclass GameBackground {\n  constructor(canvasCtx, gameCanvas){\n    this.canvasCtx = canvasCtx;\n    this.gameCanvas = gameCanvas;\n    this.image = new Image();\n    this.image.src = \"https://www.transparenttextures.com/patterns/asfalt-light.png\";\n    this.width = gameCanvas.width;\n    this.height = gameCanvas.height;\n    this.speedY = 0;\n    this.dx = 0;\n    this.dy = 0; \n    this.sh = this.image.height;\n    this.dh = this.height;\n    this.update = this.update.bind(this);\n  }\n  update(){\n    if (this.dy === 500) {\n      this.dy = 0;\n    } else if (this.dy <= -500) {\n      this.dy = 0;\n    }\n    this.canvasCtx.drawImage(\n      this.image,\n      this.dx,\n      this.dy += this.speedY,\n      this.width,\n      this.height\n    );\n    this.canvasCtx.drawImage(\n      this.image,\n      this.dx,\n      this.height + this.dy,\n      this.width,\n      this.height\n    );\n    this.canvasCtx.drawImage(\n      this.image,\n      this.dx,\n      this.dy -this.height,\n      this.width,\n      this.height\n    );\n  }\n}\nmodule.exports = GameBackground;\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/collided.js":
/*!*************************!*\
  !*** ./src/collided.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass Collided {\n    constructor(garbage, submarine){\n        this.garbage = garbage;\n        this.submarine = submarine;\n    }\n    centerPoint(object, distArr) {\n        let xCenter = distArr[0] + object.x;\n        let yCenter = distArr[1] + object.y;\n        return [xCenter, yCenter];\n    }\n\n    distanceFrom(object) {\n        let xDistanceFromCenter = Math.round(object.width / 2);\n        let yDistanceFromCenter = Math.round(object.height / 2);\n        return [xDistanceFromCenter, yDistanceFromCenter];\n    }\n\n    distanceBetween(centerPointObj1, centerPointObj2) {\n       let distance = Math.abs(centerPointObj1 - centerPointObj2);\n       return distance;\n    }\n\n    collision() {\n        let subVectors = this.distanceFrom(this.submarine);\n        let bagVectors = this.distanceFrom(this.garbage);\n        let subCenter = this.centerPoint(this.submarine, subVectors);\n        let bagCenter = this.centerPoint(this.garbage, bagVectors);\n        \n        if (this.distanceBetween(subCenter[0], bagCenter[0]) < (subVectors[0] + bagVectors[0])*0.8 && \n            this.distanceBetween(subCenter[1], bagCenter[1]) < (subVectors[1] + bagVectors[1])*.8) {\n            return true;\n        } else { return false}\n    }\n}\nmodule.exports = Collided;\n\n//# sourceURL=webpack:///./src/collided.js?");

/***/ }),

/***/ "./src/depth.js":
/*!**********************!*\
  !*** ./src/depth.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const converter = __webpack_require__(/*! ./util/conversions */ \"./src/util/conversions.js\");\n\n\nclass Depth {\n    constructor(canvasCtx, gameCanvas, submarine) {\n        this.canvasCtx = canvasCtx;\n        this.gameCanvas = gameCanvas;\n        this.submarine = submarine;\n        this.subDepth = 20;\n        this.depthBox = document.createElement(\"div\");\n        this.depthBox.setAttribute(\"class\", \"depth-box\");\n\n\n    }\n\n    updateDepth() {\n        let newDepth = this.subDepth + this.submarine.speedY\n        if (newDepth >= 0 && newDepth <= 20) {\n            this.subDepth += this.submarine.speedY * 0.1;\n        } else if (newDepth > 20 && newDepth <= 200) {\n            this.subDepth += this.submarine.speedY * 0.5;\n        } else if (newDepth > 200) {\n            this.subDepth += this.submarine.speedY;\n        } else if (newDepth > 1000) {\n            this.subDepth += this.submarine.speedY;\n        }\n        this.updateDepthBox();\n    }\n\n    moveDepthBox() {\n        let rightAxis = this.gameCanvas.width;\n        let depthRatio = 6050 / this.gameCanvas.height;\n        let posY = this.subDepth / depthRatio;\n        this.canvasCtx.fillStyle = \"gold\";\n        this.canvasCtx.beginPath();\n        this.canvasCtx.ellipse(\n            rightAxis, posY, 15, 5, Math.PI, 0, 2 * Math.PI\n        );\n        this.canvasCtx.stroke();\n        \n        this.canvasCtx.fill();\n    }\n\n    updateDepthBox() {\n        let feetTextForBox = '';\n        let metersTextForBox = '';\n        let depthHeaderText = document.createTextNode(\"Depth Gauge\")\n        let depthHeader = document.createElement(\"h2\");\n        depthHeader.setAttribute(\"class\", \"depth-header\");\n        let feetDepthItem = document.createElement(\"li\");\n        let metersDepthItem = document.createElement(\"li\");\n        let meters;\n        let feet;\n\n        switch (true) {\n            case (this.subDepth <= 20):\n                meters = \"Too Shallow\"\n                break;\n            case (this.subDepth >= 6050):\n                meters = \"Too Deep\"\n                break;\n            default:\n                meters = this.subDepth.toFixed(0)\n                break;\n        }\n        switch (true) {\n            case (this.subDepth <= 20):\n                feet = \"Too Shallow\"\n                break;\n            case (this.subDepth >= 6050):\n                feet = \"Too Deep\"\n                break;\n            default:\n                feet = converter.metersToFeet(meters).toFixed(2);\n                break;\n        }\n        feetTextForBox = document.createTextNode(`Feet: ${feet}`);\n        metersTextForBox = document.createTextNode(`Meters: ${meters}`);\n\n        feetDepthItem.appendChild(feetTextForBox);\n        metersDepthItem.appendChild(metersTextForBox);\n        depthHeader.appendChild(depthHeaderText);\n\n        if (this.depthBox.childElementCount === 0) {\n            this.depthBox.appendChild(depthHeader);\n            this.depthBox.appendChild(feetDepthItem);\n            this.depthBox.appendChild(metersDepthItem);\n        } else {\n            this.depthBox.replaceChild(depthHeader, this.depthBox.childNodes[0]);\n            this.depthBox.replaceChild(feetDepthItem, this.depthBox.childNodes[1]);\n            this.depthBox.replaceChild(metersDepthItem, this.depthBox.childNodes[2]);\n        }\n        let container = document.getElementsByClassName(\"canvas-controller-container\")\n        container[0].appendChild(this.depthBox);\n    }\n}\nmodule.exports = Depth;\n\n//# sourceURL=webpack:///./src/depth.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Submarine = __webpack_require__(/*! ./submarine */ \"./src/submarine.js\");\nconst GameBackground = __webpack_require__(/*! ./background */ \"./src/background.js\");\nconst Garbage = __webpack_require__(/*! ./garbage */ \"./src/garbage.js\");\nconst Collided = __webpack_require__(/*! ./collided */ \"./src/collided.js\");\nconst Zone = __webpack_require__(/*! ./zones */ \"./src/zones.js\");\nconst Depth = __webpack_require__(/*! ./depth */ \"./src/depth.js\");\n\n\nclass Game {\n    constructor(canvasCtx, gameCanvas){\n        this.canvasCtx = canvasCtx;\n        this.gameCanvas = gameCanvas;\n        this.gameCanvas.setAttribute(\"class\", \"sunlight\");\n        this.background = new GameBackground(this.canvasCtx, this.gameCanvas);\n        this.submarine = new Submarine(this.canvasCtx, this.gameCanvas);\n        this.zone = new Zone(this.gameCanvas);\n        this.depth = new Depth(this.canvasCtx, this.gameCanvas, this.submarine);\n        this.updateGameArea = this.updateGameArea.bind(this);\n        this.makeGarbage = this.makeGarbage.bind(this);\n        this.garbageArr = [];\n        this.clearCanvas = this.clearCanvas.bind(this);\n        this.interval;\n        this.garbageInterval;\n        this.keysReleased = this.keysReleased.bind(this);\n        this.garbageBox = document.createElement(\"div\");\n        this.garbageBox.setAttribute(\"class\", \"garbage-box\");\n        this.collectedTrash = 0;\n        this.keys = {37: false, 38: false, 39: false, 40: false};\n        window.addEventListener(\"keydown\", this.updateGameArea, false);\n        window.addEventListener(\"keyup\", this.keysReleased, false);\n        this.start();\n    }\n        \n    start() {\n        this.depth.updateDepth();\n        this.displayGarbageCount();\n        this.garbageInterval = setInterval(this.makeGarbage, Math.floor(Math.random() * 20000));\n        this.interval = setInterval(this.updateGameArea, 20);\n    }\n\n    clearCanvas() {\n        this.canvasCtx.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);\n    }\n\n    stop() {\n        clearInterval(this.interval);\n    }\n\n    keysReleased(e) {\n        this.keys[e.keyCode] = false;\n        this.updateGameArea(e);\n    }\n    newPos(e) {\n        this.submarine.speedX = 0;\n        this.submarine.speedY = 0;\n        this.background.speedX = 0;\n        this.background.speedY = 0;\n        if (e.type === \"keydown\") {\n        this.keys[e.keyCode] = true;\n        }\n        if (this.keys[37]) {\n            this.submarine.speedX = -5;\n        }\n\n        if (this.keys[39]) {\n            this.submarine.speedX = 5;\n        }\n\n        if (this.keys[38]) {\n            this.submarine.speedY = -5;\n            this.atBarrier() ? this.background.speedY = 0 : this.background.speedY = 5;\n            if (this.depth.subDepth > 1000 && this.depth.subDepth < 6000) {\n                this.background.speedY = 25;\n            }\n        }\n\n        if (this.keys[40]) {\n            this.submarine.speedY = 5;\n            this.atBarrier() ? this.background.speedY = 0 : this.background.speedY = -5;\n            if (this.depth.subDepth > 1000 && this.depth.subDepth < 6000) {\n                this.background.speedY = -25;\n            }\n        }\n\n        e.preventDefault();\n        this.depth.updateDepth();\n  }\n\n    updateGameArea(e) {\n        let collisions = [];\n        this.clearCanvas();\n        if (e) {\n            this.newPos(e)\n        }\n        this.background.update();\n        this.submarine.update();\n        for(let i = 0; i < this.garbageArr.length; i++) {\n            this.garbageArr[i].generate(this.background.speedY);\n            let possibleCollision = new Collided(this.garbageArr[i], this.submarine);\n            if (possibleCollision.collision() === true) {\n                collisions.push(i);\n                this.collectedTrash += collisions.length;\n            };\n        }\n        this.displayGarbageCount();\n        this.zone.zoneChange(this.depth.subDepth);\n        this.emptyGarbage(collisions);\n        this.depth.moveDepthBox();\n\n    }\n    makeGarbage() {\n        if (this.garbageArr.length < 3) {\n            this.garbageArr.push(new Garbage(this.canvasCtx, this.gameCanvas));\n        }\n    }\n\n    emptyGarbage(collisions) {\n        for (let i = 0; i < this.garbageArr.length; i++) {\n            if (this.garbageArr[i].y < -60 || collisions.includes(i)) {\n                this.garbageArr.splice(i, 1);\n            }\n        }\n    }\n\n    atBarrier() {\n        if (this.depth.subDepth <= 20 || this.depth.subDepth >= 6050) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n    \n    displayGarbageCount() {\n        let garbageHeader = document.createElement(\"h2\");\n        garbageHeader.setAttribute(\"class\", \"garbage-header\")\n        let garbageContent = document.createElement(\"p\");\n        garbageContent.setAttribute(\"class\", \"garbage-content\")\n        let garbageHeaderText = document.createTextNode(\"Garbage Collected:\");\n        let garbageContentText = document.createTextNode(this.collectedTrash);\n\n        garbageHeader.appendChild(garbageHeaderText);\n        garbageContent.appendChild(garbageContentText);\n\n        if (this.garbageBox.childElementCount === 0) {\n            this.garbageBox.appendChild(garbageHeader);\n            this.garbageBox.appendChild(garbageContent);\n        } else {\n            this.garbageBox.replaceChild(garbageHeader, this.garbageBox.childNodes[0]);\n            this.garbageBox.replaceChild(garbageContent, this.garbageBox.childNodes[1]);\n        }\n\n        let container = document.getElementsByClassName(\"canvas-controller-container\")\n        container[0].appendChild(this.garbageBox);\n    }\n    \n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/garbage.js":
/*!************************!*\
  !*** ./src/garbage.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass Garbage {\n    constructor(canvasCtx, gameCanvas) {\n        this.canvasCtx = canvasCtx;\n        this.gameCanvas = gameCanvas;\n        this.image = new Image();\n        this.image.src = \"./images/plastic-bag.png\";\n        this.height = 40;\n        this.width = 40;\n        this.speedY = 1;\n        this.x = Math.floor(Math.random() * 500) + 50;\n        this.y = 450;\n        this.generate = this.generate.bind(this);\n    }\n\n    generate(backgroundSpeed) {\n\n        this.canvasCtx.drawImage(\n            this.image,\n            this.x,\n            this.y -= (this.speedY - backgroundSpeed),\n            this.height,\n            this.width\n        );\n    }\n\n\n}\nmodule.exports = Garbage;\n\n//# sourceURL=webpack:///./src/garbage.js?");

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
/***/ (function(module, exports) {

eval("\nclass Submarine {\n  constructor(canvasCtx, gameCanvas) {\n    this.canvasCtx = canvasCtx;\n    this.gameCanvas = gameCanvas;\n    this.image = new Image();\n    this.image.src = \"./images/submarine.png\";\n    this.width = 100;\n    this.height = 100;\n    this.speedX = 0;\n    this.speedY = 0;\n    this.x = 200;\n    this.y = 200;\n    this.update = this.update.bind(this);\n  }\n\n  update() {\n    if (this.atBoundaryX()) {\n      this.speedX = 0\n    }\n    if (this.atBoundaryY()) {\n      this.speedY = 0\n    }\n    this.canvasCtx.drawImage(\n      this.image,\n      (this.x += this.speedX),\n      (this.y += this.speedY),\n      this.width,\n      this.height\n    );\n  }\n\n  atBoundaryX() {\n    const posX = this.x + this.speedX;\n    const canvasBndryX = this.gameCanvas.width * 0.025;\n    if (posX <= canvasBndryX || posX + this.width >= this.gameCanvas.width - canvasBndryX) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  atBoundaryY() {\n    const posY = this.y + this.speedY;\n    const canvasBndryY = this.gameCanvas.height * 0.1;\n    if (posY + (this.height / 2) <= canvasBndryY || posY + (this.height / 2) >= this.gameCanvas.height - canvasBndryY){\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\nmodule.exports = Submarine;\n\n\n//# sourceURL=webpack:///./src/submarine.js?");

/***/ }),

/***/ "./src/util/conversions.js":
/*!*********************************!*\
  !*** ./src/util/conversions.js ***!
  \*********************************/
/*! exports provided: metersToFeet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"metersToFeet\", function() { return metersToFeet; });\nconst metersToFeet = (meters) => (meters * 3.2808);\n\n//# sourceURL=webpack:///./src/util/conversions.js?");

/***/ }),

/***/ "./src/util/layers.js":
/*!****************************!*\
  !*** ./src/util/layers.js ***!
  \****************************/
/*! exports provided: layers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"layers\", function() { return layers; });\nconst layers = {\n    \"sunlight\" : {\n        name: \"Sunlight zone (Epipelagic Zone)\",\n        info: \"The photic zone of the ocean where corals and plant life exists. This is the limit for most recreational diving and activities.\",\n        minD: 0,\n        maxD: 200,\n        colorId: \"sunlight\",\n        creatures: \"dolphins, turtles, and tuna.\"\n    },\n\n    \"twilight\" : {\n        name: \"Twilight zone (Mesopelagic Zone)\",\n        info: \"Light can be seen above, but below is dark. This zone has the greatest change in temperature as it is where the thermocline exists between the mixing and non-mixing layers.\",\n        minD: 201,\n        maxD: 1000,\n        colorId: \"twilight\",\n        creatures: \"sharks and swordfish.\"\n    },\n\n    \"midnight\" : {\n        name: \"Midnight zone (Bathypelagic Zone)\",\n        info: \"No light penetrates to this zone, keeping it in perpetual darkness. Pressure here is about 400 times that of the surface. This is the zone in which the Titanic rests.\",\n        minD: 1001,\n        maxD: 4000,\n        colorId: \"midnight\",\n        creatures: \"anglerfish, giant squid, and sperm whale.\"\n    },\n\n    \"abyssal\" : {\n        name: \"Abyssal zone (Abyssopelagic Zone)\",\n        info: \"The vast majority of the ocean floor is within this zone. Temperature is barely above freezing and the pressure is about 600 times that of the surface.\",\n        minD: 4001,\n        maxD: 6000,\n        colorId: \"midnight\",\n        creatures: \"dumbo octopus, gulper eel, and anglerfish.\"\n    },\n\n    \"trenches\" : {\n        name: \"The Trenches (Hadalpelagic Zone)\",\n        info: \"This is the final part of the ocean, reaching down to the deepest trenches. The sheer pressure of water is too much to allow our sub to dive deeper.\",\n        minD: 6001,\n        maxD: 11000,\n        colorId: \"midnight\",\n        creatures: \"sponges, worms, and isopods.\"\n    }\n}\n\n//# sourceURL=webpack:///./src/util/layers.js?");

/***/ }),

/***/ "./src/zones.js":
/*!**********************!*\
  !*** ./src/zones.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const layers = __webpack_require__(/*! ./util/layers */ \"./src/util/layers.js\");\n\n\nclass Zones {\n    constructor(gameCanvas){\n        this.gameCanvas = gameCanvas\n        this.zoneChange = this.zoneChange.bind(this);\n        this.zoneInfo = document.createElement(\"div\");\n        this.zoneInfo.setAttribute(\"class\", \"zone-box\");\n        this.timeout;\n        this.hideZoneInfo = this.hideZoneInfo.bind(this);\n        this.displayInfo = this.displayInfo.bind(this);\n        this.zoneArr = Object.values(layers.layers);\n        this.currentZone = this.zoneArr[0];\n        this.initialInfo();\n    }\n\n    initialInfo() {\n        let container = document.getElementsByClassName(\"canvas-controller-container\")\n        container[0].appendChild(this.zoneInfo);\n        this.displayInfo();\n    }\n\n    zoneChange(subDepth) {\n        for(let i = 0; i < this.zoneArr.length; i++) {\n            if (this.zoneArr[i].name !== this.currentZone.name) {\n                let changeDepth = this.zoneArr[i].minD\n                let changeDepth2 = this.zoneArr[i].maxD\n                if (subDepth >= changeDepth && subDepth <= changeDepth + 5 ||\n                    subDepth <= changeDepth2 && subDepth >= changeDepth2 - 5) {\n                    this.currentZone = this.zoneArr[i];\n                    this.displayInfo();\n                    this.changeColor(this.zoneArr[i].colorId)\n                }\n            }\n        }\n    }\n    displayInfo() {\n        let zoneName = document.createElement(\"h2\");\n        zoneName.setAttribute(\"class\", \"zone-name\")\n        let zoneInfo = document.createElement(\"p\");\n        zoneInfo.setAttribute(\"class\", \"zone-info\")\n        let headerText = document.createTextNode(this.currentZone.name);\n        let paraText = document.createTextNode(`${this.currentZone.info}\n         Here you will find creatures such as ${this.currentZone.creatures}`);\n        zoneName.appendChild(headerText);\n        zoneInfo.appendChild(paraText);\n        if (this.zoneInfo.childElementCount === 0) {\n            this.zoneInfo.appendChild(zoneName);\n            this.zoneInfo.appendChild(zoneInfo);\n        } else {\n            this.zoneInfo.replaceChild(zoneName, this.zoneInfo.childNodes[0]);\n            this.zoneInfo.replaceChild(zoneInfo, this.zoneInfo.childNodes[1]);\n        }\n        this.zoneInfo.classList.remove(\"hidden\");\n        this.timeout = setTimeout(this.hideZoneInfo, 10000);\n\n    }\n\n    hideZoneInfo() {\n        this.zoneInfo.classList.add(\"hidden\");\n    }\n\n    changeColor(colorId) {\n        this.gameCanvas.setAttribute(\"class\", colorId)\n    }\n}\nmodule.exports = Zones;\n\n//# sourceURL=webpack:///./src/zones.js?");

/***/ })

/******/ });