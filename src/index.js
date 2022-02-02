//  js entry file
import './modules/assets/sass/style.scss';
import Recipies from './modules/models/api.js';
import renderResults from './modules/views/renderResults.js';
import { closePopup, displayPopup } from './modules/models/controllers.js';
import showPop from './modules/views/comentPopup.js';

const state = {};

const seePop = async () => {
  const commentBnts = document.querySelectorAll('.btn');
  const recipies = await state.recipe.results.categories;

  commentBnts.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cardId = btn.parentNode.parentNode.dataset.id;
      console.log('Clicked', cardId);

      displayPopup();

      // const hidePopup = document.querySelector('.close-btn');
      // // console.log(hidePopup);
      // hidePopup.style.zIndex = 999;
      // hidePopup.addEventListener('click', (e) => {
      //   console.log(e.target);
      // });

      console.log(recipies.find((recipe) => recipe.idCategory === cardId));
      showPop(recipies.find((recipe) => recipe.idCategory === cardId));

      const hidePopup = document.querySelector('.close-btn');
      // console.log(hidePopup);
      hidePopup.addEventListener('click', closePopup);
    });
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
  // const btnBhowPopup = document.querySelectorAll('.btn');
  // console.log(btnBhowPopup);

  showPop(state.recipe.results.categories);
  seePop();
};

window.addEventListener('load', () => {
  updateGlobalState();
});
