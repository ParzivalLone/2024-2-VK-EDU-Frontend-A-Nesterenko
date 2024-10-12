const createChatButton = document.querySelector('.create-chat-button');
const modal = document.getElementById('create-chat-modal');
const closeButton = document.querySelector('.close');
const chatNameInput = document.getElementById('chat-name');
const createChatForm = document.getElementById('create-chat-form');
const mainContainer = document.querySelector('.main-container');
const chatList = document.querySelector('#chat-list-ul');

const avatarInput = document.createElement('input');
avatarInput.type = 'file';
avatarInput.accept = 'image/*';
const avatarContainer = document.createElement('div');
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
    existingChatListItem.querySelector('.title').textContent = chatData.name;
    existingChatListItem.querySelector('.last-message').textContent = '';
    existingChatListItem.querySelector('.time').textContent = '';
    existingChatListItem.querySelector('.last-message-image').style.display = 'none';
  } else {
    const chatListItem = document.createElement('li');
    chatListItem.className = 'info-chat-container';
    chatListItem.dataset.chatId = chatData.id;

    const avatar = document.createElement('img');
    avatar.className = 'avatar';
    avatar.src = chatData.avatarUrl;

    const lastMessageImage = document.createElement('img');
    lastMessageImage.className = 'lastmessagepage';
    lastMessageImage.id = 'last-message-image';

    const chatTitle = document.createElement('h3');
    chatTitle.className = 'title';
    chatTitle.id = 'chat-title';
    chatTitle.textContent = chatData.name;

    const lastMessage = document.createElement('p');
    lastMessage.className = 'last-message';
    lastMessage.id = 'last-message';

    const lastMessageTime = document.createElement('p');
    lastMessageTime.className = 'time';
    lastMessageTime.id = 'last-message-time';

    const readIndicator = document.createElement('span');
    readIndicator.className = 'read-indicator';
    const readIndicatorIcon = document.createElement('span');
    readIndicatorIcon.className = 'material-symbols-outlined';
    readIndicatorIcon.textContent = 'done_all';
    readIndicator.appendChild(readIndicatorIcon);

    chatListItem.appendChild(avatar);
    chatListItem.appendChild(lastMessageImage);
    chatListItem.appendChild(chatTitle);
    chatListItem.appendChild(lastMessage);
    chatListItem.appendChild(lastMessageTime);
    chatListItem.appendChild(readIndicator);

    chatList.appendChild(chatListItem);

    chatListItem.addEventListener('click', () => {
      const chatId = chatListItem.dataset.chatId;
      localStorage.setItem('chatId', chatId);
      window.location.href = `../chat-list-screen/components/indexchat.html?chatId=${chatId}`;
      displayChatInfo(chatId);
    });

    localStorage.setItem(`chatData_${chatData.id}`, JSON.stringify(chatData));
  }
};

createChatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const chatName = chatNameInput.value.trim();
  if (chatName) {
    const newChatId = generateChatId();
    const avatarFile = avatarInput.files[0];
    const chatData = { id: newChatId, name: chatNameInput.value.trim(), messages: [] };
    localStorage.setItem(`chatData_${newChatId}`, JSON.stringify(chatData));
    if (avatarFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const avatarUrl = e.target.result;
        const chatData = {
          id: newChatId,
          name: chatName,
          avatarUrl: avatarUrl,
          lastMessage: {}
        };

        avatarContainer.innerHTML = '';
        const avatar = document.createElement('img');
        avatar.className = 'avatar';
        avatar.src = avatarUrl;
        avatar.id = `avatar-${newChatId}`;
        avatarContainer.appendChild(avatar);

        localStorage.setItem('chatId', newChatId);

        addChatToList(chatData);

        modal.style.display = 'none';
        chatNameInput.value = '';
      };
      reader.readAsDataURL(avatarFile);
    }
  }
});

avatarInput.addEventListener('change', () => {
  const file = avatarInput.files[0];
  if (file.type.match(/^image\/(jpeg|png)$/i)) {
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
    alert('Только JPEG, PNG');
    avatarInput.value = '';
  }
});

const generateChatId = () => {
  let id;
  do {
    id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  } while (localStorage.getItem(`chatData_${id}`));
  return id;
};

window.onload = function() {
  const chatIds = Object.keys(localStorage).filter(key => key.startsWith('chatData_'));
  chatIds.forEach(chatId => {
    const chatData = JSON.parse(localStorage.getItem(chatId));
    const existingChatListItem = chatList.querySelector(`.chat-list-item[data-chat-id="${chatData.id}"]`);
    if (!existingChatListItem) {
      addChatToList(chatData);
    }
  });
};

window.onbeforeunload = function(event) {
  if (event.clientY > 0) {
    const chatListItems = document.querySelectorAll('.chat-list-item');
    chatListItems.forEach((item) => {
      const chatId = item.dataset.chatId;
      const chatName = item.querySelector('.title').textContent;
      const avatarUrl = item.querySelector('.avatar').src;
      const chatData = { id: chatId, name: chatName, avatarUrl: avatarUrl };
      localStorage.setItem(`chatData_${chatId}`, JSON.stringify(chatData));
    });
  }
};