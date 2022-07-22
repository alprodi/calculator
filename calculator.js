//call the calculator display ID from HTML for updating later
const display = document.querySelector("#calc_display");
//create a node list of all calculator buttons
const calc_button = document.querySelectorAll('.calc_button');

//setting some default values
let val1 = "";
let val2 = "";
let operator = "";
let displayValue = "";
display.innerHTML = displayValue;

//iterate through calc buttons and add click listeners
calc_button.forEach((button) => {
  button.addEventListener('click', () => {
//and send its ID to buttonClick
    buttonClick(
        button.id.replace('calc_', ''), 
        button.className.replace('calc_button ', '')
    );
  });
});
//check to see if the button is a num or an operator
const buttonClick = function(buttonId, buttonClass){
  console.log(buttonId + buttonClass);
  if(buttonClass == "calc_num"){
    console.log("It's a num")
  }
  else if (buttonClass == "calc_operator"){
    console.log("It's an operator!");
  }
  else{
    alert("Something went wrong. Oh no what have you done?");
  }
}
/*number button functions contains some messy logic to see if
an operator has already been presed or not, also checking to see
if a number has already been pressed or not. Based on that, the
number will either be appended to an existing temporary variable
or will start this variable.
*/
const numClick = function(num){
  if (val1 == "" && val2 == "" && operator == "") {
    val1 = num;
  }
  else if (val1 != "" && val2 == "" && operator == "") {
    val1 += num;
  }
  else if(operator != "" && val2 == ""){
    val2 = num;
  }
  else if(operator != "" && val2 != ""){
    val2 += num;
  }
//whatever happens, update the display!
  updateDisplay();
}

//update display
const updateDisplay = function(operator, x, y){
  displayValue = (val1 + operator + val2);
}

//defining operator functions
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

