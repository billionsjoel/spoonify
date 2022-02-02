//  js entry file
import './modules/assets/sass/style.scss';
import Recipies from './modules/models/api.js';
import renderResults from './modules/views/renderResults.js';
import { closePopup, displayPopup} from './modules/models/controllers.js';

const state = {};

const seePop = () => {
  const commentBnts = document.querySelectorAll('.btn');
  console.log(commentBnts);
  commentBnts.forEach((btn) => {
    btn.addEventListener('click', displayPopup);
  });
};

const updateGlobalState = async () => {
  // instatiate api call
  state.recipe = new Recipies();

  // prepare UI for results

  // search for results
  await state.recipe.getRecipies();
  //  render results on the UI
  // console.log(state.recipe.results);
  renderResults(state.recipe.results.categories);
  seePop();
};

window.addEventListener('load', () => {
  updateGlobalState();
});
