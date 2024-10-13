import { displayChatInfo } from './chatinfo.js';

window.addEventListener('load', displayChatInfo);

const chatItem = document.getElementById('chat-list-ul');
if (chatItem) {
  chatItem.addEventListener('click', () => {
    window.location.href = "chat-list-screen/components/indexchat.html";
    displayChatInfo();
  });
}