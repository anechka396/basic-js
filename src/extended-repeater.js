const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  var additions = [];
  var strings = [];
  
  var additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  var addition = options.addition === undefined ? "" : options.addition + "";
  
  for(var i =0; i < additionRepeatTimes; i++) { 
	additions.push(addition);
  }
  
  var additionSeparator = options.additionSeparator ? options.additionSeparator : "|";
  str += additions.join(additionSeparator);
  
  var repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  for(var i =0; i < repeatTimes; i++) { 
	strings.push(str) 
  }
  
  var separator = options.separator ? options.separator : "+";
  return strings.join(separator);
};
  