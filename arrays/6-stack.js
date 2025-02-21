const stack = [1,2]

//LIFO - Last In First Out
//The last element added to the stack is the first to be removed. Logic is similar to java stack.

stack.push(3)
console.log(stack) // [1, 2, 3]

let popped = stack.pop()
console.log(popped) // 3, deletes the last element
console.log(stack) // [1, 2]