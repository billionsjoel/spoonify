import commentCounter from '../src/modules/models/commentCounter.js';

describe('Comment counting Function', () => {
  it('Should return the number of items', () => {
    const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    expect(commentCounter(items)).toBe(9);
    expect(commentCounter([])).toBe(0);
  });
});
