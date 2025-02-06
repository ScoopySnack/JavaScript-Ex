let temp = 0
const s = ""

if (temp) {
  console.log("Non-zero")
}else {
  console.log("Temp is zero")
}

let str = (s) ? "String is not empty" : "String is empty"
console.log(str)  // String is not empty

//JavaScript treats the following as falsy values: 0, -0, null, false, NaN, undefined, or an empty string.
//Truthy values are any value that is not falsy. This includes empty objects, empty arrays, functions, and all other values.