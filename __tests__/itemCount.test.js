document.body.innerHTML = '<ul class="nav-items"> </ul>';
const { getItemsCount } = require('../src/modules/views/renderResults.js');

test('Check if count is correct', () => {
	expect(getItemsCount(14)).toBe(14);
});


