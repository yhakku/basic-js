const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrStr1 = s1.split('');
  const arrStr2 = s2.split('');

  let count = 0;
  for (let i = 0; i < arrStr1.length; i++) {
    for (let j = 0; j < arrStr2.length; j++) {
      if (arrStr1[i] === arrStr2[j]) {
        count += 1;
        arrStr2[j] = 0;
        break;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
