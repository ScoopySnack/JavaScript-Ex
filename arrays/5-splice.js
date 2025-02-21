const arr = [1,2,3,4,5,6,7, 8]

const arr2 = arr.splice(0,4) 
console.log(arr2) // [1, 2, 3, 4]
console.log(arr) // [5, 6, 7, 8]

//Insert
arr.splice(0,0, 10) // insert 10 at index 0
console.log(arr) // [10, 5, 6, 7, 8]

//Update
arr.splice(0,1,11) // update 10 to 11 at index 0
console.log(arr) // [11, 5, 6, 7, 8]