//  js entry file
import './modules/assets/sass/style.scss';
import { displayPopup, closePopup } from './modules/models/controllers.js';

const showPopup = document.querySelectorAll('.btn');
const hidePopup = document.querySelectorAll('.close-btn');

showPopup.forEach((btn) => {
  btn.addEventListener('click', displayPopup);
});

hidePopup.forEach((btn) => {
  btn.addEventListener('click', closePopup);
});