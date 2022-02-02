/*
 |--------------------------------------------------------------------------
 | Api Management
 |--------------------------------------------------------------------------
 |
 | @baseApi => www.themealdb.com/api/json/v1/1/categories.php
 | BaseUrl : https://www.themealdb.com/api.php
 |
 | @involvementApi => https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jOmvR28ksoZ7GUF5P2Cy/likes
 | BaseUrl : https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270
 | Api Key : l1wyQq7Jrf2t34Tkma8G
 |
 */

export default class Recipies {
	constructor() {
		this.query = 'https://www.themealdb.com/api/json/v1/1/categories.php';
	}

	getRecipies = async (id) => {
		const response = await fetch(`${this.query}`);
		this.results = await response.json();
		return this.results;
	};
}
