//  js entry file
import './modules/assets/sass/style.scss';
import Recipies from './modules/models/api.js';
import renderResults from './modules/views/renderResults.js';

const state = {};

const updateGlobalState = async () => {
  // instatiate api call
  state.recipe = new Recipies();

  // prepare UI for results

  // search for results
  await state.recipe.getRecipies();

  //  render results on the UI
  // console.log(state.recipe.results);
  renderResults(state.recipe.results.categories);
};

window.addEventListener('load', () => {
  updateGlobalState();
});
