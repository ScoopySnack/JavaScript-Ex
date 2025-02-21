const arr = [1,2,3,4]

delete arr[0] // [empty, 2, 3, 4] sparse array created
console.log(arr)

arr.push(5) 
console.log(arr) // [empty, 2, 3, 4, 5]

arr.push(6,7) //push alters the existing array
console.log(arr) // [empty, 2, 3, 4, 5, 6, 7]