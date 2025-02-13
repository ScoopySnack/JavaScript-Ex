const s= "Coding Factory"

const substr = s.substring(0,6) 
console.log(substr)  //Coding

const mySlice = s.slice(7)
const mySlice2 = s.slice(7,8)

console.log(mySlice) //Factory
console.log(mySlice2) //F

const copyStr = s.slice()  //indepentent copy of the string
console.log(copyStr)

const mySlice3 = s.slice(-7)
console.log(mySlice3) //Factory

const splitted = s.split(" ") //splitted -> array
console.log(splitted)