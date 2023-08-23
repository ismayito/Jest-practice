const stringFun = require('./stringLength');

it('should show number of characters in string', () => {
  const stringLen = stringFun('abcd');
  expect(stringLen).toBe(4);
});

it('string should be non-empty', () => {
  expect(() => stringFun('')).toThrow(new Error('string should be non-empty'));
});

it('string should not be longer than 10 characters', () => {
  expect(() => stringFun('weeeeeetyyyyyy')).toThrow(
    new Error('string should not be longer than 10 characters')
  );
});
