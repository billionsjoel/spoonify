const cardsContainer = document.querySelector('.cards');
const paginationContainer = document.querySelector('.pagination-container');



const renderLoader = (parent) => {
	const loader = `
          <div class="loader">
          <svg xmlns="http://www.w3.org/2000/svg" height="45" width="45" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          </div>
                  `;
	parent.insertAdjacentHTML('afterbegin', loader);
};

const clearLoader = () => {
	const loaderBtn = document.querySelector('.loader');
	if (loaderBtn) {
		loaderBtn.parentElement.removeChild(loaderBtn);
	}
};

export {
	renderLoader,
	cardsContainer,
	clearLoader,
	paginationContainer,
};
