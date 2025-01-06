const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    result[i] = new Array(matrix[0].length).fill(0);
  }

  for (let j = 0; j < matrix.length; j++) {
    for (let k = 0; k < matrix[0].length; k++) {
      if (matrix[j][k]) {
        result[j][k] = 1;
      } else {
        let count = 0;
        if (k - 1 >= 0 && matrix[j][k - 1]) count++;
        if (k + 1 < matrix[0].length && matrix[j][k + 1]) count++;
        if (j + 1 < matrix.length && matrix[j + 1][k]) count++;
        if (j + 1 < matrix.length && k - 1 >= 0 && matrix[j + 1][k - 1]) count++;
        if (j + 1 < matrix.length && k + 1 < matrix[0].length && matrix[j + 1][k + 1]) count++;
        if (j - 1 >= 0 && matrix[j - 1][k]) count++;
        if (j - 1 >= 0 && k - 1 >= 0 && matrix[j - 1][k - 1]) count++;
        if (j - 1 >= 0 && k + 1 < matrix[0].length && matrix[j - 1][k + 1]) count++;

        result[j][k] = count;
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
