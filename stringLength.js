const stringLength = (string) => {
  const length = string.length;
  if (length === 0) {
    throw new Error('string should be non-empty');
  }

  if (length > 10) {
    throw new Error('string should not be longer than 10 characters');
  }

  return length;
};

module.exports = stringLength;
