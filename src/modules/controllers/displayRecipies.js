import { cardsContainer } from '../views/UI';
import { cardHtml } from '../views/strings';

export default class Display {
	constructor() {
		cardsContainer.innerHTML = cardHtml;
	}
}
