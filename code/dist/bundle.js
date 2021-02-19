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

/***/ "./05.QuerySelector_DOM.js":
/*!*********************************!*\
  !*** ./05.QuerySelector_DOM.js ***!
  \*********************************/
/***/ (() => {

eval("/**************************\n* Bismillahir Rahmanir Rahim\n* DOM T-05\n* Query Selector of DOM\n* Author : Shihan Chowdhury\n* Thanks to - Twinkle Cats \n**************************/\nvar h1_id = document.querySelector('#h1-tag'); // let btn_id = document.querySelector('#btn-id');\n\nvar btn_id = $('#btn-id');\nvar colors = ['yellow', 'purple', 'salmon'];\nvar x = 0;\nbtn_id.addEventListener('click', function () {\n  h1_id.style.color = colors[x];\n\n  if (x > colors.length) {\n    x = 0;\n    h1_id.style.color = colors[x];\n  } else {\n    x++;\n  }\n}); // Now we are minimizing document.querySelector('#....); by making a funciton\n\nfunction $(selector) {\n  return document.querySelector(selector);\n}\n\nvar btnId2 = $('#btn-id-2');\nvar pTag = $('#pTag');\nbtnId2.addEventListener('click', function () {\n  pTag.style.color = 'salmon';\n});\n\n//# sourceURL=webpack://code/./05.QuerySelector_DOM.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./05.QuerySelector_DOM.js"]();
/******/ 	
/******/ })()
;