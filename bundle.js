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

/***/ "./chatsrc/chatinfo.js":
/*!*****************************!*\
  !*** ./chatsrc/chatinfo.js ***!
  \*****************************/
/*! exports provided: displayChatInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayChatInfo\", function() { return displayChatInfo; });\nvar displayChatInfo = function displayChatInfo() {\n  var chatId = localStorage.getItem('chatId');\n  var messages = JSON.parse(localStorage.getItem(\"messages_\".concat(chatId)) || '[]');\n  var lastMessage = getLastMessage(messages);\n  var chatTitle = getChatTitle();\n  var chatTitleElement = document.getElementById('chat-title');\n  var lastMessageElement = document.getElementById('last-message');\n  var lastMessageTimeElement = document.getElementById('last-message-time');\n  var lastMessageImageElement = document.getElementById('last-message-image');\n  chatTitleElement.textContent = chatTitle;\n  var maxLength = 30;\n  var truncatedLastMessage = (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.text.substring(0, maxLength)) + ((lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.text.length) > maxLength ? '...' : '');\n  lastMessageElement.textContent = truncatedLastMessage;\n  if (lastMessage) {\n    lastMessageTimeElement.textContent = lastMessage.timestamp.split(' ')[1];\n    if (lastMessage.image && lastMessageImageElement) {\n      lastMessageImageElement.src = lastMessage.image;\n      lastMessageImageElement.style.display = 'block';\n    } else {\n      lastMessageImageElement.style.display = 'none';\n    }\n  } else {\n    lastMessageTimeElement.textContent = '';\n    lastMessageImageElement.style.display = 'none';\n  }\n};\nvar getLastMessage = function getLastMessage(messages) {\n  return messages[messages.length - 1];\n};\nvar getChatTitle = function getChatTitle() {\n  return localStorage.getItem('chatTitle');\n};\n\n//# sourceURL=webpack:///./chatsrc/chatinfo.js?");

/***/ }),

/***/ "./chatsrc/chatlist.js":
/*!*****************************!*\
  !*** ./chatsrc/chatlist.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chatinfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatinfo.js */ \"./chatsrc/chatinfo.js\");\n\nwindow.addEventListener('load', _chatinfo_js__WEBPACK_IMPORTED_MODULE_0__[\"displayChatInfo\"]);\nvar chatItem = document.getElementById('chat-list-ul');\nif (chatItem) {\n  chatItem.addEventListener('click', function () {\n    window.location.href = \"chat-list-screen/components/indexchat.html\";\n    Object(_chatinfo_js__WEBPACK_IMPORTED_MODULE_0__[\"displayChatInfo\"])();\n  });\n}\n\n//# sourceURL=webpack:///./chatsrc/chatlist.js?");

/***/ }),

/***/ "./chatsrc/createchatbutton.js":
/*!*************************************!*\
  !*** ./chatsrc/createchatbutton.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var createChatButton = document.querySelector('.create-chat-button');\nvar modal = document.getElementById('create-chat-modal');\nvar closeButton = document.querySelector('.close');\nvar chatNameInput = document.getElementById('chat-name');\nvar createChatForm = document.getElementById('create-chat-form');\nvar mainContainer = document.querySelector('.main-container');\nvar chatList = document.querySelector('#chat-list-ul');\nvar avatarInput = document.createElement('input');\navatarInput.type = 'file';\navatarInput.accept = 'image/*';\nvar avatarContainer = document.createElement('div');\navatarContainer.className = 'avatar-container';\nmodal.querySelector('.modal-content').appendChild(avatarInput);\nmodal.querySelector('.modal-content').appendChild(avatarContainer);\ncreateChatButton.addEventListener('click', function () {\n  modal.style.display = 'block';\n});\ncloseButton.addEventListener('click', function () {\n  modal.style.display = 'none';\n});\nvar addChatToList = function addChatToList(chatData) {\n  var existingChatListItem = chatList.querySelector(\".chat-list-item[data-chat-id=\\\"\".concat(chatData.id, \"\\\"]\"));\n  if (existingChatListItem) {\n    existingChatListItem.querySelector('.title').textContent = chatData.name;\n    existingChatListItem.querySelector('.last-message').textContent = '';\n    existingChatListItem.querySelector('.time').textContent = '';\n    existingChatListItem.querySelector('.last-message-image').style.display = 'none';\n  } else {\n    var chatListItem = document.createElement('li');\n    chatListItem.className = 'info-chat-container';\n    chatListItem.dataset.chatId = chatData.id;\n    var avatar = document.createElement('img');\n    avatar.className = 'avatar';\n    avatar.src = chatData.avatarUrl;\n    var lastMessageImage = document.createElement('img');\n    lastMessageImage.className = 'lastmessagepage';\n    lastMessageImage.id = 'last-message-image';\n    var chatTitle = document.createElement('h3');\n    chatTitle.className = 'title';\n    chatTitle.id = 'chat-title';\n    chatTitle.textContent = chatData.name;\n    var lastMessage = document.createElement('p');\n    lastMessage.className = 'last-message';\n    lastMessage.id = 'last-message';\n    var lastMessageTime = document.createElement('p');\n    lastMessageTime.className = 'time';\n    lastMessageTime.id = 'last-message-time';\n    var readIndicator = document.createElement('span');\n    readIndicator.className = 'read-indicator';\n    var readIndicatorIcon = document.createElement('span');\n    readIndicatorIcon.className = 'material-symbols-outlined';\n    readIndicatorIcon.textContent = 'done_all';\n    readIndicator.appendChild(readIndicatorIcon);\n    chatListItem.appendChild(avatar);\n    chatListItem.appendChild(lastMessageImage);\n    chatListItem.appendChild(chatTitle);\n    chatListItem.appendChild(lastMessage);\n    chatListItem.appendChild(lastMessageTime);\n    chatListItem.appendChild(readIndicator);\n    chatList.appendChild(chatListItem);\n    chatListItem.addEventListener('click', function () {\n      var chatId = chatListItem.dataset.chatId;\n      localStorage.setItem('chatId', chatId);\n      window.location.href = \"chat-list-screen/components/indexchat.html?chatId=\".concat(chatId);\n    });\n    localStorage.setItem(\"chatData_\".concat(chatData.id), JSON.stringify(chatData));\n  }\n};\ncreateChatForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var chatName = chatNameInput.value.trim();\n  if (chatName) {\n    var newChatId = generateChatId();\n    var avatarFile = avatarInput.files[0];\n    var chatData = {\n      id: newChatId,\n      name: chatNameInput.value.trim(),\n      messages: []\n    };\n    localStorage.setItem(\"chatData_\".concat(newChatId), JSON.stringify(chatData));\n    if (avatarFile) {\n      var reader = new FileReader();\n      reader.onload = function (e) {\n        var avatarUrl = e.target.result;\n        var chatData = {\n          id: newChatId,\n          name: chatName,\n          avatarUrl: avatarUrl,\n          lastMessage: {}\n        };\n        avatarContainer.innerHTML = '';\n        var avatar = document.createElement('img');\n        avatar.className = 'avatar';\n        avatar.src = avatarUrl;\n        avatar.id = \"avatar-\".concat(newChatId);\n        avatarContainer.appendChild(avatar);\n        localStorage.setItem('chatId', newChatId);\n        addChatToList(chatData);\n        modal.style.display = 'none';\n        chatNameInput.value = '';\n      };\n      reader.readAsDataURL(avatarFile);\n    }\n  }\n});\navatarInput.addEventListener('change', function () {\n  var file = avatarInput.files[0];\n  if (file.type.match(/^image\\/(jpeg|png)$/i)) {\n    var reader = new FileReader();\n    reader.onload = function (e) {\n      var avatarUrl = e.target.result;\n      var avatar = document.createElement('img');\n      avatar.className = 'avatar';\n      avatar.src = avatarUrl;\n      avatarContainer.innerHTML = '';\n      avatarContainer.appendChild(avatar);\n    };\n    reader.readAsDataURL(file);\n  } else {\n    alert('Только JPEG, PNG');\n    avatarInput.value = '';\n  }\n});\nvar generateChatId = function generateChatId() {\n  var id;\n  do {\n    id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);\n  } while (localStorage.getItem(\"chatData_\".concat(id)));\n  return id;\n};\nwindow.onload = function () {\n  var chatIds = Object.keys(localStorage).filter(function (key) {\n    return key.startsWith('chatData_');\n  });\n  chatIds.forEach(function (chatId) {\n    var chatData = JSON.parse(localStorage.getItem(chatId));\n    var existingChatListItem = chatList.querySelector(\".chat-list-item[data-chat-id=\\\"\".concat(chatData.id, \"\\\"]\"));\n    if (!existingChatListItem) {\n      addChatToList(chatData);\n    }\n  });\n};\nwindow.onbeforeunload = function (event) {\n  if (event.clientY > 0) {\n    var chatListItems = document.querySelectorAll('.chat-list-item');\n    chatListItems.forEach(function (item) {\n      var chatId = item.dataset.chatId;\n      var chatName = item.querySelector('.title').textContent;\n      var avatarUrl = item.querySelector('.avatar').src;\n      var chatData = {\n        id: chatId,\n        name: chatName,\n        avatarUrl: avatarUrl\n      };\n      localStorage.setItem(\"chatData_\".concat(chatId), JSON.stringify(chatData));\n    });\n  }\n};\n\n//# sourceURL=webpack:///./chatsrc/createchatbutton.js?");

/***/ }),

/***/ "./chatsrc/header.js":
/*!***************************!*\
  !*** ./chatsrc/header.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var searchButton = document.querySelector('.search-icon-chats');\nvar searchInput = document.createElement('input');\nsearchInput.type = 'text';\nsearchInput.placeholder = 'Посик сообщения...';\nsearchInput.className = 'search-input';\nsearchInput.style.display = 'none';\nsearchButton.parentNode.appendChild(searchInput);\nsearchButton.addEventListener('click', function () {\n  if (searchInput.style.display === 'none') {\n    searchInput.style.display = 'block';\n    searchInput.focus();\n  } else {\n    searchInput.style.display = 'none';\n  }\n});\nsearchInput.addEventListener('input', function () {\n  var chatTitles = document.querySelectorAll('#chat-title');\n  var searchTerm = searchInput.value.trim().toLowerCase();\n  if (searchTerm === '') {\n    chatTitles.forEach(function (title) {\n      title.classList.remove('highlight');\n    });\n  } else {\n    chatTitles.forEach(function (title) {\n      var titleText = title.textContent.toLowerCase();\n      if (titleText.includes(searchTerm)) {\n        title.classList.add('highlight');\n      } else {\n        title.classList.remove('highlight');\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./chatsrc/header.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chatsrc_chatinfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /chatsrc/chatinfo.js */ \"./chatsrc/chatinfo.js\");\n/* harmony import */ var _chatsrc_chatlist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /chatsrc/chatlist.js */ \"./chatsrc/chatlist.js\");\n/* harmony import */ var _chatsrc_createchatbutton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /chatsrc/createchatbutton.js */ \"./chatsrc/createchatbutton.js\");\n/* harmony import */ var _chatsrc_createchatbutton_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chatsrc_createchatbutton_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chatsrc_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! /chatsrc/header.js */ \"./chatsrc/header.js\");\n/* harmony import */ var _chatsrc_header_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chatsrc_header_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });