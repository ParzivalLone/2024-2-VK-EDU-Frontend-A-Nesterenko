import './index.css';
const fromInput = document.querySelector('.form-input');
const sendButton = document.querySelector('.send-button');
const messageListUl = document.querySelector('#message-list-ul');

loadMessagesFromStorage();

fromInput.addEventListener('input', () => {
    if (fromInput.value.trim() !== '') {
        sendButton.style.display = 'block';
    } else {
        sendButton.style.display = 'none';
    }
    fromInput.size = fromInput.value.length + 1;
});

fromInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && fromInput.value.trim() !== '') {
        e.preventDefault();
        sendMessage(e);
        fromInput.value = '';
        fromInput.placeholder = 'Введите сообщение';
    }
});

sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (fromInput.value.trim() !== '') {
        sendMessage(e);
        fromInput.value = '';
        fromInput.placeholder = 'Введите сообщение';
    }
});

function sendMessage(event) {
    console.log('Message sent:', fromInput.value);
    const messageText = fromInput.value.trim();
    fromInput.value = '';
    fromInput.placeholder = 'Введите сообщение';

    const message = {
        text: messageText,
        sender: 'Александр',
        timestamp: new Date().toLocaleString().slice(0, -3)
    };

    addMessageToList(message);
    
    saveMessageToStorage(message);

    const newMessageElement = messageListUl.lastChild;

    newMessageElement.scrollIntoView({ behavior: 'smooth' });
    
    sendButton.style.display = 'none';
}

function saveMessageToStorage(message) {
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}

function loadMessagesFromStorage() {
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.forEach((message) => {
        addMessageToList(message);
    });
}

function addMessageToList(message) {
    const messageDiv = document.createElement('li');
    messageDiv.className = 'message-bubble';

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

    messageDiv.appendChild(messageSpan);
    messageDiv.appendChild(metadataDiv);
    messageListUl.appendChild(messageDiv);

    messageListUl.offsetHeight;
}