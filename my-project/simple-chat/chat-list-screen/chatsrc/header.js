const searchButton = document.querySelector('.search-icon-chats');
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Посик сообщения...';
searchInput.className = 'search-input';
searchInput.style.display = 'none';

searchButton.parentNode.appendChild(searchInput);

searchButton.addEventListener('click', () => {
  if (searchInput.style.display === 'none') {
    searchInput.style.display = 'block';
    searchInput.focus();
  } else {
    searchInput.style.display = 'none';
  }
});

searchInput.addEventListener('input', () => {
  const chatTitles = document.querySelectorAll('#chat-title');
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm === '') {
    chatTitles.forEach((title) => {
      title.classList.remove('highlight');
    });
  } else {
    chatTitles.forEach((title) => {
      const titleText = title.textContent.toLowerCase();
      if (titleText.includes(searchTerm)) {
        title.classList.add('highlight');
      } else {
        title.classList.remove('highlight');
      }
    });
  }
});