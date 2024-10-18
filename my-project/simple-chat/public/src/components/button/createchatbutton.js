const createChatButton = document.querySelector('.create-chat-button');
const modal = document.getElementById('create-chat-modal');
const closeButton = document.querySelector('.close');
const chatNameInput = document.getElementById('chat-name');
const createChatForm = document.getElementById('create-chat-form');
const chatList = document.querySelector('#chat-list-ul');
const avatarInput = document.createElement('input');
const avatarContainer = document.createElement('div');

avatarInput.type = 'file';
avatarInput.accept = 'image/*';
avatarContainer.className = 'avatar-container';
modal.querySelector('.modal-content').appendChild(avatarInput);
modal.querySelector('.modal-content').appendChild(avatarContainer);

createChatButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

const addChatToList = (chatData) => {
  const existingChatListItem = chatList.querySelector(`.chat-list-item[data-chat-id="${chatData.id}"]`);
  if (existingChatListItem) {
    existingChatListItem.querySelector(`.title-${chatData.id}`).textContent = chatData.name;
    existingChatListItem.querySelector(`.last-message-${chatData.id}`).textContent = '';
    existingChatListItem.querySelector(`.last-message-image-${chatData.id}`).style.display = 'none';
    existingChatListItem.querySelector(`.time-${chatData.id}`).textContent = '';
    
    const lastMessage = chatData.messages[chatData.messages.length - 1];
    if (lastMessage) {
      existingChatListItem.querySelector(`.last-message-${chatData.id}`).textContent = lastMessage.text;
      existingChatListItem.querySelector(`.time-${chatData.id}`).textContent = lastMessage.timestamp.split(' ')[1];
      if (lastMessage.image) {
        existingChatListItem.querySelector(`.last-message-image-${chatData.id}`).src = lastMessage.image;
        existingChatListItem.querySelector(`.last-message-image-${chatData.id}`).style.display = 'block';
      }
    }
  } else {
    if (!chatData.id) {
      return;
    }
    const chatListItem = document.createElement('li');
    chatListItem.className = 'info-chat-container';
    chatListItem.dataset.chatId = chatData.id;

    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = localStorage.getItem(`avatar_${chatData.id}`);
    avatar.dataset.chatId = chatData.id;

    const lastMessageImage = document.createElement('img');
    lastMessageImage.classList.add('lastmessagepage');
    lastMessageImage.id = `last-message-image-${chatData.id}`;
    lastMessageImage.dataset.chatId = chatData.id;

    const chatTitle = document.createElement('h3');
    chatTitle.classList.add('title');
    chatTitle.id = `chat-title-${chatData.id}`;
    chatTitle.textContent = chatData.name;
    chatTitle.dataset.chatId = chatData.id;

    const lastMessage = document.createElement('p');
    lastMessage.classList.add('lastmessage');
    lastMessage.id = `last-message-${chatData.id}`;
    lastMessage.dataset.chatId = chatData.id;

    const lastMessageTime = document.createElement('p');
    lastMessageTime.classList.add('time');
    lastMessageTime.id = `last-message-time-${chatData.id}`;
    lastMessageTime.dataset.chatId = chatData.id;

    const readIndicator = document.createElement('span');
    readIndicator.classList.add('read-indicator');
    readIndicator.dataset.chatId = chatData.id;

    const readIndicatorIcon = document.createElement('span');
    readIndicatorIcon.classList.add('material-symbols-outlined');
    readIndicatorIcon.textContent = 'done_all';
    readIndicatorIcon.dataset.chatId = chatData.id;

    readIndicator.appendChild(readIndicatorIcon);
    chatListItem.appendChild(avatar);
    chatListItem.appendChild(lastMessageImage);
    chatListItem.appendChild(chatTitle);
    chatListItem.appendChild(lastMessage);
    chatListItem.appendChild(lastMessageTime);
    chatListItem.appendChild(readIndicator);
    chatList.appendChild(chatListItem);

    chatListItem.addEventListener('click', (event) => {
      if (event.target.closest('.info-chat-container')) {
        const chatId = event.target.closest('.info-chat-container').dataset.chatId;
        const currentPath = window.location.pathname;
        const newPath = currentPath + '../../public/indexchat.html';
        localStorage.setItem('currentChatId', chatId);
        updateMessageList(chatId);
        window.location.href = newPath;
      }
    });

    const lastMessageData = chatData.messages[chatData.messages.length - 1];
    if (lastMessageData) {
      const maxLength = 26;
      const truncatedLastMessage = lastMessageData.text.substring(0, maxLength) + 
      (lastMessageData.text.length > maxLength ? '...' : '');
      lastMessage.textContent = truncatedLastMessage;
      lastMessageTime.textContent = lastMessageData.timestamp.split(' ')[1];
      if (lastMessageData.image) {
        lastMessageImage.src = lastMessageData.image;
        lastMessageImage.style.display = 'block';
      }
    }
  }
};

createChatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const chatName = chatNameInput.value.trim();
  if (chatName && avatarInput.files.length > 0) {
    const chatData = { id: generateChatId(), name: chatName, messages: [] };
    localStorage.setItem(`chat_${chatData.id}`, JSON.stringify(chatData));
    const avatarFile = avatarInput.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const avatarUrl = e.target.result;
      localStorage.setItem(`avatar_${chatData.id}`, avatarUrl);

      if (chatData.id !== 'Александр-1493048375494-4pnq') {
        avatarContainer.innerHTML = '';
      }
      const avatar = document.createElement('img');
      avatar.className = 'avatar';
      avatar.src = avatarUrl;
      avatar.id = `avatar-${chatData.id}`;
      avatarContainer.appendChild(avatar);

      localStorage.setItem('chatId', chatData.id);

      addChatToList(chatData);

      modal.style.display = 'none';
      chatNameInput.value = '';
    };
    reader.readAsDataURL(avatarFile);
  }
});

avatarInput.addEventListener('change', () => {
  const file = avatarInput.files[0];
  if (file.type.match(/^image\/(jpeg|png)$/i)&& file.size <= 1024 * 1024) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const avatarUrl = e.target.result;
      const avatar = document.createElement('img');
      avatar.className = 'avatar';
      avatar.src = avatarUrl;
      avatarContainer.innerHTML = '';
      avatarContainer.appendChild(avatar);
    };
    reader.readAsDataURL(file);
  } else {
    alert('Только JPEG, PNG или большой размер файла!');
    avatarInput.value = '';
  }
});

const generateChatId = () => {
  if (localStorage.getItem('chatId') === 'Александр-1493048375494-4pnq') {
    return 'Александр-1493048375494-4pnq';
  }
  const chatName = chatNameInput.value.trim();
  const timestamp = Date.now();
  let id;
  do {
    const randomNumber = Math.random().toString(36).substring(2, 6);
    id = `${chatName}-${timestamp}-${randomNumber}`;
  } while (localStorage.getItem(`chat_${id}`));
  return id;
};

window.onload = () => {
  const chatIds = Object.keys(localStorage)
    .filter(key => key.startsWith('chat_'));
  chatIds.forEach(chatId => {
    const chatData = JSON.parse(localStorage.getItem(chatId));
    const existingChatListItem = chatList.querySelector(
      `.chat-list-item[data-chat-id="${chatData.id}"]`);
    if (!existingChatListItem) {
      addChatToList(chatData);
    }
  });
  const currentChatId = localStorage.getItem('currentChatId');
  updateMessageList(currentChatId);
};

const updateMessageList = (chatId) => {
  const chatData = JSON.parse(localStorage.getItem(`chat_${chatId}`));
  if (chatData && chatData.messages) {
    const messages = chatData.messages;
    const chatListItem = chatList.querySelector(`.chat-list-item[data-chat-id="${chatId}"]`);
    if (chatListItem) {
      const messageList = chatListItem.querySelector('.message-list');
      if (!messageList) {
        messageList = document.createElement('ul');
        messageList.className = 'message-list';
        chatListItem.appendChild(messageList);
      }
      messageList.innerHTML = '';
      messages.forEach((message) => {
        const messageItem = document.createElement('li');
        messageItem.textContent = message;
        messageList.appendChild(messageItem);
      });
    }
  }
};

chatList.addEventListener('click', (e) => {
  const chatId = e.target.dataset.chatId;
  selectChat(chatId);
});

const selectChat = (chatId) => {
  localStorage.setItem('chatId', chatId);
  const storedChatId = localStorage.getItem('chatId');
  if (storedChatId === chatId) {
    const chatStorageKey = `chat_${chatId}`;
    const chatData = JSON.parse(localStorage.getItem(chatStorageKey) || '{}');
    const messages = chatData.messages || [];
    const chatListItem = chatList.querySelector(`.chat-list-item[data-chat-id="${chatId}"]`);
    if (chatListItem) {
      const messageList = chatListItem.querySelector('.message-list');
      if (messageList) {
        messageList.innerHTML = '';
        messages.forEach((message) => {
          const messageElement = document.createElement('div');
          messageElement.textContent = message.text;
          messageList.appendChild(messageElement);
        });
      }
      displayChatInfo(chatId, chatData);
    }
  }
};

window.onbeforeunload = event => {
  if (event.clientY > 0) {
    const chatListItems = document.querySelectorAll('.chat-list-item');
    chatListItems.forEach(item => {
      const chatId = item.dataset.chatId;
      const chatName = item.querySelector('.title').textContent;
      const avatarUrl = item.querySelector('.avatar').src;
      const chatData = { id: chatId, name: chatName, avatarUrl: avatarUrl };
      localStorage.setItem(`chatData_${chatId}`, JSON.stringify(chatData));
    });
  }
};