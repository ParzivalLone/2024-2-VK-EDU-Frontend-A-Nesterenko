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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index.css */ \"./src/index.css\");\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_pages_pagechatlist_chatinfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /src/pages/pagechatlist/chatinfo.js */ \"./src/pages/pagechatlist/chatinfo.js\");\n/* harmony import */ var _src_pages_pagechatlist_chatlist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /src/pages/pagechatlist/chatlist.js */ \"./src/pages/pagechatlist/chatlist.js\");\n/* harmony import */ var _src_components_button_createchatbutton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /src/components/button/createchatbutton.js */ \"./src/components/button/createchatbutton.js\");\n/* harmony import */ var _src_components_button_createchatbutton_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_components_button_createchatbutton_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_pages_pagechatlist_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! /src/pages/pagechatlist/header.js */ \"./src/pages/pagechatlist/header.js\");\n/* harmony import */ var _src_pages_pagechatlist_header_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_pages_pagechatlist_header_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/components/button/createchatbutton.js":
/*!***************************************************!*\
  !*** ./src/components/button/createchatbutton.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _readOnlyError(r) { throw new TypeError('\"' + r + '\" is read-only'); }\nvar createChatButton = document.querySelector('.create-chat-button');\nvar modal = document.getElementById('create-chat-modal');\nvar closeButton = document.querySelector('.close');\nvar chatNameInput = document.getElementById('chat-name');\nvar createChatForm = document.getElementById('create-chat-form');\nvar chatList = document.querySelector('#chat-list-ul');\nvar avatarInput = document.createElement('input');\nvar avatarContainer = document.createElement('div');\navatarInput.type = 'file';\navatarInput.accept = 'image/*';\navatarContainer.className = 'avatar-container';\nmodal.querySelector('.modal-content').appendChild(avatarInput);\nmodal.querySelector('.modal-content').appendChild(avatarContainer);\ncreateChatButton.addEventListener('click', function () {\n  modal.style.display = 'block';\n});\ncloseButton.addEventListener('click', function () {\n  modal.style.display = 'none';\n});\nvar addChatToList = function addChatToList(chatData) {\n  var existingChatListItem = chatList.querySelector(\".chat-list-item[data-chat-id=\\\"\".concat(chatData.id, \"\\\"]\"));\n  if (existingChatListItem) {\n    existingChatListItem.querySelector(\".title-\".concat(chatData.id)).textContent = chatData.name;\n    existingChatListItem.querySelector(\".last-message-\".concat(chatData.id)).textContent = '';\n    existingChatListItem.querySelector(\".last-message-image-\".concat(chatData.id)).style.display = 'none';\n    existingChatListItem.querySelector(\".time-\".concat(chatData.id)).textContent = '';\n    var lastMessage = chatData.messages[chatData.messages.length - 1];\n    if (lastMessage) {\n      existingChatListItem.querySelector(\".last-message-\".concat(chatData.id)).textContent = lastMessage.text;\n      existingChatListItem.querySelector(\".time-\".concat(chatData.id)).textContent = lastMessage.timestamp.split(' ')[1];\n      if (lastMessage.image) {\n        existingChatListItem.querySelector(\".last-message-image-\".concat(chatData.id)).src = lastMessage.image;\n        existingChatListItem.querySelector(\".last-message-image-\".concat(chatData.id)).style.display = 'block';\n      }\n    }\n  } else {\n    if (!chatData.id) {\n      return;\n    }\n    var chatListItem = document.createElement('li');\n    chatListItem.className = 'info-chat-container';\n    chatListItem.dataset.chatId = chatData.id;\n    var avatar = document.createElement('img');\n    avatar.classList.add('avatar');\n    avatar.src = localStorage.getItem(\"avatar_\".concat(chatData.id));\n    avatar.dataset.chatId = chatData.id;\n    var lastMessageImage = document.createElement('img');\n    lastMessageImage.classList.add('lastmessagepage');\n    lastMessageImage.id = \"last-message-image-\".concat(chatData.id);\n    lastMessageImage.dataset.chatId = chatData.id;\n    var chatTitle = document.createElement('h3');\n    chatTitle.classList.add('title');\n    chatTitle.id = \"chat-title-\".concat(chatData.id);\n    chatTitle.textContent = chatData.name;\n    chatTitle.dataset.chatId = chatData.id;\n    var _lastMessage = document.createElement('p');\n    _lastMessage.classList.add('lastmessage');\n    _lastMessage.id = \"last-message-\".concat(chatData.id);\n    _lastMessage.dataset.chatId = chatData.id;\n    var lastMessageTime = document.createElement('p');\n    lastMessageTime.classList.add('time');\n    lastMessageTime.id = \"last-message-time-\".concat(chatData.id);\n    lastMessageTime.dataset.chatId = chatData.id;\n    var readIndicator = document.createElement('span');\n    readIndicator.classList.add('read-indicator');\n    readIndicator.dataset.chatId = chatData.id;\n    var readIndicatorIcon = document.createElement('span');\n    readIndicatorIcon.classList.add('material-symbols-outlined');\n    readIndicatorIcon.textContent = 'done_all';\n    readIndicatorIcon.dataset.chatId = chatData.id;\n    readIndicator.appendChild(readIndicatorIcon);\n    chatListItem.appendChild(avatar);\n    chatListItem.appendChild(lastMessageImage);\n    chatListItem.appendChild(chatTitle);\n    chatListItem.appendChild(_lastMessage);\n    chatListItem.appendChild(lastMessageTime);\n    chatListItem.appendChild(readIndicator);\n    chatList.appendChild(chatListItem);\n    chatListItem.addEventListener('click', function (event) {\n      if (event.target.closest('.info-chat-container')) {\n        var chatId = event.target.closest('.info-chat-container').dataset.chatId;\n        var currentPath = window.location.pathname;\n        var newPath = currentPath + '../../public/indexchat.html';\n        localStorage.setItem('currentChatId', chatId);\n        updateMessageList(chatId);\n        window.location.href = newPath;\n      }\n    });\n    var lastMessageData = chatData.messages[chatData.messages.length - 1];\n    if (lastMessageData) {\n      var maxLength = 26;\n      var truncatedLastMessage = lastMessageData.text.substring(0, maxLength) + (lastMessageData.text.length > maxLength ? '...' : '');\n      _lastMessage.textContent = truncatedLastMessage;\n      lastMessageTime.textContent = lastMessageData.timestamp.split(' ')[1];\n      if (lastMessageData.image) {\n        lastMessageImage.src = lastMessageData.image;\n        lastMessageImage.style.display = 'block';\n      }\n    }\n  }\n};\ncreateChatForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var chatName = chatNameInput.value.trim();\n  if (chatName && avatarInput.files.length > 0) {\n    var chatData = {\n      id: generateChatId(),\n      name: chatName,\n      messages: []\n    };\n    localStorage.setItem(\"chat_\".concat(chatData.id), JSON.stringify(chatData));\n    var avatarFile = avatarInput.files[0];\n    var reader = new FileReader();\n    reader.onload = function (e) {\n      var avatarUrl = e.target.result;\n      localStorage.setItem(\"avatar_\".concat(chatData.id), avatarUrl);\n      if (chatData.id !== 'Александр-1493048375494-4pnq') {\n        avatarContainer.innerHTML = '';\n      }\n      var avatar = document.createElement('img');\n      avatar.className = 'avatar';\n      avatar.src = avatarUrl;\n      avatar.id = \"avatar-\".concat(chatData.id);\n      avatarContainer.appendChild(avatar);\n      localStorage.setItem('chatId', chatData.id);\n      addChatToList(chatData);\n      modal.style.display = 'none';\n      chatNameInput.value = '';\n    };\n    reader.readAsDataURL(avatarFile);\n  }\n});\navatarInput.addEventListener('change', function () {\n  var file = avatarInput.files[0];\n  if (file.type.match(/^image\\/(jpeg|png)$/i) && file.size <= 1024 * 1024) {\n    var reader = new FileReader();\n    reader.onload = function (e) {\n      var avatarUrl = e.target.result;\n      var avatar = document.createElement('img');\n      avatar.className = 'avatar';\n      avatar.src = avatarUrl;\n      avatarContainer.innerHTML = '';\n      avatarContainer.appendChild(avatar);\n    };\n    reader.readAsDataURL(file);\n  } else {\n    alert('Только JPEG, PNG или большой размер файла!');\n    avatarInput.value = '';\n  }\n});\nvar generateChatId = function generateChatId() {\n  if (localStorage.getItem('chatId') === 'Александр-1493048375494-4pnq') {\n    return 'Александр-1493048375494-4pnq';\n  }\n  var chatName = chatNameInput.value.trim();\n  var timestamp = Date.now();\n  var id;\n  do {\n    var randomNumber = Math.random().toString(36).substring(2, 6);\n    id = \"\".concat(chatName, \"-\").concat(timestamp, \"-\").concat(randomNumber);\n  } while (localStorage.getItem(\"chat_\".concat(id)));\n  return id;\n};\nwindow.onload = function () {\n  var chatIds = Object.keys(localStorage).filter(function (key) {\n    return key.startsWith('chat_');\n  });\n  chatIds.forEach(function (chatId) {\n    var chatData = JSON.parse(localStorage.getItem(chatId));\n    var existingChatListItem = chatList.querySelector(\".chat-list-item[data-chat-id=\\\"\".concat(chatData.id, \"\\\"]\"));\n    if (!existingChatListItem) {\n      addChatToList(chatData);\n    }\n  });\n  var currentChatId = localStorage.getItem('currentChatId');\n  updateMessageList(currentChatId);\n};\nvar updateMessageList = function updateMessageList(chatId) {\n  var chatData = JSON.parse(localStorage.getItem(\"chat_\".concat(chatId)));\n  if (chatData && chatData.messages) {\n    var messages = chatData.messages;\n    var chatListItem = chatList.querySelector(\".chat-list-item[data-chat-id=\\\"\".concat(chatId, \"\\\"]\"));\n    if (chatListItem) {\n      var messageList = chatListItem.querySelector('.message-list');\n      if (!messageList) {\n        document.createElement('ul'), _readOnlyError(\"messageList\");\n        messageList.className = 'message-list';\n        chatListItem.appendChild(messageList);\n      }\n      messageList.innerHTML = '';\n      messages.forEach(function (message) {\n        var messageItem = document.createElement('li');\n        messageItem.textContent = message;\n        messageList.appendChild(messageItem);\n      });\n    }\n  }\n};\nchatList.addEventListener('click', function (e) {\n  var chatId = e.target.dataset.chatId;\n  selectChat(chatId);\n});\nvar selectChat = function selectChat(chatId) {\n  localStorage.setItem('chatId', chatId);\n  var storedChatId = localStorage.getItem('chatId');\n  if (storedChatId === chatId) {\n    var chatStorageKey = \"chat_\".concat(chatId);\n    var chatData = JSON.parse(localStorage.getItem(chatStorageKey) || '{}');\n    var messages = chatData.messages || [];\n    var chatListItem = chatList.querySelector(\".chat-list-item[data-chat-id=\\\"\".concat(chatId, \"\\\"]\"));\n    if (chatListItem) {\n      var messageList = chatListItem.querySelector('.message-list');\n      if (messageList) {\n        messageList.innerHTML = '';\n        messages.forEach(function (message) {\n          var messageElement = document.createElement('div');\n          messageElement.textContent = message.text;\n          messageList.appendChild(messageElement);\n        });\n      }\n      displayChatInfo(chatId, chatData);\n    }\n  }\n};\nwindow.onbeforeunload = function (event) {\n  if (event.clientY > 0) {\n    var chatListItems = document.querySelectorAll('.chat-list-item');\n    chatListItems.forEach(function (item) {\n      var chatId = item.dataset.chatId;\n      var chatName = item.querySelector('.title').textContent;\n      var avatarUrl = item.querySelector('.avatar').src;\n      var chatData = {\n        id: chatId,\n        name: chatName,\n        avatarUrl: avatarUrl\n      };\n      localStorage.setItem(\"chatData_\".concat(chatId), JSON.stringify(chatData));\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/components/button/createchatbutton.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/pages/pagechatlist/chatinfo.js":
/*!********************************************!*\
  !*** ./src/pages/pagechatlist/chatinfo.js ***!
  \********************************************/
/*! exports provided: displayChatInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayChatInfo\", function() { return displayChatInfo; });\nvar displayChatInfo = function displayChatInfo() {\n  var chatId = 'undefined';\n  var messages = JSON.parse(localStorage.getItem(\"chat_\".concat(chatId)) || '{}').messages || [];\n  var lastMessage = getLastMessage(messages);\n  var chatTitle = getChatTitle(chatId);\n  var chatTitleElement = document.querySelector('.title');\n  var lastMessageElement = document.querySelector('.lastmessage');\n  var lastMessageTimeElement = document.querySelector('.time');\n  var lastMessageImageElement = document.querySelector('.lastmessagepage');\n  chatTitleElement.textContent = chatTitle;\n  var maxLength = 26;\n  var truncatedLastMessage = (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.text.substring(0, maxLength)) + ((lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.text.length) > maxLength ? '...' : '');\n  lastMessageElement.textContent = truncatedLastMessage;\n  if (lastMessage) {\n    lastMessageTimeElement.textContent = lastMessage.timestamp.split(' ')[1];\n    if (lastMessage.image && lastMessageImageElement) {\n      lastMessageImageElement.src = lastMessage.image;\n      lastMessageImageElement.style.display = 'block';\n    } else {\n      lastMessageImageElement.style.display = 'none';\n    }\n  } else {\n    lastMessageTimeElement.textContent = '';\n    lastMessageImageElement.style.display = 'none';\n  }\n};\nvar getLastMessage = function getLastMessage(messages) {\n  return messages[messages.length - 1];\n};\nvar getChatTitle = function getChatTitle(chatId) {\n  if (chatId === 'undefined') {\n    return 'Александр';\n  }\n};\n\n//# sourceURL=webpack:///./src/pages/pagechatlist/chatinfo.js?");

/***/ }),

/***/ "./src/pages/pagechatlist/chatlist.js":
/*!********************************************!*\
  !*** ./src/pages/pagechatlist/chatlist.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chatinfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatinfo.js */ \"./src/pages/pagechatlist/chatinfo.js\");\n\nvar chatListItems = document.querySelectorAll('.info-chat-container');\nchatListItems.forEach(function (item) {\n  item.querySelector('.avatar').id = 'avatar-Александр-1493048375494-4pnq';\n  item.querySelector('.lastmessagepage').id = 'last-message-image-Александр-1493048375494-4pnq';\n  item.querySelector('.title').id = 'chat-title-Александр-1493048375494-4pnq';\n  item.querySelector('.lastmessage').id = 'last-message-Александр-1493048375494-4pnq';\n  item.querySelector('.time').id = 'last-message-time-Александр-1493048375494-4pnq';\n});\nwindow.addEventListener('load', function () {\n  var chatId = localStorage.getItem('chatId');\n  Object(_chatinfo_js__WEBPACK_IMPORTED_MODULE_0__[\"displayChatInfo\"])(chatId);\n});\nvar chatContainer = document.querySelector('.info-chat-container[data-chat-id=\"Александр-1493048375494-4pnq\"]');\nif (chatContainer) {\n  chatContainer.addEventListener('click', function () {\n    var chatId = chatContainer.getAttribute('data-chat-id');\n    localStorage.setItem('chatId', chatId);\n    window.location.href = 'https://parzivallone.github.io/2024-2-VK-EDU-Frontend-A-Nesterenko/my-project/simple-chat/public/indexchat.html';\n  });\n}\n;\n\n//# sourceURL=webpack:///./src/pages/pagechatlist/chatlist.js?");

/***/ }),

/***/ "./src/pages/pagechatlist/header.js":
/*!******************************************!*\
  !*** ./src/pages/pagechatlist/header.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var searchButton = document.querySelector('.search-icon-chats');\nvar searchInput = document.createElement('input');\nsearchInput.type = 'text';\nsearchInput.placeholder = 'Посик чата...';\nsearchInput.className = 'search-input';\nsearchInput.style.display = 'none';\nsearchButton.parentNode.appendChild(searchInput);\nsearchButton.addEventListener('click', function () {\n  if (searchInput.style.display === 'none') {\n    searchInput.style.display = 'block';\n    searchInput.focus();\n  } else {\n    searchInput.style.display = 'none';\n  }\n});\nsearchInput.addEventListener('input', function () {\n  var chatTitles = document.querySelectorAll('.title');\n  var searchTerm = searchInput.value.trim().toLowerCase();\n  if (searchTerm === '') {\n    chatTitles.forEach(function (title) {\n      title.classList.remove('highlight');\n    });\n  } else {\n    chatTitles.forEach(function (title) {\n      var titleText = title.textContent.toLowerCase();\n      if (titleText.includes(searchTerm)) {\n        title.classList.add('highlight');\n      } else {\n        title.classList.remove('highlight');\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/pages/pagechatlist/header.js?");

/***/ })

/******/ });