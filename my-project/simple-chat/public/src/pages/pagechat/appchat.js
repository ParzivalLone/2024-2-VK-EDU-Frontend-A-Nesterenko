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
  const chatId = localStorage.getItem('chatId');
  const messageText = fromInput.value.trim();
  const file = fileInput.files[0];
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

      const chatStorageKey = `chat_${chatId}`;
      const chatData = JSON.parse(localStorage.getItem(chatStorageKey) || '{}');
      if (!chatData.messages) {
        chatData.messages = [];
      }
      chatData.messages.push(message);
      localStorage.setItem(chatStorageKey, JSON.stringify(chatData));
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

    const chatStorageKey = `chat_${chatId}`;
    const chatData = JSON.parse(localStorage.getItem(chatStorageKey) || '{}');
    if (!chatData.messages) {
      chatData.messages = [];
    }
    chatData.messages.push(message);
    localStorage.setItem(chatStorageKey, JSON.stringify(chatData));
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

const saveMessageToStorage = (message, chatId) => {
  const chatStorageKey = `chat_${chatId}`;
  const chatData = JSON.parse(localStorage.getItem(chatStorageKey) || '{}');
  if (!chatData.messages) {
    chatData.messages = [];
  }
  chatData.messages.push(message);
  localStorage.setItem(chatStorageKey, JSON.stringify(chatData));
  setChatTitle(chatData.name);
  const avatarUrl = localStorage.getItem(`avatar_${chatId}`);
  const avatar = document.querySelector('.avatar');
  if (avatar) {
    avatar.src = avatarUrl;
  }
};

const loadMessagesFromStorage = (chatId) => {
  if (chatId) {
    const chatStorageKey = `chat_${chatId}`;
    const storedChatId = localStorage.getItem('chatId');
    if (storedChatId === chatId) {
      if (localStorage.getItem(chatStorageKey)) {
        const chatData = JSON.parse(localStorage.getItem(chatStorageKey));
        const chatName = chatData?.name;
        if (chatName) {
          setChatTitle(chatName);
        } else {
          const defaultTitle = document.getElementById('h1').textContent;
          setChatTitle(defaultTitle);
        }
        const messages = chatData.messages || [];
        const messageFragment = document.createDocumentFragment();

        messages.forEach((message) => {
          message.sent = true;
          message.read = true;
          const messageElement = addMessageToList(message);
          messageFragment.appendChild(messageElement);
        });

        messageListUl.appendChild(messageFragment);
      }
    }
  }
};

const setChatTitle = (title) => {
  if (title !== null && title !== undefined) {
    localStorage.setItem('chatTitle', title);
    document.getElementById('h1').textContent = title;
  } else {
    const defaultTitle = document.getElementById('h1').textContent;
    localStorage.setItem('chatTitle', defaultTitle);
    document.getElementById('h1').textContent = defaultTitle;
  }
};

const chatId = localStorage.getItem('chatId');
if (chatId) {
  const storedChatId = localStorage.getItem('chatId');
  if (storedChatId === chatId) {
    loadMessagesFromStorage(chatId);
    const chatData = JSON.parse(localStorage.getItem(`chat_${chatId}`));
    if (chatData && chatData.name) {
      setChatTitle(chatData.name);
    } else {
      const defaultTitle = document.getElementById('h1').textContent;
      setChatTitle(defaultTitle);
    }
    const avatarUrl = localStorage.getItem(`avatar_${chatId}`);
    if (avatarUrl) {
      const avatar = document.querySelector('.avatar');
      if (avatar) {
        avatar.src = avatarUrl;
      }
    } else {
      const defaultAvatar = document.querySelector('.avatar').src;
      if (defaultAvatar) {
        document.querySelector('.avatar').src = defaultAvatar;
      }
    }
  }
};