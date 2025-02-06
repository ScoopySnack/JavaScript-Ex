
const employee = {
    firstname: "Bob",
    position: "Developer",
    address: {
        street: "Patision 75",
        city: "Athens",
        zipCode: "10434"
    }
}

console.log(employee.address.street); // Patision 75
console.log(employee.address.city); // Athens
console.log(employee.address.zipCode); // 10434

//Nested objects are accessed using dot notation. They are accessed by chaining the properties together.
//In the example above, the address object is nested inside the employee object. To access the street property of the address object, we use the dot notation employee.address.street.

