function greeet(name) {
    if (name === undefined) {
        name = "Guest"
    }
    console.log(`Hello ${name}`)
}

greeet() //Hello Guest

//ES6 Default Parameters

function greet(name = "Guest") {
    console.log(`Hello ${name}`)
}

function getUser(name = "Guest", age = 18) {
    return {name, age}
}

const obj = getUser()
console.log(obj) //{ name: 'Guest', age: 18 }

function getFormattedDateTime(
    locale = "en-US",
    options ={
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    }
){
    const now = new Date()
    return now.toLocaleDateString(locale, options)
}