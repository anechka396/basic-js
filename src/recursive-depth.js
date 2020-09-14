const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
	  var depth = 1;
	  var innerDepth = 0;
	  for(var i = 0; i < arr.length; i++) {
		  if(Array.isArray(arr[i])) {
			  var currentDepth = this.calculateDepth(arr[i]);
			  innerDepth = innerDepth < currentDepth ? currentDepth : innerDepth;
		  }
	  }
		  
	  return depth + innerDepth;
  }
};