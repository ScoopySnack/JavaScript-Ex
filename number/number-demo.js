console.log(Number.MAX_VALUE, Number.MIN_VALUE); // 1.7976931348623157e+308 5e-324
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER); // 9007199254740991 -9007199254740991
console.log(Number.POSITIVE_INFINITY); // Infinity, 12/0=Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity, -12/0=-Infinity

if (Number.isInteger(12)) {
    console.log('12 is integer');
}else {
    console.log('12 is not integer');
}

if(Number.isNaN(NaN)) {  //Not a Number, 10/'A' = NaN
    console.log('True');
}else {
    console.log('False');
}

if (isNaN(NaN)) {
    console.log('Is NaN');
}else {
    console.log('Is not NaN');
}

console.log(Number.parseInt("44")) // 44
console.log(parseInt("42")) // 42

console.log(Number.parseFloat("44.8")) // 44.8
console.log(parseFloat("45.1")) // 45.1

const num1 = 0.1 + 0.2
const num2 = 0.3

function compareFloatingPoints(a, b) {
  return Math.abs(a - b) < Number.EPSILON
}
console.log(compareFloatingPoints(num1, num2)) // true