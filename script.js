const operation = prompt("Choose: add, sub, mult, div" );
const num1 = +prompt("Enter your number:");
const num2 = +prompt("Enter your age:");
let result;


if(operation === 'add') {
		result = (`${num1} + ${num2} = ${num1 + num2}`);
} else if(operation === 'sub') {
		result = (`${num1} - ${num2} = ${num1 - num2}`);
} else if(operation === 'mult') {
  result = (`${num1} * ${num2} = ${num1 * num2}`);
} else if(operation === 'div'){
	result = (`${num1} / ${num2} = ${num1 / num2}`);
} else if(operation !== 'add' || operation !== 'sub' || operation !== 'mult' || operation !== 'div') {
		alert(`I don't know how to act !!!
      Try again....`);
}
if(isNaN(num1) || isNaN(num2)) {
		alert(`Its not a value!!!!`)
}
console.log(result)