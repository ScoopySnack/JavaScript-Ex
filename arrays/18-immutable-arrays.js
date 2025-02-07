const numbers = [1, 2, 3, 4];

//Modifies the initial array
numbers.push(5);
numbers.slice(4,0,5)

function addToArrayEnd(arr, element) {
    return [...arr, element];
}

function addToArrayStart(arr, element) {
    return [element, ...arr];
}

//Updates 
numbers.slice(3,1,8)

const updateArray = (arr, newValue) => arr.map (item => newValue)

const updateOneArray = (arr, index, newValue) => arr.map((item, i) => (i === index) ? newValue : item)


//Fresh copy
const updateOneItem = (arr, index, newValue) => 
    arr.map((item, i) => (i === index) ? newValue : item) 
  
  const updatedNumbers = updateOneItem(numbers, 2, 17)
  console.log(updatedNumbers)
  
  // Delete
  
  // Modifies the intial array
  let index = numbers.indexOf(1)
  if (index !== -1) numbers.splice(index, 1)
  
  // Fresh copy of deleted array
  const deleteFromArray = (arr, num) => arr.filter(item => item !== num)
  
  const deleteByIndex = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)]

  