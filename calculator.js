//call the calculator display ID from HTML for updating later
const display = document.querySelector("#calc_display");
//create a node list of all calculator buttons
const calc_button = document.querySelectorAll('.calc_button');

//setting some default values
let val1 = "";
let val2 = "";
let operator = "";
let tempOperator = "";
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
  //console.log(buttonId + buttonClass);
  if(buttonClass == "calc_num"){
    numClick(buttonId);
  }
  else if (buttonClass == "calc_operator"){
    operatorClick(buttonId);
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
//If everything is blank, then make val1 the num
  if (val1 == "" && val2 == "" && operator == "") {
    val1 = num;
    operator = "";
    val2 = "";
  }
//If there's only something in val1, append the num to val1
  else if (val1 != "" && val2 == "" && operator == "") {
    val1 += num;
  }
//If there's already an operator and val2 is empty, 
//then make val2 the num
  else if(operator != "" && val2 == ""){
    val2 = num;
  }
//If there's already an operator and there's something
//in val2, then append num to val2.
  else if(operator != "" && val2 != ""){
    val2 += num;
  }
  else {alert("Something went wrong with the numClick function.");}
//whatever happens, update the display!
  updateDisplay();
  console.log("Val1 = " + val1 + ", Val2 = " + val2);
}

//operator button click logic
const operatorClick = function(opButton){
//to chain together operators, make sure there isn't
//already a val2
  if(opButton == "add" && val2 == ""){
    operator = "&#x2795";
    updateDisplay();
  }
  else if (opButton == "subt" && val2 == ""){
    operator = "&#x2796";
    updateDisplay();
  }
  else if (opButton == "mult" && val2 == ""){
    operator = "&#x2716";
    updateDisplay();
  }
  else if (opButton == "divide" && val2 == ""){
    operator = "&#x2797";
    updateDisplay();
  }
  else if (opButton == "clear"){
    clearAll();
  }
  else if (opButton == "dot"){
    calcDot();
  }
  else if (opButton == "equals"){
    calcEquals();
  }
  //if none of the previous is true and there isn't
  //already a second variable, recalculate the operator
  else if(val2 != ""){
    if(opButton == "add"){
      reCalculate();
      operator = "&#x2795";
    }
    else if (opButton == "subt"){
      reCalculate();
      operator = "&#x2796";
    }
    else if (opButton == "mult"){
      reCalculate();
      operator = "&#x2716";
    }
    else if (opButton == "divide"){
      reCalculate();
      operator = "&#x2797";
    }
  }
  else {alert("That operator button doesn't exist?!! What have you done?")}
}

const reCalculate = function(){
  tempOperator = operator;
  calcEquals();
  operator = tempOperator;
  tempOperator = "";
  updateDisplay();
}
//update display
const updateDisplay = function(){
  displayValue = (val1 + " " + operator + " " + val2);
  display.innerHTML = displayValue;
  //console.log("displayValue = " + displayValue);
  //console.log(" Operator = " + operator);
}

//defining operator functions
const add = function(x, y) {
	val1 = +x + +y;
};
const subtract = function(x, y) {
	val1 = (x - y);
};
const multiply = function(x, y) {
  val1 = (x * y);
};
const divide = function(x, y){
  if(y == 0){return "Div by Zero"}
  else{val1 = (x / y);}
}

/*
Still need to check to see if there is already a decimal in either val
*/
const calcDot = function(){
  //If everything is blank, then make val1 0.
  if (val1 == "" && val2 == "" && operator == "") {
    val1 = 0.;
    operator = "";
    val2 = "";
  }
//If there's only something in val1, append the decimal to val1
  else if (val1 != "" && val2 == "" && operator == "") {
    val1 += '.';
  }
//If there's already an operator and val2 is empty, 
//then make val2 0.
  else if(operator != "" && val2 == ""){
    val2 = 0.;
  }
//If there's already an operator and there's something
//in val2, then append decimal to val2.
  else if(operator != "" && val2 != ""){
    val2 += '.';
  }
}

const calcEquals = function(){
  switch(operator){
    case "&#x2795":
    add (val1, val2);
    break;
    case  "&#x2796":
    subtract(val1, val2);
    break;
    case "&#x2716":
    multiply (val1, val2);
    break;
    case "&#x2797":
    divide (val1, val2);
    break;
  }
  val2 = "";
  operator = "";
  updateDisplay();
}

const clearAll = function(){
  val1 = "";
  val2 = "";
  operator = "";
  tempOperator = "";
  updateDisplay();
}

