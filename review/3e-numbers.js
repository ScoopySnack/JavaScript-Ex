let num1 = 10
let num2 = 3

let divResult = num1 / num2
let expr = (num2 / num1) * (8.5 / 3.3)

let fixedDiv = (num1 / num2).toFixed(1)  // 3.3333 -> 3.3(rounded to 1 decimal)
let intResult = Math.floor(num1 / num2)  // 3.3333 -> 3(rounded down, integer)
let upperInt = Math.ceil(num1 / num2)  // 3.3333 -> 4(rounded up, integer)
let roundResult = Math.round(num1 / num2)  // 3.3333 -> 3(rounded to nearest integer)

// Modulus operator keeps the sign(+ or -) of the dividend
let modResult = num1 % num2  // 10 % 3 -> 1(remainder of division) same in Js & Java  

console.log(divResult, expr, fixedDiv, intResult, upperInt, roundResult, modResult)  // 3.3333333333333335 0.7575757575757576 3.3 3 4 3 1