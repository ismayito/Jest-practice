const reversedString = require('./reversedString');

it('string should be returned as reversed', () => {
  const string = reversedString('box');
  expect(string).toBe('xob');
});
