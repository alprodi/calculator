const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return (x - y);
};

const sum = function(sumArray) {
	let total = 0;
  for (x = 0; x<sumArray.length; x++){
    total += sumArray[x];
  }
  return total;
};

const multiply = function(multArray) {
  let total = 1;
  for (x = 0; x<multArray.length; x++){
    total *= multArray[x];
  }
  return total;
};

const power = function(x, y) {
  return Math.pow(x, y);
};

const factorial = function(x) {
  let cache = 1;
	if (x === 0 | x === 1) return 1;
  else if (x > 0){
    for (i = x; i >1; i--){
      cache *= i;
    }
  return cache;
  }
  else return "ERROR"
};