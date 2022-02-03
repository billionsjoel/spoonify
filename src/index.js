import './modules/assets/sass/style.scss';
import Recipies, { getLikes, addLike } from './modules/models/api.js';
import { toggleLikeBtn } from './modules/views/likesView';
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

const controlLike = async (idCategory, isLiked) => {
	if (!isLiked) {
		await addLike({
			item_id: idCategory,
		});
	}
	toggleLikeBtn(isLiked, idCategory);
	//if (!state.likes) state.likes = new Likes();

	//User hasnt liked the current recipe
};

const initializeLikeButtons = () => {
	const likeButtons = document.getElementsByClassName('like-btn');
	for (let i = 0; i <= likeButtons.length - 1; i++) {
		likeButtons[i].addEventListener('click', (e) => {
			const idCategory = likeButtons[i].getAttribute('data-id');
			const isLiked = likeButtons[i].getAttribute('data-liked') == 'true';
			if (isLiked) {
				likeButtons[i].setAttribute('data-liked', 'false');
			} else {
				likeButtons[i].setAttribute('data-liked', 'true');
			}
			controlLike(idCategory, isLiked);
		});
	}
};

export { initializeLikeButtons };
