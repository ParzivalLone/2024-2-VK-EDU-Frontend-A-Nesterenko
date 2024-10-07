const getLastMessage = (messages) => {
  return messages[messages.length - 1];
};

const getChatTitle = () => {
  return localStorage.getItem('chatTitle');
};

const displayChatInfo = () => {
  const messages = JSON.parse(localStorage.getItem('messages') || '[]');
  const lastMessage = getLastMessage(messages);
  const chatTitle = getChatTitle();

  const chatTitleElement = document.getElementById('chat-title');
  const lastMessageElement = document.getElementById('last-message');
  const lastMessageTimeElement = document.getElementById('last-message-time');

  chatTitleElement.textContent = chatTitle;
  const maxLength = 30;
  const truncatedLastMessage = lastMessage?.text.substring(0, maxLength) + 
  (lastMessage?.text.length > maxLength ? '...' : '');
  lastMessageElement.textContent = truncatedLastMessage;

  lastMessageTimeElement.textContent = lastMessage.timestamp.split(' ')[1];
};

window.addEventListener('load', displayChatInfo);

const chatItem = document.getElementById('chatListUl');
if (chatItem) {
chatItem.addEventListener('click', () => {
  window.location.href = './chat-list-screen/chatsrc/indexchat.html';
  displayChatInfo();
});
};