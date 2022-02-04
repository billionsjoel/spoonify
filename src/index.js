import './modules/assets/sass/style.scss';
import Recipies, { getLikes } from './modules/models/api.js';
import { renderResults } from './modules/views/renderResults.js';
import {
  renderLoader,
  cardsContainer,
  clearLoader,
  paginationContainer,
  clearResults,
} from './modules/views/UI.js';
import { closePopup, displayPopup } from './modules/models/controllers.js';
import showPop from './modules/views/comentPopup.js';
import { sendComment, getComments } from './modules/models/involvementApi.js';

const state = {};

const seePop = async () => {
  const commentBnts = document.querySelectorAll('.btn');
  const recipies = await state.recipe.results.categories;
  commentBnts.forEach((btn) => {
    btn.addEventListener('click', async () => {
      displayPopup();
      const cardId = btn.parentNode.parentNode.dataset.id;
      recipies.find((recipe) => recipe.idCategory === cardId);
      // showPop(recipies.find((recipe) => recipe.idCategory === cardId));
      await showPop(recipies.find((recipe) => recipe.idCategory === cardId));
      const hidePopup = document.querySelector('.close-btn');
      hidePopup.addEventListener('click', closePopup);
      // Form to submit new comment
      const form = document.querySelector('.form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputName = document.querySelector('.input-name');
        const inputComment = document.querySelector('.comment-textarea');
        const newComment = {
          item_id: cardId,
          username: inputName.value,
          comment: inputComment.value,
        };
        sendComment(newComment);
        getComments(cardId);
        form.reset();
      });
    });
  });
};

const updateGlobalState = async () => {
  // instatiate api call
  state.recipe = new Recipies();
  // prepare UI for results
  renderLoader(cardsContainer);

  // wait and get for results
  await state.recipe.getRecipies();
  state.likes = await getLikes();

  clearLoader();

  renderResults(state.recipe.results.categories, state.likes);
  showPop(state.recipe.results.categories);
  seePop();
};

window.addEventListener('load', async () => {
  updateGlobalState();
});

paginationContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('.pagination');
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    clearResults();
    renderResults(state.recipe.results.categories, state.likes, goToPage);
  }
});
