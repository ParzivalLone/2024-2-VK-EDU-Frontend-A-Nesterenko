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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar fromInput = document.querySelector('.form-input');\nvar sendButton = document.querySelector('.send-button');\nvar messageListUl = document.querySelector('#message-list-ul');\nloadMessagesFromStorage();\nfromInput.addEventListener('input', function () {\n  if (fromInput.value.trim() !== '') {\n    sendButton.style.display = 'block';\n  } else {\n    sendButton.style.display = 'none';\n  }\n  fromInput.size = fromInput.value.length + 1;\n});\nfromInput.addEventListener('keypress', function (e) {\n  if (e.key === 'Enter' && fromInput.value.trim() !== '') {\n    e.preventDefault();\n    sendMessage(e);\n    fromInput.value = '';\n    fromInput.placeholder = 'Введите сообщение';\n  }\n});\nsendButton.addEventListener('click', function (e) {\n  e.preventDefault();\n  if (fromInput.value.trim() !== '') {\n    sendMessage(e);\n    fromInput.value = '';\n    fromInput.placeholder = 'Введите сообщение';\n  }\n});\nfunction sendMessage(event) {\n  console.log('Message sent:', fromInput.value);\n  var messageText = fromInput.value.trim();\n  fromInput.value = '';\n  fromInput.placeholder = 'Введите сообщение';\n  var message = {\n    text: messageText,\n    sender: 'Александр',\n    timestamp: new Date().toLocaleString().slice(0, -3)\n  };\n  addMessageToList(message);\n  saveMessageToStorage(message);\n  var newMessageElement = messageListUl.lastChild;\n  newMessageElement.scrollIntoView({\n    behavior: 'smooth'\n  });\n  sendButton.style.display = 'none';\n}\nfunction saveMessageToStorage(message) {\n  var messages = JSON.parse(localStorage.getItem('messages') || '[]');\n  messages.push(message);\n  localStorage.setItem('messages', JSON.stringify(messages));\n}\nfunction loadMessagesFromStorage() {\n  var messages = JSON.parse(localStorage.getItem('messages') || '[]');\n  messages.forEach(function (message) {\n    addMessageToList(message);\n  });\n}\nfunction addMessageToList(message) {\n  var messageDiv = document.createElement('li');\n  messageDiv.className = 'message-bubble';\n  var messageSpan = document.createElement('span');\n  messageSpan.textContent = message.text;\n  messageSpan.className = 'message-text';\n  var metadataDiv = document.createElement('div');\n  metadataDiv.className = 'metadata';\n  var senderSpan = document.createElement('span');\n  senderSpan.textContent = message.sender;\n  senderSpan.className = 'sender';\n  var timestampSpan = document.createElement('span');\n  timestampSpan.textContent = message.timestamp;\n  timestampSpan.className = 'timestamp';\n  metadataDiv.appendChild(senderSpan);\n  metadataDiv.appendChild(timestampSpan);\n  messageDiv.appendChild(messageSpan);\n  messageDiv.appendChild(metadataDiv);\n  messageListUl.appendChild(messageDiv);\n  messageListUl.offsetHeight;\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });