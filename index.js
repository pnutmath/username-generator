const fs = require('fs');
const path = require('path');

const dictionary = fs
  .readFileSync(path.resolve(__dirname, 'dictionary.txt'))
  .toString();
const wordList = dictionary.split(require('os').EOL);

/**
 * Generate random username
 * @param {Number} numberOfWords
 * @param {Number} randomNumbersLength
 * @param {Boolean} suffixTimestamp
 */
exports.generateUsername = function ({
  numberOfWords = 2,
  randomNumbersLength = 0,
  suffixTimestamp = false,
  maxLength,
} = {}) {
  let userName = [];
  for (let i = 0; i < numberOfWords; i++) {
    userName.push(wordList[Math.floor(Math.random() * wordList.length)]);
  }
  for (let i = 0; i < randomNumbersLength; i++) {
    userName.push(Math.floor(Math.random() * 10));
  }
  if (maxLength && suffixTimestamp) {
    userName = [userName.join('').substring(0, 11)];
  }
  if (suffixTimestamp) userName.push(new Date().getTime().toString(32));
  return userName.join('');
};
