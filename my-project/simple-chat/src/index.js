import './index.css';
const fromInput = document.querySelector('.form-input');
const sendButton = document.querySelector('.send-button');
const messageListUl = document.querySelector('#message-list-ul');

fromInput.addEventListener('input', () => {
    fromInput.size = fromInput.value.length + 1;
});

fromInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && fromInput.value.trim() !== '') {
        e.preventDefault();
        sendMessage(e);
        fromInput.value = '';
    }
});

sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (fromInput.value.trim() !== '') {
        sendMessage(e);
        fromInput.value = '';
    }
});

const sendMessage = (event) => {
    const messageText = fromInput.value.trim();
    fromInput.value = '';
    fromInput.placeholder = 'Введите сообщение';

    const message = {
        text: messageText,
        sender: 'Александр',
        timestamp: new Date().toLocaleString().slice(0, -3)
    };

    const newMessageElement = addMessageToList(message)
    newMessageElement.scrollIntoView(true);

    saveMessageToStorage(message);
    
};

const saveMessageToStorage = (message) => {
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
};

const addMessageToList = (message) => {
    const messageListItem = document.createElement('li');
    messageListItem.className = 'message-bubble';

    const messageSpan = document.createElement('span');
    messageSpan.textContent = message.text;
    messageSpan.className = 'message-text';

    const metadataDiv = document.createElement('div');
    metadataDiv.className = 'metadata';

    const senderSpan = document.createElement('span');
    senderSpan.textContent = message.sender;
    senderSpan.className = 'sender';

    const timestampSpan = document.createElement('span');
    timestampSpan.textContent = message.timestamp;
    timestampSpan.className = 'timestamp';

    metadataDiv.appendChild(senderSpan);
    metadataDiv.appendChild(timestampSpan);

    messageListItem.appendChild(messageSpan);
    messageListItem.appendChild(metadataDiv);
    messageListUl.appendChild(messageListItem);

    return messageListItem;

}

const loadMessagesFromStorage = () => {
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    const messageContainer = document.createElement('div');

    messages.forEach((message) => {
        const messageElement = addMessageToList(message);
        messageContainer.appendChild(messageElement);
    });
    messageListUl.appendChild(messageContainer);
};

loadMessagesFromStorage();