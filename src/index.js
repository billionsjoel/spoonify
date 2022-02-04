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

const state = {};

const updateGlobalState = async () => {
  // instatiate api call
  state.recipe = new Recipies();
  // prepare UI for results
  renderLoader(cardsContainer);

  // wait and get for results
  await state.recipe.getRecipies();
  state.likes = await getLikes();

  clearLoader();
  //  render results on the UI

  renderResults(state.recipe.results.categories, state.likes);
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
