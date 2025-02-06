/*Arrow function is a new feature in ES6. It is a more concise way to write function expressions in JavaScript. It is also called fat arrow (=>) function.*/
// Example

// ES5
var x = function(x, y) {
    return x * y;
}

// ES6
const x = (x, y) => x * y;


const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32; //When we have only one parameter, we can omit the parentheses and the return keyword.

console.log(celsiusToFahrenheit(0)); // 32