const arr = [] //Δημιουργία κενού πίνακα

const arr1 = [1, 2, 3, 4,5] //Populated array

const arr2 = [1, "Alice", 3.4, true] //Ο πίνακας μπορεί να περιέχει διάφορους τύπους δεδομένων, error prone

const sparseArray = [1, , , 4] //Αραιός πίνακας, οι κενές θέσεις είναι undefined, το πλήθος των στοιχείων είναι 4 αλλά το length είναι 5

const arr3 = [,,,] //Δημιουργία πίνακα με 3 κενές θέσεις, το length είναι 3

const arr4 = Array(3) //Δημιουργία πίνακα με constuctor function με 3 κενές θέσεις, το length είναι 3, η προτίμηση είναι η χρήση των [] για τη δημιουργία πινάκων

const grid = [
    [1, 2, 3],
    [4, 5, 6]
] //Πίνακας πολλαπλών διαστάσεων
const grid2 = [ [1,2], [3,4], [5,6] ] //Πίνακας πολλαπλών διαστάσεων

const objArr = [{id : 1} , {id : 2}, {id : 3}] //Πίνακας αντικειμένων

console.log(arr1[0]) //1
console.log(arr2[1]) //Alice
console.log(sparseArray[1]) //undefined
console.log(arr3.length) //3

//Προσπέλαση πίνακα
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

//Προσπέλαση πίνακα με for...of
for (const el of arr1) { //χρησιμοποιούμε const γιατί δεν αλλάζουμε την τιμή του el
    console.log(el)
}

//Προσπέλαση 2D πίνακα
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j])
    }
}

//Προσπέλαση 2D πίνακα με for...of
for (const row of grid) {
    for (const el of row) {
        console.log(el)
    }
}

