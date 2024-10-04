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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/chatlist.js":
/*!********************************!*\
  !*** ./components/chatlist.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var getLastMessage = function getLastMessage(messages) {\n  return messages[messages.length - 1];\n};\nvar getChatTitle = function getChatTitle() {\n  return localStorage.getItem('chatTitle');\n};\nvar displayChatInfo = function displayChatInfo() {\n  var messages = JSON.parse(localStorage.getItem('messages') || '[]');\n  var lastMessage = getLastMessage(messages);\n  var chatTitle = getChatTitle();\n  var chatTitleElement = document.getElementById('chat-title');\n  var lastMessageElement = document.getElementById('last-message');\n  var lastMessageTimeElement = document.getElementById('last-message-time');\n  chatTitleElement.textContent = chatTitle;\n  var maxLength = 30;\n  var truncatedLastMessage = (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.text.substring(0, maxLength)) + ((lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.text.length) > maxLength ? '.....' : '');\n  lastMessageElement.textContent = truncatedLastMessage;\n  lastMessageTimeElement.textContent = lastMessage.timestamp.split(' ')[1];\n};\nwindow.addEventListener('load', displayChatInfo);\nvar chatItem = document.getElementById('chatListUl');\nif (chatItem) {\n  chatItem.addEventListener('click', function () {\n    window.location.href = './chat list screen/chatsrc/index.html';\n    displayChatInfo();\n  });\n}\n;\n\n//# sourceURL=webpack:///./components/chatlist.js?");

/***/ }),

/***/ "./components/createchatbutton.js":
/*!****************************************!*\
  !*** ./components/createchatbutton.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var createChatButton = document.getElementById('create-chat-button');\nvar chatList = document.getElementById('chat-list');\nif (createChatButton && chatList) {\n  createChatButton.addEventListener('click', function () {\n    var chats = JSON.parse(localStorage.getItem('chats')) || [];\n    var titleInput = document.createElement('input');\n    titleInput.type = 'text';\n    titleInput.placeholder = 'Enter chat title';\n    var confirmButton = document.createElement('button');\n    confirmButton.textContent = 'Create Chat';\n    var chatTitleForm = document.createElement('div');\n    chatTitleForm.appendChild(titleInput);\n    chatTitleForm.appendChild(confirmButton);\n    chatList.appendChild(chatTitleForm);\n    confirmButton.addEventListener('click', function () {\n      var title = titleInput.value.trim();\n      if (title) {\n        var newChat = {\n          id: \"chat-\".concat(chats.length + 1),\n          title: title,\n          messages: []\n        };\n        chats.push(newChat);\n        localStorage.setItem('chats', JSON.stringify(chats));\n        chatList.innerHTML = '';\n        chats.forEach(function (chat) {\n          var chatListItem = document.createElement('div');\n          chatListItem.className = 'chat';\n          chatListItem.textContent = chat.title;\n          chatList.appendChild(chatListItem);\n        });\n      }\n    });\n  });\n}\n;\n\n//# sourceURL=webpack:///./components/createchatbutton.js?");

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var header = document.getElementById('header');\nif (header) {\n  var burgerButton = header.querySelector('.burger-button');\n  if (burgerButton) {\n    burgerButton.addEventListener('click', function () {\n      var menu = header.querySelector('.menu');\n      if (menu) {\n        menu.classList.toggle('visible');\n      }\n    });\n  }\n  var searchIcon = header.querySelector('.search-icon');\n  if (searchIcon) {\n    searchIcon.addEventListener('click', function () {\n      var searchForm = header.querySelector('.search-form');\n      if (searchForm) {\n        searchForm.classList.toggle('visible');\n      }\n    });\n  }\n}\n;\n\n//# sourceURL=webpack:///./components/header.js?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_chatlist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/chatlist.js */ \"./components/chatlist.js\");\n/* harmony import */ var _components_chatlist_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_chatlist_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_createchatbutton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/createchatbutton.js */ \"./components/createchatbutton.js\");\n/* harmony import */ var _components_createchatbutton_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_createchatbutton_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header.js */ \"./components/header.js\");\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_header_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });