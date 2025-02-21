const initial ={
    name: "Alice", age: 30, address: {street: "5th Avenue", number: 7}
}


//1. With Spreading. Spread operator gives a shallow copy of the object
const copyInitial = {...initial} //simplest way to copy an object
console.log(copyInitial)

//2. Object.assign() method
const copyInitial2 = Object.assign({}, initial) // {} is the target object, worst way to copy an object

//3. With JSON function
const copyInitial3 = JSON.parse(JSON.stringify(initial)) // Initial object is stringified and then parsed back to object, DEEP COPY


const initial2 ={ name: "Alice", age: undefined, address: {street: "Patission", number: 7}}
console.log(JSON.parse(JSON.stringify(initial2))) // Here age is not copied because it is undefined

// 4. Deep copy
const copyInitial4 = structuredClone(initial) // structuredClone is a deep copy function