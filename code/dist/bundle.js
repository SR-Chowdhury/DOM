/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./06.style_doc_DOM.js":
/*!*****************************!*\
  !*** ./06.style_doc_DOM.js ***!
  \*****************************/
/***/ (() => {

eval("/**************************\n* Bismillahir Rahmanir Rahim\n* DOM T-06\n* Style Document of DOM\n* Author : Shihan Chowdhury\n* Thanks to - Twinkle Cats \n**************************/\n$ = function $(selector) {\n  return document.querySelector(selector);\n};\n\nvar h1Tag = $('#h1Tag');\nvar pTag = $('#pTag');\nh1Tag.style.color = 'salmon';\nh1Tag.style.fontSize = '35px';\nh1Tag.style.borderBottom = '3px solid yellow';\nvar pStyle = {\n  padding: '5px',\n  color: 'purple',\n  border: '2px solid blue',\n  lineHeigth: '1.3'\n};\nObject.assign(pTag.style, pStyle);\nObject.assign($('#anotherP').style, pStyle);\n\n//# sourceURL=webpack://code/./06.style_doc_DOM.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./06.style_doc_DOM.js"]();
/******/ 	
/******/ })()
;