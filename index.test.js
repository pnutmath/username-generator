const { generateUsername } = require('./');

test('Generated random username should be type of string', () => {
  expect(typeof generateUsername()).toBe('string');
});

test('Generated random username with random number suffix should be type of string', () => {
  expect(typeof generateUsername({ randomNumbersLength: 2 })).toBe('string');
});
test('Generated random username with timestamp suffix should be type of string', () => {
  expect(typeof generateUsername({ suffixTimestamp: true })).toBe('string');
});
