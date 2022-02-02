import './modules/assets/sass/style.scss';
import Recipies from './modules/models/api.js';
import renderResults from './modules/views/renderResults.js';
import {
  renderLoader,
  cardsContainer,
  clearLoader,
} from './modules/views/UI.js';
import { closePopup, displayPopup } from './modules/models/controllers.js';
import showPop from './modules/views/comentPopup.js';

const state = {};

const seePop = async () => {
  const commentBnts = document.querySelectorAll('.btn');
  const recipies = await state.recipe.results.categories;

  // prepare UI for results
  renderLoader(cardsContainer);
  // search for results
  await state.recipe.getRecipies();

  //  render results on the UI
  // console.log(state.recipe.results);
  clearLoader();
  commentBnts.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cardId = btn.parentNode.parentNode.dataset.id;
      displayPopup();
      recipies.find((recipe) => recipe.idCategory === cardId);
      showPop(recipies.find((recipe) => recipe.idCategory === cardId));

      const hidePopup = document.querySelector('.close-btn');
      hidePopup.addEventListener('click', closePopup);
    });
  });
};

const updateGlobalState = async () => {
  state.recipe = new Recipies();
  await state.recipe.getRecipies();
  renderResults(state.recipe.results.categories);
  showPop(state.recipe.results.categories);
  seePop();
};

window.addEventListener('load', () => {
  updateGlobalState();
});
