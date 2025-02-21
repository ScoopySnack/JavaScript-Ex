const [a, b] = [1, 2] //array destructuring

const person = {
    firstname: "Alice",
    age: 25,
    city: "Athens"
}

const {firstname, age, city} = person //object destructuring
console.log(firstname, age, city) //Alice 25 Athens, They become variables that can be used in the code

const {firstname: first, age: years, city: town} = person //object destructuring with alias
console.log(first, years, town) //Alice 25 Athens

