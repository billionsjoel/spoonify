import { cardsContainer, paginationContainer, likesContainer } from './UI.js';

export const toggleLikeBtn = (isLiked, idCategory) => {
	

	document.querySelector('#like' + idCategory).innerHTML = iconString;
};
