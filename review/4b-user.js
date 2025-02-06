const user = {
    firstname: "Alice",
    age: 25,
    isStudent: false
}

console.log(user.firstname); // Alice

console.log(user.age); // 25

console.log(user.isStudent); // false

//other way to access object properties
console.log(user["firstname"]); // Alice
console.log(user["age"]); // 25
console.log(user["isStudent"]); // false
//This way is useful when we have a variable that contains the property name.We cannot have a variable in the dot notation. 
//  Example:
const ageVar = "age"
console.log(user[ageVar]); // 25
//This cannot be represented as user.ageVar because it will look for a property called ageVar which does not exist.

// '' and "" are interchangeable(they are the same)