//  js entry file
import './modules/assets/sass/style.scss';
import Recipies from './modules/models/api';
import Display from './modules/controllers/displayRecipies';
import * as show from './modules/views/renderResults';

const state = {};

const updateGlobalState = async () => {
	// instatiate api call
	state.recipe = new Recipies();

	// prepare UI for results

	// search for results
	await state.recipe.getRecipies();

	//  render results on the UI
	//console.log(state.recipe.results);
	show.renderResults(state.recipe.results.categories);
};

window.addEventListener('load', () => {
	updateGlobalState();
});
