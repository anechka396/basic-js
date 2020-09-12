const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // remove line with error and write your code here
  if(!Array.isArray(members)) return false;
  return members.filter(el => typeof el == "string").map(el => el.trim()[0].toUpperCase()).sort().join("");
};
