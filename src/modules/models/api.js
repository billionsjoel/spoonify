/*
 |--------------------------------------------------------------------------
 | Api Management
 |--------------------------------------------------------------------------
 |
 | @baseApi => www.themealdb.com/api/json/v1/1/categories.php
 | BaseUrl : https://www.themealdb.com/api.php
 |
 | @involvementApi => https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/l1wyQq7Jrf2t34Tkma8G/likes
 | BaseUrl : https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270
 | Api Key : l1wyQq7Jrf2t34Tkma8G
 |
 */

const LIKES_URL =
	'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/l1wyQq7Jrf2t34Tkma8G/likes';

export default class Recipies {
	constructor() {
		this.query = 'https://www.themealdb.com/api/json/v1/1/categories.php';
	}

	getRecipies = async () => {
		const response = await fetch(`${this.query}`);
		this.results = await response.json();
		return this.results;
	};
}

const getLikes = async () => {
	const response = await fetch(LIKES_URL);

	const likes = await response.json();

	return likes;
};

const addLike = async (like) => {
	const response = await fetch(LIKES_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(like),
	});
	return response.status;
};

export { getLikes, addLike };
