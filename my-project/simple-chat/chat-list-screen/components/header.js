const header = document.getElementById('header');

if (header) {
  const burgerButton = header.querySelector('.burger-button');
  if (burgerButton) {
    burgerButton.addEventListener('click', () => {
      const menu = header.querySelector('.menu');
      if (menu) {
        menu.classList.toggle('visible');
      }
    });
  }

  const searchIcon = header.querySelector('.search-icon');
  if (searchIcon) {
    searchIcon.addEventListener('click', () => {
      const searchForm = header.querySelector('.search-form');
      if (searchForm) {
        searchForm.classList.toggle('visible');
      }
    });
  }
};