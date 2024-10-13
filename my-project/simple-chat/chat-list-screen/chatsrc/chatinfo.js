export const displayChatInfo = () => {
  const chatId = localStorage.getItem('chatId');
  const messages = JSON.parse(localStorage.getItem(`messages_${chatId}`) || '[]');
  const lastMessage = getLastMessage(messages);
  const chatTitle = getChatTitle();

  const chatTitleElement = document.getElementById('chat-title');
  const lastMessageElement = document.getElementById('last-message');
  const lastMessageTimeElement = document.getElementById('last-message-time');
  const lastMessageImageElement = document.getElementById('last-message-image');

  chatTitleElement.textContent = chatTitle;
  const maxLength = 30;
  const truncatedLastMessage = lastMessage?.text.substring(0, maxLength) + 
  (lastMessage?.text.length > maxLength ? '...' : '');
  lastMessageElement.textContent = truncatedLastMessage;

  if (lastMessage) {
    lastMessageTimeElement.textContent = lastMessage.timestamp.split(' ')[1];

    if (lastMessage.image && lastMessageImageElement) {
      lastMessageImageElement.src = lastMessage.image;
      lastMessageImageElement.style.display = 'block';
    } else {
      lastMessageImageElement.style.display = 'none';
    }
  } else {
    lastMessageTimeElement.textContent = '';
    lastMessageImageElement.style.display = 'none';
  }
};

const getLastMessage = (messages) => {
  return messages[messages.length - 1];
};

const getChatTitle = () => {
  return localStorage.getItem('chatTitle');
};