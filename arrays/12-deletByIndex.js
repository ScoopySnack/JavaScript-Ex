const arr = [1, 2, 3]

let itemToRemove = arr.indexOf(2)
arr.splice(itemToRemove, 1)
console.log(arr) //Output: [ 1, 3 ]