let displayValue = "";
let display = document.querySelector("#calc_display");
display.innerHTML = displayValue;

const add = function(x, y) {
	return x + y;
};
const subtract = function(x, y) {
	return (x - y);
};
const multiply = function(x, y) {
  return(x * y);
};
const divide = function(x, y){
  if(y == 0){return "Div by Zero"}
  else{return(x / y);}
}

const operate = function(operator, x, y){
  if(operator == "add"){
    return add(x, y);
  }
  else if (operator == "subtract"){
    return subtract(x, y);
  }
  else if (operator == "multiply"){
    return multiply(x, y);
  }
  else if (operator == "divide"){
    return divide(x, y);
  }
  else {return "Something went wrong."}
}



