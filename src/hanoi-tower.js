const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var minTurns = Math.pow(2, disksNumber) - 1;
  var minSeconds = Math.floor(minTurns / turnsSpeed * 3600);
  return {turns: minTurns, seconds: minSeconds};
};
