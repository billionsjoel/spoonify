//  js entry file
import './modules/assets/sass/style.scss';
import { displayPopup } from './modules/models/controllers.js';

const showPopup = document.querySelectorAll('.btn');

showPopup.forEach((btn) => {
  btn.addEventListener('click', () => {
    displayPopup();
  });
});
