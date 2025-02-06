let isDarkMode = false
let isUserLoggedIn = false
let username = ""
let isDashboardOn = false

console.log(`Is Dark Mode enabled: ${isDarkMode}`)    //interpolation

isUserLoggedIn = true
username = "Anna"
isDashboardOn = isUserLoggedIn && username
console.log(isDashboardOn)