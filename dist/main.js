/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    color:rgb(162, 45, 18);\n    font-family: 'Bebas Neue';\n    /* background-color: rgb(240, 221, 167); */\n    font-size: 25px;\n    /* white-space: pre-line; */\n    \n}\n\nbody{\n    margin: 0px;\n    font-size: 20px;\n    height: 100vh;\n}\n\nul {\n    margin: 0px;\n    padding: 0px;\n}\n\nimg {\n    border-radius: 7px;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n\n    height:100%;\n\n}\n\n.header{\n    background-color: beige;\n}\n\n.header .title{\n    font-size: 60px;\n    font-weight:900;\n    padding: 15px 40px;\n}\n\n.main .title{\n    font-size: 50px;\n    font-style: italic;\n    font-weight:600;\n    text-decoration: underline;\n}\n\n.pages {\n    display:flex;\n    list-style-type: none;\n    justify-content: space-around;\n    \n    \n}\n\n\n.main{\n    background-color: rgb(240, 221, 167);\n    padding: 20px;\n    /* height:max(200px, fit-content); */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    flex-grow: 1;\n    align-items: center;\n    \n}\n\n.item-list{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    /* grid-template-rows: 1fr 1fr; */\n    column-gap: 200px;\n    row-gap: 50px;\n    justify-content: center;\n    align-items: center;\n    padding-top:60px;\n    padding-bottom: 60px;\n    \n}\n\n.item{\n    width: max(fit-content, 40%);\n}\n\n.comment, .price{\n    font-size: smaller;\n}\n\n.contact-page{\n    height: 100%;\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n\n\n}\n\n.footer{\n    background-color: rgb(217, 181, 134);\n    display:flex;\n    justify-content: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/bluberry-muffin2.jpg":
/*!**********************************!*\
  !*** ./src/bluberry-muffin2.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"images/bluberry-muffin2.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/bluberry-muffin2.jpg?");

/***/ }),

/***/ "./src/caramel-apple2.jpg":
/*!********************************!*\
  !*** ./src/caramel-apple2.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"images/caramel-apple2.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/caramel-apple2.jpg?");

/***/ }),

/***/ "./src/coffee-cup2.jpg":
/*!*****************************!*\
  !*** ./src/coffee-cup2.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"images/coffee-cup2.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/coffee-cup2.jpg?");

/***/ }),

/***/ "./src/coffee-cup3.jpg":
/*!*****************************!*\
  !*** ./src/coffee-cup3.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"images/coffee-cup3.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/coffee-cup3.jpg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContactNode: () => (/* binding */ createContactNode),\n/* harmony export */   generatePage: () => (/* binding */ generatePage)\n/* harmony export */ });\n\n\nfunction createContactNode(){\n    let contactContainerNode = document.createElement('div');\n    let contactNode = document.createElement('div');\n\n    let contactTitle = document.createElement('div');\n    let contactBranches = document.createElement('div');\n    let contactNumber = document.createElement('div');\n    let contactEmail = document.createElement('div');\n    let contactCode = document.createElement('div');\n\n    contactTitle.classList.add('title');\n\n\n\n    contactTitle.textContent = \"Contact us today!\";\n    contactBranches.textContent = 'Branch Location: Oaki, District 13, Oaklahoma';\n    contactNumber.textContent = 'Phone: +1 265 681842';\n    contactEmail.textContent = 'sip.cocoa@email.com';\n    contactCode.textContent = \"Order with code 'OBTYPE' to get 30% off of your first purchase!\";\n\n    contactNode.appendChild(contactTitle);\n    contactNode.appendChild(contactBranches);\n    contactNode.appendChild(contactNumber);\n    contactNode.appendChild(contactEmail);\n    contactNode.appendChild(contactCode);\n\n    contactNode.classList.add('contact-page');\n    contactContainerNode.classList.add('main');\n    contactContainerNode.appendChild(contactNode);\n    return contactContainerNode;\n}\n\nfunction generatePage(){\n    let content = document.querySelector('div#content');\n\n    content.appendChild(createContactNode());\n}\n\n/* \n    ORDER NOW!\n    Main branches: oaki, oklahoma; typef, District 13.\n\n    Contact info:\n        +1 3123 66534\n        nobody@yaml.com\n    \n*/\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomeNode: () => (/* binding */ createHomeNode),\n/* harmony export */   generatePage: () => (/* binding */ generatePage)\n/* harmony export */ });\n/* harmony import */ var _coffee_cup2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coffee-cup2.jpg */ \"./src/coffee-cup2.jpg\");\n\n\n\n\n\n\n\n\nfunction aboutusNode(){\n    let container = document.createElement('div');\n    container.classList.add('aboutus');\n\n    let containerTitle = document.createElement('div');\n    containerTitle.classList.add('title');\n\n    let containerContent = document.createElement('div');\n    containerContent.classList.add('content');\n\n    containerContent.textContent = \"Sip Cocoa is a cozy and welcoming coffee shop dedicated to providing a delightful coffee experience for our customers. Located in the heart of the city, our passion for quality coffee drives us to source the finest beans from around the world. \\n At Sip Cocoa, we believe that coffee is an art form. Our skilled baristas are passionate about their craft and take pride in creating beautifully crafted beverages. \";\n    containerTitle.textContent = \"About us!\"\n\n    container.appendChild(containerTitle);\n    container.appendChild(containerContent);\n    return container;\n\n}\n\n\nfunction reviewsNode(){\n    let container = document.createElement('div');\n    container.classList.add('reviews');\n\n    let containerTitle = document.createElement('div');\n    containerTitle.classList.add('title');\n\n    let containerContent = document.createElement('div');\n    containerContent.classList.add('content');\n\n    containerContent.textContent = \"Sip Cocoa exceeded my expectations! The smooth and aromatic flavors of their coffee left me craving for more. A must-visit for coffee enthusiasts! \\nI love the cozy atmosphere of Sip Cocoa. It's the perfect spot to relax and enjoy a delicious cup of coffee. The friendly staff and attention to detail make every visit memorable.\"\n    containerTitle.textContent = \"Read our reviews!\"\n\n\n    container.appendChild(containerTitle);\n    container.appendChild(containerContent);\n    return container;\n}\n\n\nfunction createHomeNode(){\n    let home = document.createElement('div');\n\n    let image_coffee = document.createElement('img');\n    image_coffee.src = _coffee_cup2_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    image_coffee.width = 100;\n    console.log(_coffee_cup2_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    \n    home.appendChild(image_coffee);\n    home.appendChild(aboutusNode());\n    home.appendChild(reviewsNode());\n\n    home.classList.add('main');\n    \n    return home;\n}\n\nfunction generatePage(){\n    \n    let content = document.querySelector('div#content');\n\n    content.appendChild(createHomeNode());\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _initialise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialise */ \"./src/initialise.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n//import { container } from 'webpack'; fuck you you piece of shit ass line. u wasted 2 hours of my life,\n\n\nconsole.log(\"The thing compiled properly.\");\n \n\nfunction clearPage(){\n    let content = document.querySelector('div#content');\n    let main;\n    //content.classList.contains()\n   content.childNodes.forEach((item)=>{\n        if(item.classList.contains('main')){\n            main = item;\n        }\n    }) \n\n    /* for(let i = 0; i < content.classList.length; i++){\n        if( content.childNodes[i].classList.contains('main')){\n            main = content.childNodes[i];\n        }\n    } */\n\n    //console.log(main);\n    content.removeChild(main);\n}\n\n\n\n\n\n(0,_initialise__WEBPACK_IMPORTED_MODULE_1__.initPage)();\n//clearPage();\n\n\n\nlet home = document.querySelector('ul li.home');\nlet menu = document.querySelector('ul li.menu');\nlet contact = document.querySelector('ul li.contact');\nconsole.log(home,  menu, contact);\n\n/* home.addEventListener('click', () => {\n\n}) */\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initialise.js":
/*!***************************!*\
  !*** ./src/initialise.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initPage: () => (/* binding */ initPage)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nfunction initHeader(){\n    let header = document.createElement('div');\n\n    header.classList.add('header');\n    let headerTitle = document.createElement('div')\n    headerTitle.classList.add(\"title\");\n    headerTitle.textContent = \"Sip Cocoa\";\n    \n    let headerList = document.createElement('ul');\n    headerList.classList.add('pages');\n    headerList.appendChild(document.createElement('li'));\n    headerList.appendChild(document.createElement('li'));\n    headerList.appendChild(document.createElement('li'));\n\n    headerList.childNodes[0].textContent = \"Home\";\n    headerList.childNodes[1].textContent = \"Menu\";\n    headerList.childNodes[2].textContent = \"Contact\";\n\n    headerList.childNodes[0].classList.add('home');\n    headerList.childNodes[1].classList.add('menu');\n    headerList.childNodes[2].classList.add('contact');\n    \n\n    \n    \n    \n    header.appendChild(headerTitle);\n    header.appendChild(headerList);\n\n    return header;\n\n}\n\nfunction initMain(){\n    let main = (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.createContactNode)();\n    //main.classList.add('main');\n    return main;\n}\n\nfunction initFooter(){\n    let footer= document.createElement('div');\n    footer.classList.add(\"footer\");\n\n    footer.textContent = \"An Obtype creation.\";\n\n    return footer;\n}\n\n\nfunction initPage() {\n    console.log('testing import statement')\n    //all the elements and stuff that I make here are going to be added as a child to the div.content tag in my index.html file.\n\n    let content = document.querySelector(\"div#content\");\n\n    content.appendChild(initHeader());\n    content.appendChild(initMain());\n    content.appendChild(initFooter());\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/initialise.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuNode: () => (/* binding */ createMenuNode),\n/* harmony export */   generatePage: () => (/* binding */ generatePage)\n/* harmony export */ });\n/* harmony import */ var _coffee_cup2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coffee-cup2.jpg */ \"./src/coffee-cup2.jpg\");\n/* harmony import */ var _bluberry_muffin2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bluberry-muffin2.jpg */ \"./src/bluberry-muffin2.jpg\");\n/* harmony import */ var _coffee_cup3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coffee-cup3.jpg */ \"./src/coffee-cup3.jpg\");\n/* harmony import */ var _caramel_apple2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caramel-apple2.jpg */ \"./src/caramel-apple2.jpg\");\n\n\n\n\n\n\n\n\n\nconst Item = function(name, price, comment , pic=null){\n    return{\n        name,\n        price,\n        comment,\n        pic\n    }\n}\n\nlet items = []; \n\nitems[0] = Item(\"Muffin\", '14.99', \"Soft and full of crumbles!\", _bluberry_muffin2_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nitems[1] = Item(\"Black Coffee\", '19.99', \"Shot of love.\", _coffee_cup2_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nitems[2] = Item(\"Caramel Apple\", '5.50', \"Crunchy delight that melts in your mouth.\", _caramel_apple2_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nitems[3] = Item(\"Traditional Chai\", '17.50', \"Travel back in time and enter a zen state.\", _coffee_cup3_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n\n\nfunction listMenuItems(){\n    let menuItems = document.createElement('div');\n    menuItems.classList.add('item-list');\n    \n    let itemCardTemplate = document.createElement('div');\n    let name = document.createElement('div');\n    let price = document.createElement('div');\n    let comment = document.createElement('div');\n    let picture = document.createElement('img');\n\n\n    itemCardTemplate.classList.add('item');\n    comment.classList.add('comment');\n    price.classList.add('price');\n\n\n    itemCardTemplate.appendChild(picture);\n    itemCardTemplate.appendChild(name);\n    itemCardTemplate.appendChild(price);\n    itemCardTemplate.appendChild(comment);\n    \n\n\n    for(let i = 0; i < 4; i++){\n        let temp = itemCardTemplate.cloneNode(true);\n        temp.childNodes[1].textContent = items[i].name;\n        temp.childNodes[2].textContent = `$${items[i].price}`;\n        temp.childNodes[3].textContent = items[i].comment;\n        temp.childNodes[0].src = items[i].pic;\n\n        temp.childNodes[0].width = 290;\n        menuItems.appendChild(temp);\n    }\n    \n\n    //create the card format.\n    //itemCardTemplate.\n    \n\n\n    return menuItems\n}\n\nfunction createMenuNode(){\n    let menu = document.createElement('div');\n    menu.classList.add('main');\n\n    //console.log(item1);\n\n    let menuTitle = document.createElement('div');\n    menuTitle.classList.add('title');\n    menuTitle.textContent = \"Menu\";\n\n\n    \n    menu.appendChild(menuTitle);\n    menu.appendChild(listMenuItems());\n    return menu;\n}\n\n\nfunction generatePage(){\n    let content = document.querySelector('div#content');\n\n    content.appendChild(createMenuNode());\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;