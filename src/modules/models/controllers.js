import commentPopup from './comentPopup.js';

const header = document.querySelector('#header');
const main = document.querySelector('#main');
const footer = document.querySelector('#footer');

export const displayPopup = () => {
  header.style.display = 'none';
  main.style.display = 'none';
  footer.style.display = 'none';
  commentPopup.style.display = 'block';
};

