const backButton = document.querySelector('.back-button');
const fromInput = document.querySelector('.form-input');
const sendButton = document.querySelector('.send-button');
const messageListUl = document.querySelector('#message-list-ul');
const searchButton = document.querySelector('.search-icon');
const searchInput = document.createElement('input');
const fileButton = document.querySelector('.file-button');
const fileInput = document.createElement('input');
const imagePreviewContainer = document.querySelector('.image-preview-container');
const imagePreview = document.querySelector('.image-preview-container img');
const closeIcon = document.querySelector('.close-icon');

searchInput.type = 'text';
searchInput.placeholder = 'Посик сообщения...';
searchInput.className = 'search-input';
fileInput.type = 'file';
fileInput.accept = 'image/*';

closeIcon.addEventListener('click', () => {
    imagePreview.src = '';
    imagePreviewContainer.style.display = 'none';
    fileInput.value = '';
});

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file.type.match(/^image\/(jpeg|png)$/i)) {
    const reader = new FileReader();
    reader.onload = () => {
      imagePreview.src = reader.result;
      imagePreviewContainer.style.display = 'block';
      closeIcon.style.display = 'block';
    };
    reader.readAsDataURL(file);
  } else {
    alert('Только JPEG, PNG');
    fileInput.value = '';
  }
});

imagePreview.onload = function() {
    imagePreviewContainer.classList.add('has-image');
};
  
imagePreview.onremove = function() {
    imagePreviewContainer.classList.remove('has-image');
};

fileButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (fileInput.parentNode === null) {
    fileButton.parentNode.appendChild(fileInput);
    fileInput.click();
  } else {
    fileInput.parentNode.removeChild(fileInput);
  }
});

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const imagePreview = document.getElementById('image-preview');
    imagePreview.src = URL.createObjectURL(file);
    imagePreview.style.display = 'block';
});

searchButton.addEventListener('click', () => {
  if (searchInput.parentNode === null) {
    searchButton.parentNode.appendChild(searchInput);
    searchInput.focus();
  } else {
    searchInput.parentNode.removeChild(searchInput);
  }
});

searchInput.addEventListener('input', () => {
  const messages = messageListUl.children;
  const searchTerm = searchInput.value.toLowerCase();

  for (let i = 0; i < messages.length; i++) {
    const messageText = messages[i].querySelector('.message-text').textContent.toLowerCase();
    if (messageText.includes(searchTerm)) {
      messages[i].style.display = 'block';
    } else {
      messages[i].style.display = 'none';
    }
  }
});

fromInput.addEventListener('input', () => {
  fromInput.size = fromInput.value.length + 1;
});

fromInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && (fromInput.value.trim() || fileInput.files.length)) {
    e.preventDefault();
    sendMessage(e);
    fromInput.value = '';
    if (fileInput.files.length) {
      fileInput.value = '';
      imagePreview.src = '';
      imagePreviewContainer.style.display = 'none';
      closeIcon.style.display = 'none';
    }
  }
});

sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (fromInput.value.trim() || fileInput.files.length) {
    sendMessage(e);
    fromInput.value = '';
    if (fileInput.files.length) {
      fileInput.value = '';
      imagePreview.src = '';
      imagePreviewContainer.style.display = 'none';
      closeIcon.style.display = 'none';
    }
  }
});

backButton.addEventListener('click', () => {
  if (history.length > 1) {
    history.back();
  }
});

const sendMessage = () => {
  const messageText = fromInput.value.trim();
  const file = fileInput.files[0];
  const chatId = localStorage.getItem('chatId');

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const message = {
        id: Date.now(),
        text: messageText,
        image: e.target.result,
        sender: 'Александр',
        timestamp: new Date().toLocaleString().slice(0, -3),
        sent: true,
        read: true,
        chatId: chatId
      };

      const newMessageElement = addMessageToList(message);
      newMessageElement.scrollIntoView(true);

      const messages = JSON.parse(localStorage.getItem(`messages_${chatId}`) || '[]');
      addMessageToArray(messages, message);
      saveMessageToStorage(messages);
    };
    reader.readAsDataURL(file);
  } else if (messageText !== '') {
    const message = {
      id: Date.now(),
      text: messageText,
      sender: 'Александр',
      timestamp: new Date().toLocaleString().slice(0, -3),
      sent: true,
      read: true,
      chatId: chatId
    };

    const newMessageElement = addMessageToList(message);
    newMessageElement.scrollIntoView(true);

    const messages = JSON.parse(localStorage.getItem(`messages_${chatId}`) || '[]');
    addMessageToArray(messages, message);
    saveMessageToStorage(messages);
  }
};

const addMessageToList = (message) => {
  const messageListItem = document.createElement('li');
  messageListItem.className = 'message-bubble';

  const messageSpan = document.createElement('span');
  messageSpan.textContent = message.text;
  messageSpan.className = 'message-text';

  if (message.image) {
    const image = document.createElement('img');
    image.src = message.image;
    image.className = 'message-image';
    messageListItem.appendChild(image);
  }

  const metadataDiv = document.createElement('div');
  metadataDiv.className = 'metadata';

  const senderSpan = document.createElement('span');
  senderSpan.textContent = message.sender;
  senderSpan.className = 'sender';

  const timestampSpan = document.createElement('span');
  timestampSpan.textContent = message.timestamp;
  timestampSpan.className = 'timestamp';

  const statusIcon = document.createElement('span');

  if (message.sent) {
    statusIcon.className = 'message-status-sent material-symbols-outlined';
    statusIcon.textContent = 'check';
  }

  if (message.read) {
    statusIcon.className = 'message-status-read material-symbols-outlined';
    statusIcon.textContent = 'done_all';
  }

  metadataDiv.appendChild(senderSpan);
  metadataDiv.appendChild(timestampSpan);
  metadataDiv.appendChild(statusIcon);

  messageListItem.appendChild(messageSpan);
  messageListItem.appendChild(metadataDiv);
  messageListUl.appendChild(messageListItem);

  return messageListItem;
};

const addMessageToArray = (messages, message) => {
  messages.push(message);
  return messages;
};

const saveMessageToStorage = (messages) => {
  const chatId = localStorage.getItem('chatId');
  localStorage.setItem(`messages_${chatId}`, JSON.stringify(messages));
};

const loadMessagesFromStorage = () => {
  const chatId = localStorage.getItem('chatId');
  const messages = JSON.parse(localStorage.getItem(`messages_${chatId}`) || '[]');
  const messageFragment = document.createDocumentFragment();

  messages.forEach((message) => {
    message.sent = true;
    message.read = true;
    const messageElement = addMessageToList(message);
    messageFragment.appendChild(messageElement);
  });

  messageListUl.appendChild(messageFragment);
};

const setChatTitle = (title, chatId) => {
  localStorage.setItem('chatTitle', title);
  localStorage.setItem('chatId', chatId);
  document.getElementById('h1').textContent = title;
};

setChatTitle('Александр', 'alexander-chat-id');

const updateMessageList = (chatId) => {
  const messagesKey = `messages_${chatId}`;
  const messages = JSON.parse(localStorage.getItem(messagesKey) || '[]');
  messageListUl.innerHTML = '';
  messages.forEach((message) => {
    const messageListItem = document.createElement('li');
    messageListItem.textContent = message.text;
    messageListUl.appendChild(messageListItem);
  });
};

loadMessagesFromStorage();