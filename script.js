const operation = prompt("Choose: add, sub, mult, div" );
const num1 = +prompt("Enter your number:");
const num2 = +prompt("Enter your age:");
let result;



if(operation === 'add' || operation === 'sub' || operation === 'mult' || operation === 'div') {
		result = (`${operation}: ${num1} + ${num2} = ${num1 + num2}`);
    
} else {
    alert(`Its not: add, sub, mult, div!!!

    Try again!!!!`)
}
console.log(result)

if(isNaN(num1) || isNaN(num2)) {
    alert(`Its not a value!!!
  Try again!!!!`)

} else {
result = (`${num1} + ${num2} = ${num1 + num2}`)

}
console.log(result)