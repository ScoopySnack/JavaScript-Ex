const [a,b] = [1,2] 
console.log(a,b) // 1 2 

let x = 10
let y = 20

[x,y] = [y,x] // swap x and y. DESTRUCTURING ASSIGNMENT

console.log(x,y) // 20 10

//Object destructuring
const { first, last } = { first: "Allice", last: "W."} 
console.log(first, last) // Allice W.

const { first: firstname, last: lastname } = { first: "Allice", last: "W."} //RENAMING VARIABLES
console.log(firstname, lastname) // Allice W.


//other way to state this:
const obj = { 
    first: "Allice", 
    last: "W."
}

const point = { //we can have methods in objects
    x: 2,
    y: 12,
    pointToString: function() {  //property-based function. It's a method of the object point. A more compact way to write this is pointToString() { ... } from ES6 and above.
        return "(" + this.x + ", " + this.y + ")"
    }
}

point.pointToString() // (2, 12) , this refers to the object itself and it's used to access the object's properties and methods from within the object itself. The "." is used to access the object's properties and methods from outside the object.

                                                        //REVIEW


//TYPES OF COMMENTS:

// single line comment
/* multi line comment */
/** documentation comment */

//TYPES OF VARIABLES AND SCOPE:
//var: function-scoped, can be re-declared and updated, hoisted to the top of the function
//let: block-scoped, can be updated but not re-declared, not hoisted
//const: block-scoped, cannot be updated or re-declared, not hoisted

//TYPES OF DATA:
//Primitive data types: number, string, boolean, null, undefined, symbol, bigint
//Object data types: object, array, function
//Special data types: NaN, Infinity, -Infinity

//OPERATORS:
//Arithmetic operators: +, -, *, /, %, ++, --
//Assignment operators: =, +=, -=, *=, /=, %=, **=, <<=, >>=, >>>=, &=, ^=, |=
//Comparison operators: ==, ===, !=, !==, >, <, >=, <=, ?:
//Logical operators: &&, ||, !
//Bitwise operators: &, |, ^, ~, <<, >>, >>>
//String operators: +, +=, ``

let x1 = 10
let d = 10.5
typeof x1 // number, typeof operator returns the type of the variable. 

// JS understands numbers as integers and floating point numbers as numbers because it's a dynamically typed language.

let big = BigInt(123456) // BigInt is a new data type in JS that can store large numbers. It's a primitive data type. BigInt is a wrapper object.
let bigI = 123456n // another way to write BigInt numbers.

//All data types in Js have wrapper objects. They are objects that represent primitive data types. They have methods and properties that can be used to manipulate the data. Type number has the object Number. They have CONSTRUCTORS that can be used to create new objects of the same type.

//Number{
//    constructor: } It needs "constructor" to create new objects of the same type.

//CONSTRUCTORS: must be used with the "new" keyword! Otherwise, we have coercion.

typeof big // bigint


//STRINGS

let s = "AUEB"

let s1 = 'OPA'

console.log("Hello") // Hello

console.log(`Hello ${s1}`) // Hello OPA    // this is a way to insert variables in strings. It's called template literals. It's a new feature in ES6.

let y1 = null

//ARRAYS

const arr = [1,2,3,4,5] //Way to create an array
arr[0] // 1, arrays are zero-based
arr.length // 5, length property of the array

arr[arr.length - 1] // 5, last element of the array

const grid = [[1,2], [3,4], [5,6]] // 2D array

const arr1 = [] // empty array

const arr2 = null // Array with length 0


//OBJECTS
obj = { //Way to create an object
    id:2,
    title: "CF",
    year: 2025,
    enabled: true,
}

obj.title // CF, accessing the property of the object

obj["enabled"] // true, another way to access the property of the object. ASSOCIATIVE ARRAYS

Object.values(obj) // [2, "CF", 2025, true], returns an array with the values of the object
//Object class has a lot of methods that can be used to manipulate objects. SOS!

Object.keys(obj) // ["id", "title", "year", "enabled"], returns an array with the keys of the object

Object.entries(obj) // [["id", 2], ["title", "CF"], ["year", 2025], ["enabled", true]], returns an array with the key-value pairs of the object

//example:
Object.entries(obj)[0] // ["id", 2], returns the first key-value pair of the object
Object.entries(obj)[0][0] // "id", returns the key of the first key-value pair of the object
Object.entries(obj)[0][1] // 2, returns the value of the first key-value pair of the object

obj.version = 2.2 // adding a new property to the object dynamically

delete obj.version // deleting a property from the object


//CONSTANTS
const PI = 3.14 // Constants are immutable. They cannot be updated or re-declared. They are block-scoped. They are not hoisted.


//OPERATIONS
1+2 // 3

5/4 // 1.25

1/0 // Infinity

-1/0 // -Infinity

0/0 // NaN

(5/4).toFixed(1) // 1.2, toFixed() method is used to format numbers. It returns a string with the number formatted with the specified number of decimal places.

Math.floor(5/4) // 1, floor() method is used to round down a number to the nearest integer.

Math.ceil(5/4) // 2, ceil() method is used to round up a number to the nearest integer.

2**3 // 8, ** is the exponentiation operator. It raises the first number to the power of the second number. Another way to write this is Math.pow(2,3).


(125).toString() // "125", toString() method is used to convert a number to a string.
String(125) // "125", another way to convert a number to a string.



//PRIMITIVES HAVE WRAPPER TYPES EXACTLY LIKE IN JAVA. EVERY WRAPPER TYPE HAVE CONSTRUCTORS. THESE CONSTRUCTORS CAN BE CALLED EITHER WITH THE NEW KEYWORD OR WITHOUT IT. WITH THE "NEW" KEYWORD, WE CREATE A NEW OBJECT OF THE SAME TYPE. WITHOUT THE "NEW" KEYWORD, WE HAVE A CONVERSION.


//COMPARISONS
let myX = 5 
let myY = "5"

myX == myY // true, == is the equality operator. It compares the values of the variables. It performs type coercion. It converts the variables to the same type before comparing them. THIS IS NOT BEST PRACTICE
myX === myY // false, === is the strict equality operator. It compares the values and the types of the variables. It doesn't perform type coercion. PREFFERED

myX != myY // false, != is the inequality operator. It compares the values of the variables. It performs type coercion.
myX !== myY // true, !== is the strict inequality operator. It compares the values and the types of the variables. It doesn't perform type coercion.

myX > myY // false, > is the greater than operator. It compares the values of the variables. It performs type coercion.
myX < myY // false, < is the less than operator. It compares the values of the variables. It performs type coercion.

myX >= myY // true, >= is the greater than or equal operator. It compares the values of the variables. It performs type coercion.
myX <= myY // true, <= is the less than or equal operator. It compares the values of the variables. It performs type coercion.



let key = "firstname"

const user = {
    firstname: "Bob"
}

user.firstname 