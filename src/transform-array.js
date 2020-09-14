const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error();
  if(arr.length == 1) return arr;
  
  var transformed_arr = [];
  for(var i =0; i < arr.length; i++) {
	  if(arr[i] === '--discard-next') {
		  i++;
	  } else if (arr[i] === '--discard-prev' && arr[i - 2] != '--discard-next') {
		  if(transformed_arr.length > 0) transformed_arr.pop();
	  } else if(arr[i] === '--double-next') {
		  if(i+1 < arr.length) transformed_arr.push(arr[i+1]);
	  } else if(arr[i] === '--double-prev' && arr[i - 2] !== '--discard-next') {
		  if(transformed_arr.length > 0) {
			var last = transformed_arr.pop();
			transformed_arr.push(last);
			transformed_arr.push(last);
		  };
	  } else if(arr[i] != '--discard-next' && arr[i] != '--discard-prev' && arr[i] != '--double-next' && arr[i] != '--double-prev' && arr[i] !== undefined) {
		  transformed_arr.push(arr[i]);
	  }
  }
  
  return transformed_arr;
};
