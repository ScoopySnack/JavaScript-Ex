const calc = {
    add: function(a, b) {
        return a + b;
    },

    sub(a, b) { // ES6 shorthand method syntax. This is equivalent to sub: function(a, b) { ... } as shown above.
        return a - b;
    }
}

// In the example above, the calc object has a method add that takes two parameters a and b and returns their sum. To call the add method, we use the dot notation calc.add(1, 2).
// Methods are functions that are stored as object properties. They can be called using the dot notation on the object they belong to.

//First-class objects in JavaScript are special objects that can be passed around as values and used as data. Functions are first-class objects in JavaScript, which means they can be assigned to variables, passed as arguments to other functions, and returned from other functions. This makes functions versatile and powerful in JavaScript.

//Another way to define a method is by using the ES6 shorthand method syntax. The shorthand method syntax allows us to define methods without using the function keyword. Here's an example:

console.log(calc.add(12,7)) // 19
console.log(calc.add(5,1)) // 6
console.log(calc.sub(10,4)) // 6
