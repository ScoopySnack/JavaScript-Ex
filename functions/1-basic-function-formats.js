//Basic function definition
function greet(name) {
    return `Hello ${name}`
}

function add(a, b) {
    return a + b
}

//Function expression
const mul = function (a, b) {
    return a * b
}

let result = mul(3,4) //In function expression, we call the function by using the variable name

//Arrow function
const div = (a, b) =>  a / b //Arrow function is a shorter way to write a function