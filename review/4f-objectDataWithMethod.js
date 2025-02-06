const user = {
    firstname: "George",
    lastname: "Papado",
    getFirstname: function() {
        return this.firstname;
    },

    getFullname() {
        return `${this.firstname} ${this.lastname}`
    }

}

console.log(user.getFirstname()); // George
console.log(user.getFullname()); // George Papado

// In the example above, the user object has two methods getFirstname and getFullname. The getFirstname method returns the firstname property of the user object, while the getFullname method returns the concatenation of the firstname and lastname properties of the user object.
// Methods can access the object's properties using the "this" keyword. The "this" keyword refers to the object that the method belongs to. In the example above, "this" refers to the user object.
// Methods can be defined using the function keyword or the ES6 shorthand method syntax. Both syntaxes are valid and can be used interchangeably as shown in the example above.