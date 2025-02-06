//Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=
// Logical Operators
// &&, ||, !

//Comparison Operators are used to compare two values. It returns a boolean value. 
// The example below shows the comparison operators in action.

const vat = "123"
const num = 123

let comp1 =num == vat // == is equality operator which checks only value
let comp2 = num === vat // === is strict equality operator which checks both value and type
console.log(comp1, comp2) // true, false

// != is not equal operator which checks only value
// !== is strict not equal operator which checks both value and type

//console log is used to print the output to the console.

let temp = 40
let isSunny = temp >= 40
let isSunnyStr = (isSunny) ? "Big-Sun" : "Small-Sun" // Ternary Operator, if isSunny is true then "Big-Sun" else "Small-Sun". Same as below if else statement. We can see this in Java and C++ as well.

//if (isSunny) {
//    isSunnyStr = "Big-Sun"
//} else {
//    isSunnyStr = "Small-Sun"

console.log(isSunny, isSunnyStr) // true, Big-Sun



