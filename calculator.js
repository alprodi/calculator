let displayValue = "";
const display = document.querySelector("#calc_display");
const calc_0 = document.querySelector("#calc_0");
const calc_1 = document.querySelector("#calc_1");
const calc_2 = document.querySelector("#calc_2");
const calc_3 = document.querySelector("#calc_3");
const calc_4 = document.querySelector("#calc_4");
const calc_5 = document.querySelector("#calc_5");
const calc_6 = document.querySelector("#calc_6");
const calc_7 = document.querySelector("#calc_7");
const calc_8 = document.querySelector("#calc_8");
const calc_9 = document.querySelector("#calc_9");
const add_button = document.querySelector("#calc_add");
const subt_button = document.querySelector("#cald_subt");
const mult_button = document.querySelector("#calc_mult");
const div_button = document.querySelector("#calc_divide");

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

