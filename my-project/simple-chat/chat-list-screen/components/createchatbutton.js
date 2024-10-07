const createChatButton = document.getElementById('create-chat-button');
const chatList = document.getElementById('chat-list');

if (createChatButton && chatList) {
  createChatButton.addEventListener('click', () => {
    let chats = JSON.parse(localStorage.getItem('chats')) || [];

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Enter chat title';

    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Create Chat';

    const chatTitleForm = document.createElement('div');
    chatTitleForm.appendChild(titleInput);
    chatTitleForm.appendChild(confirmButton);

    chatList.appendChild(chatTitleForm);

    confirmButton.addEventListener('click', () => {
      const title = titleInput.value.trim();
      if (title) {
        const newChat = {
          id: `chat-${chats.length + 1}`,
          title,
          messages: []
        };
        chats.push(newChat);
        localStorage.setItem('chats', JSON.stringify(chats));

        chatList.innerHTML = '';
        chats.forEach(chat => {
          const chatListItem = document.createElement('div');
          chatListItem.className = 'chat';
          chatListItem.textContent = chat.title;
          chatList.appendChild(chatListItem);
        });
      }
    });
  });
};