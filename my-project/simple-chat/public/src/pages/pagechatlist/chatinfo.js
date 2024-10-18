export const displayChatInfo = () => {
  const chatId = 'undefined';
  const messages = JSON.parse(localStorage.getItem(`chat_${chatId}`) || '{}').messages || [];
  const lastMessage = getLastMessage(messages);
  const chatTitle = getChatTitle(chatId);
 

  const chatTitleElement = document.querySelector('.title');
  const lastMessageElement = document.querySelector('.lastmessage');
  const lastMessageTimeElement = document.querySelector('.time');
  const lastMessageImageElement = document.querySelector('.lastmessagepage');
  

  chatTitleElement.textContent = chatTitle;
  const maxLength = 26;
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

const getChatTitle = (chatId) => {
  if (chatId === 'undefined') {
    return 'Александр';
  }
};