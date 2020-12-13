const utilsFile = require('../../src/public/javascripts/utils');

test('Should return false', () => {
    const event = document.createEvent('Event');
    expect(utilsFile.preventDefault(event)).toBe(false);
});