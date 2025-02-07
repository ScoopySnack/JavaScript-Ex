const arr = [1, 2, 3, 4, 2]

const findIndexes = (arr, num) => arr.reduce((indexes, el, index) => (el ===num) ? [...indexes, index] : indexes, [])

console.log(findIndexes(arr, 2)) // [1, 4]