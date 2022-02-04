import { cardsContainer, paginationContainer } from './UI.js';
import Recipies, { getLikes, addLike } from '../models/api.js';
import toggleLikeBtn from './likesView';

const renderRecipe = (recipe) => {
  const cardHtml = `<div class="card" data-id = "${recipe.idCategory}">
            <div class="card-image">
              <img src="${recipe.strCategoryThumb}" alt="recipe image">
            </div>
            <div class="card-text">
              <div class="card__title">${recipe.strCategory}</div>
								<div class="like-btn" data-id="${recipe.idCategory}" data-liked="false" id="like${recipe.idCategory}">
									<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
									</svg>
								</div>
            </div>
							<div class="likes"> ${recipe.likes} likes </div>
            <div class="btn-container">
              <button class="btn seePop-btn">Comments</button>
            </div>
          </div>`;
  cardsContainer.innerHTML += cardHtml;
};

const createBtn = (page, type) => `<button class="pagination" data-goto = ${
  type === 'prev' ? page - 1 : page + 1
} >
    <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
${
  type === 'prev'
    ? `<svg xmlns="http://www.w3.org/2000/svg" height="15" width="20" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
</svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" height="15" width="20" class="right" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg>`
}

      </button>`;

const renderBtns = (page, numResults, resPerPage) => {
  const pages = Math.ceil(numResults / resPerPage);
  let button;
  if (page === 1 && pages > 1) {
    // only button to go to next stage
    button = createBtn(page, 'next');
  } else if (page < pages) {
    // Both buttons
    button = `${createBtn(page, 'prev')}${createBtn(page, 'next')}`;
  } else if (page === pages && pages > 1) {
    // only page to go to prev page
    button = createBtn(page, 'prev');
  }
  paginationContainer.insertAdjacentHTML('afterbegin', button);
};

const renderResults = (recipies, likes, page = 1, resPerPage = 6) => {
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;

  // recipies.slice(start, end).forEach(renderRecipe);
  recipies.slice(start, end).forEach((value, index, array) => {
    const filteredLikes = likes.filter((e) => value.idCategory == e.item_id);

    value.likes =			filteredLikes == undefined || filteredLikes[0] == undefined
			  ? 0
			  : filteredLikes[0].likes;
    renderRecipe(value);
  });
  // recipies.forEach(renderLike);
  // render pagination buttons
  renderBtns(page, recipies.length, resPerPage);
  initializeLikeButtons();
};

const controlLike = async (idCategory, isLiked) => {
  if (!isLiked) {
    await addLike({
      item_id: idCategory,
    });
  }
  toggleLikeBtn(isLiked, idCategory);
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

export { initializeLikeButtons, renderResults };
