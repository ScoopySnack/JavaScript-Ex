const cities = ["Athens", "Paris", "Toronto"] // array of strings

cities[0] // "Athens"
cities[1] // "Paris"
cities[2] // "Toronto"

cities[3] // undefined

//Add -Modifies the array
cities.push("London") // ["Athens", "Paris", "Toronto", "London"], adds to the end


let city = cities[0] 
console.log(city) // "Athens"

cities[1] = "London" // ["Athens", "London", "Toronto", "London"], modifies the array

cities.forEach(city => console.log(city)) // "Athens", "London", "Toronto", "London"

cities.sort() // ["Athens", "London", "London", "Toronto"], sorts the array

cities.sort((a,b) => a.localeCompare(b, "en")) // localeCompare is a string method that compares two strings and returns a number 

const citiesSorted = cities.slice().sort((a,b) => a.localeCompare(b, "en")) // ["Athens", "London", "London", "Toronto"], swallow copy of the array

//Copy
const citiesCopy1 = JSON.parse(JSON.stringify(cities)) // ["Athens", "London", "London", "Toronto"], deep copy of the array, JSON.stringify converts the array to a string and JSON.parse converts the string back to an array

const cities2 = structuredClone(cities) // ["Athens", "London", "London", "Toronto"], deep copy of the array, structuredClone is a function that deep copies the array


// Shallow copies -- Spread operator
const cities3 = [...cities] // ["Athens", "London", "London", "Toronto"], ... is the spread operator, it spreads the elements of the array into a new array

const nums = [1,2,3,4]
let maxVal = Math.max(...nums) // "Toronto", spreads the elements of the array into the Math.max function
let maxIndex = nums.indexOf(maxVal) // 3, gets the index of the max value

console,log(`Max Value: ${maxVal}, Max Index: ${maxIndex}`) // "Max Value: Toronto, Max Index: 3"