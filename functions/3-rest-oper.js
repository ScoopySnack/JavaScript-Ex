function max(...numbers){ //rest operator(...) χρησιμοποιείται για να πάρουμε όλα τα arguments που δεν έχουν οριστεί στην συνάρτηση
    let maxVal = -Infinity

    for (let n of numbers){
        if (n > maxVal){
            maxVal = n
        }
    }
    return maxVal
}

console.log(max(1,2,3,4,5,6,7,8,9,10)) //10
console.log(max(1, 6, 9, 3, 88))  //88

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0)
}

function maxx(...numbers) {
  return Math.max(...numbers)
}

console.log(sum(1, 2, 7, 9, 22))
console.log(maxx(5, 3, 8, 9))

function greet(message, ...names) {
  console.log(message + ", " + names.join(", "))
}

greet("Hello", "Alice", "Bob", "Costas") //Hello, Alice, Bob, Costas