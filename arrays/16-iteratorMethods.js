const students = ['Alice', 'Andreas', 'Andreas', 'Bob', 'Costas']

students.forEach(function(stu,i) {
  console.log(stu, i)
})

let filtered = students.filter(student => student === 'Andreas')
console.log(filtered)

let mapped = students.map(student => "Student: " + student)  // map returns a new array
console.log(mapped)

// const numbers = [1, 6, 9, 12]
// let sum = numbers.reduce((total, val) => total + val, 0)
// console.log(sum)