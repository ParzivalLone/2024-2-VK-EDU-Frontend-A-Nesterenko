import { displayChatInfo } from './chatinfo.js';

const chatListItems = document.querySelectorAll('.info-chat-container');

chatListItems.forEach((item) => {
  item.querySelector('.avatar').id = 'avatar-Александр-1493048375494-4pnq';
  item.querySelector('.lastmessagepage').id = 'last-message-image-Александр-1493048375494-4pnq';
  item.querySelector('.title').id = 'chat-title-Александр-1493048375494-4pnq';
  item.querySelector('.lastmessage').id = 'last-message-Александр-1493048375494-4pnq';
  item.querySelector('.time').id = 'last-message-time-Александр-1493048375494-4pnq';
});

window.addEventListener('load', () => {
  const chatId = localStorage.getItem('chatId');
  displayChatInfo(chatId);
});

const chatContainer = document.querySelector('.info-chat-container[data-chat-id="Александр-1493048375494-4pnq"]');
if (chatContainer) {
  chatContainer.addEventListener('click', () => {
    const chatId = chatContainer.getAttribute('data-chat-id');
    localStorage.setItem('chatId', chatId);
    window.location.href = '../public/indexchat.html';
  });
}