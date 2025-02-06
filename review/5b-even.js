function isEven(num) {
  return n % 2 === 0; 
}

//In JavaScript this function is stated with "===" and not "==". This is because "===" is a strict comparison operator, which means it checks both the value and the type of the operands. If the operands are of different types, it will return false. If the operands are of the same type, it will compare their values. If the values are equal, it will return true. If the values are not equal, it will return false.

console.log(isEven(2)); // true
console.log(isEven(3)); // false

//The console.log() function is used to print the result of the isEven function to the console. In this case, it will print "true" and "false" respectively.

