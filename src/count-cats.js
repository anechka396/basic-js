const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
   return matrix.flat().filter(el => el === "^^").length;
  // remove line with error and write your code here
};
