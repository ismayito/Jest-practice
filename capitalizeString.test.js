const capitalizeString = require('./capitalizeString');

it('Capitalizes a string', () => {
  const result = capitalizeString('mayito');
  expect(result).toBe('Mayito');
});
