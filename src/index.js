//  js entry file
import './modules/assets/sass/style.scss';
import Recipies from './modules/models/api.js';
import renderResults from './modules/views/renderResults.js';
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

	// search for results
	await state.recipe.getRecipies();

	clearLoader();
	//  render results on the UI

	renderResults(state.recipe.results.categories);
};

window.addEventListener('load', () => {
	updateGlobalState();
});


