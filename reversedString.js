const reversedString = (string) => {
  const stringArray = string.split('');
  const reversedArray = stringArray.reverse();
  return reversedArray.join('');
};

module.exports = reversedString;
