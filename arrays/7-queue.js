const q = [1,2,3,4,5]

//FIFO - First In First Out
//The first element added to the queue is the first to be removed

q.push(6)
console.log(q) // [1, 2, 3, 4, 5, 6]

let first = q.shift()
console.log(first) // 1, deletes the first element
console.log(q) // [2, 3, 4, 5, 6]
// Shift is the opposite of push. It deletes the first element of the array and returns it.