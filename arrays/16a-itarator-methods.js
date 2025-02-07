const users = [
    {id: 1, firstname: "Alice", email: "alice@aueb.gr", isActive: true},
    {id: 2, firstname: "Bob", email: "bob@aueb.gr", isActive: false},
    {id: 3, firstname: "Costas", email: "costas@aueb.gr", isActive: true},
]

users.forEach(u => console.log(u))

const emails = users.map(user => user.email)
console.log(emails) 

const activeUsers = users.filter(user => user.isActive)
console.log(activeUsers)

const cart = [{title: "laptop", price: 1000, stock: 10}, 
    {title: "mouse", price: 50 , stock: 0}, 
    {title: "keyboard", price: 80, stock: 20}
]

const totalSum = cart.reduce((acc, item) => acc + item.price, 0) //acc is the accumulator, item is the current item, 0 is the initial value of the accumulator

console.log(totalSum)

const user = users.find(user => user.email === "alice@aueb.gr")  //find returns the first element that satisfies the condition
const userIndex = users.findIndex(user => user.email === "alice@aueb.gr") //findIndex returns the index of the first element that satisfies the condition
console.log(user, userIndex)

const isOutOfStock = cart.some(item => item.stock === 0) //some returns true if AT LEAST ONE element satisfies the condition
console.log(isOutOfStock) //true

const allOutOfStock = cart.every(item => item.stock === 0) //every returns true if ALL elements satisfy the condition
console.log(allOutOfStock) //false

const posts = [
    {title: "Post 1", tags: ["js", "web"]},
    {title: "Post 2", tags: ["nodejs", "backend"]},
    {title: "Post 3", tags: ["react", "frontend"]}
]

const allTags = posts.flatMap(post => post.tags) //flatMap returns a new array with the elements of the subarrays
console.log(allTags) //["js", "web", "nodejs", "backend", "react", "frontend"]

const fruits = ["apple", "banana", "orange"]
for (const [i, fruit] of fruits.entries()) {
    console.log(`Index: ${i}, Fruits ${fruit}`)
}