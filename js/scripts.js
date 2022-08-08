// business logic
// caculator app functions 
function add(num1, num2) {
  const total = num1 + num2;
  return total;
}
function subtract(num1, num2) {
  const total = num1 - num2;
  return total;
}
function multiply(num1, num2) {
  const total = num1 * num2;
  return total;
}
function divide(num1, num2) {
  const total = num1 / num2;
  return total;
}

const num1 = parseInt(prompt('Enter a number to calculate'));
const num2 = parseInt(prompt('Enter another number to calculate'));  

window.alert(num1 + ' + ' + num2 + ' = ' + (add(num1,num2)) + 
  '\n' + num1 + ' - ' + num2 + ' = ' + (subtract(num1,num2)) + 
  '\n' + num1 + ' * ' + num2 + ' = '  + (multiply(num1,num2)) + 
  '\n' + num1 + ' / ' + num2 + ' = '  + (divide(num1,num2)));