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

/***/ "./08.creating_deleting_DOM_ele.js":
/*!*****************************************!*\
  !*** ./08.creating_deleting_DOM_ele.js ***!
  \*****************************************/
/***/ (() => {

eval("/**************************\n* Bismillahir Rahmanir Rahim\n* DOM T-08\n* Creating & Deleting DOM Element\n* Author : Shihan Chowdhury\n* Thanks to - Twinkle Cats \n**************************/\n// First: Creating DOM Element\n$ = function $(selector) {\n  return document.querySelector(selector);\n};\n\nvar root = $('#root');\nvar innerDiv = document.createElement(\"div\");\ninnerDiv.className = 'innerCls';\ninnerDiv.setAttribute('id', 'innerDivId');\nvar h1Tag = document.createElement(\"h1\");\nh1Tag.className = 'h1Tag text-center';\nh1Tag.innerHTML = 'Creating DOM Element';\ninnerDiv.appendChild(h1Tag);\nroot.appendChild(innerDiv); // Second: Creating Another DOM Element\n\nvar inputId = $('#inputId');\nvar ulId = $('#ulId');\ninputId.addEventListener('keypress', function (event) {\n  if (event.keyCode == 13) {\n    // alert(\"i am clicked\");\n    // here keyCode 13 means enter keys car code =13; console.dir(event)\n    var value = event.target.value; // console.log(value);\n\n    var output = createLi(value);\n    ulId.appendChild(output);\n    event.target.value = \"\";\n  }\n});\n\nfunction createLi(value) {\n  var li = document.createElement('li');\n  li.className = 'list-group-item';\n  li.innerHTML = value;\n  return li;\n} // Creating & Deleting DOM Element\n\n\nvar ginputID = $('#ginputID');\nvar gulId = $('#gulId');\nginputID.addEventListener('keypress', function (event) {\n  if (event.keyCode == 13) {\n    var val = event.target.value;\n    createLI(gulId, val);\n    event.target.value = \"\";\n  }\n});\n\nfunction createLI(gulId, val) {\n  var li2 = document.createElement('li');\n  li2.className = 'list-group-item d-flex';\n  li2.innerHTML = val;\n  var span = document.createElement('span');\n  span.innerHTML = 'X';\n  span.style.color = 'red';\n  span.style.cursor = 'pointer';\n  span.className = 'ml-auto'; // ml-auto works when d-flex used in upper scope\n\n  span.addEventListener('click', function () {\n    gulId.removeChild(li2);\n  });\n  li2.appendChild(span);\n  gulId.appendChild(li2);\n}\n\n//# sourceURL=webpack://code/./08.creating_deleting_DOM_ele.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./08.creating_deleting_DOM_ele.js"]();
/******/ 	
/******/ })()
;