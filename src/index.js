//  js entry file
import './modules/assets/sass/style.scss';
import Recipies from './modules/models/api.js';
import renderResults from './modules/views/renderResults.js';
import {
  renderLoader,
  cardsContainer,
  clearLoader,
} from './modules/views/UI.js';

const state = {};

const updateGlobalState = async () => {
  // instatiate api call
  state.recipe = new Recipies();

  // prepare UI for results
  renderLoader(cardsContainer);
  // search for results
  await state.recipe.getRecipies();

  //  render results on the UI
  // console.log(state.recipe.results);
  clearLoader();
  renderResults(state.recipe.results.categories);
};

window.addEventListener('load', () => {
  updateGlobalState();
});
