//Εισαγωγή στην JavaScript & JavaScript Data Types

//p1
//Ex1 Δηλώστε μία μεταβλητή ‘name‘ τύπου string και ορίστε το όνομά σας σε αυτή. Εκτυπώστε ένα μήνυμα χρησιμοποιώντας συνένωση όπως “Hello, [όνομα]! “
let name = 'Angeliki'
console.log(`Hello ${name}!`)


//Ex2 Δηλώστε δύο μεταβλητές num1 και num2 με αριθμητικές τιμές. Υπολογίστε το άθροισμά τους και εκτυπώστε το αποτέλεσμα
let num1 = 4
let num2 = 8
function add(a,b){
    return a + b
}
let result = add(num1,num2)
console.log(result) //Επιστρέφει 12

//Ex3 Δηλώστε μια μεταβλητή isTrue με τιμή boolean. Εκτύπωση "Είναι αλήθεια!" αν η isTrue είναι true και "Είναι ψευδές!" σε διαφορετική περίπτωση. Με τριαδικό τελεστή
let isTrue = true
isTrue ? console.log("TRUE") : console.log("FALSE")

//p2

//Ex1 Δημιουργήστε έναν πίνακα που ονομάζεται cities με τις τιμές “Athens", “London", “Paris". Προσθέστε “Berlin" στο τέλος του πίνακα. Διασχίστε τον πίνακα και εκτυπώστε κάθε πόλη
const cities = ["Athens", "London", "Paris"]
cities.push("Berlin")
cities.forEach(city => console.log(city));

//Ex2 Δημιουργήστε ένα object user με ιδιότητες, name, age, city. Εκτυπώστε ένα μήνυμα χρησιμοποιώντας αυτές τις ιδιότητες. Προσθέστε μια μέθοδο hello() που εκτυπώνει έναν χαιρετισμό χρησιμοποιώντας το name. Καλέστε τη μέθοδο hello()
const user= {
    username: "Angeliki",
    age: 26,
    city: "Salamis"
}

function hello(){
    console.log(`Hello ${user.username}`)
}

hello()

const user2 = {
    name: "Αλέξης",
    age: 25,
    city: "Αθήνα",
    hello: function() {
        console.log(`Γεια σου, είμαι ο/η ${this.name}!`);
    }
};

user2.hello

//Ex3 Γράψτε μια συνάρτηση υπολογισμού του εμβαδόν ενός κύκλου που να παίρνει την ακτίνα ενός κύκλου ως παράμετρο και να επιστρέφει το εμβαδόν (πr2). Καλέστε τη συνάρτηση με ακτίνα 5
function areaCircle(r){
    return Math.PI * (r**2)
}
console.log(areaCircle(5).toFixed(2)) //Επιστρέφει 78.54


//p3 - Arrays

//Ex1 Γράψτε μια συνάρτηση που παίρνει ως παράμετρο έναν πίνακα και επιστρέφει έναν νέο πίνακα που περιέχει μόνο τις μοναδικές τιμές (χωρίς διπλότυπα) 

function uniqueArray(arr){
    return [...new Set(arr)]
}

const arr = [1,2,3,4,4,5,6,6]
console.log(uniqueArray(arr)) //Επιστρέφει [1,2,3,4,5,6]

//Ex2 Γράψτε μια συνάρτηση που να παίρνει ως παράμετρο έναν nested πίνακα και επιστρέφει έναν μονοδιάστατο πίνακα που να περιέχει όλα τα στοιχεία.

function flatArray(arr){
    return arr.flat()
}

const nestedArr = [1,2,[3,4],[5,6]]
console.log(flatArray(nestedArr)) //Επιστρέφει [1,2,3,4,5,6]

// Γράψτε μια συνάρτηση που να παίρνει ως παράμετρο έναν πίνακα και να επιστρέφει τον αριθμό των στοιχείων του πίνακα
function countElemets(arr){
    return arr.length
}

const arr2 = [1,4,3,75,9]
console.log(countElemets(arr2)) //Επιστρέφει 5

//Γράψτε μια συνάρτηση που να παίρνει ως παράμετρο έναν πίνακα και να επιστρέφει το άθροισμα των στοιχείων του πίνακα
function sumElements(arr){
    return arr.reduce((acc,curr) => acc + curr, 0) //Η reduce επιστρέφει έναν μόνο αριθμό (το άθροισμα), το curr είναι το τρέχον στοιχείο του πίνακα, το acc είναι το άθροισμα των προηγούμενων στοιχείων. Το 0 είναι η αρχική τιμή του accumulator, αν δεν δοθεί η αρχική τιμή του accumulator είναι το πρώτο στοιχείο του πίνακα. Η reduce συντασσεται ως εξής: arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue) και επιστρέφει το άθροισμα των στοιχείων του πίνακα
}
    // β' τρόπος

function sumElements2(arr){
    let sum = 0
    for (let index in arr) {
        sum += arr[index]
    }
    return sum
}

const arr3 = [1,2,3,4,5]
console.log(sumElements(arr3)) //Επιστρέφει 15
console.log(sumElements2(arr3)) //Επιστρέφει 15

//p4 - Arrays(2)

//Ex1 Γράψτε μια συνάρτηση που παίρνει έναν πίνακα και ένα μέγεθος υποπίνακα και χωρίζει τον πίνακα σε υποπίνακες του καθορισμένου μεγέθους.
function chunkArr(arr,size){
    let chunkArr = []
    for (let i = 0; i < arr.length; i += size) {
        chunkArr.push(arr.slice(i, i + size))
    } //Η push προσθέτει στο τέλος του πίνακα το στοιχείο που δίνεται ως όρισμα, και η slice επιστρέφει ένα νέο πίνακα που περιέχει τα στοιχεία από την αρχή μέχρι το τέλος του πίνακα, όπου το τέλος είναι το όρισμα που δίνεται στην slice
    return chunkArr
}
 
console.log(chunkArr(arr3,2)) //Επιστρέφει [[1,2],[3,4],[5]]
console.log(chunkArr(arr3,3)) //Επιστρέφει [[1,2,3],[4,5]]

// Γράψτε μια συνάρτηση που παίρνει έναν πίνακα και επιστρέφει έναν νέο πίνακα με τα στοιχεία του αντιστρόφως
function reverseArr(Arr){
    let reverseArr = []
    for (let i = Arr.length - 1; i >= 0; i--){
        reverseArr.push(Arr[i])
    }
    return reverseArr
}

console.log(reverseArr(arr3)) //Επιστρέφει [5,4,3,2,1]

// Γράψτε μια συνάρτηση που παίρνει έναν πίνακα και επιστρέφει τον μεγαλύτερο αριθμό του πίνακα
function maxNum(arr){
    return Math.max(...arr)
}
console.log(maxNum(arr3)) //Επιστρέφει 5

// Γράψτε μια συνάρτηση που παίρνει έναν πίνακα και επιστρέφει τον μικρότερο αριθμό του πίνακα
function minNum(arr){
    return Math.min(...arr)
}
console.log(minNum(arr3)) //Επιστρέφει 1

// Γράψτε μια συνάρτηση που παίρνει έναν πίνακα και επιστρέφει τον αριθμό των θετικών αριθμών του πίνακα
function countPositive(arr){
    return arr.filter(num => num > 0).length
}
 //β' τρόπος
function countPositive2(arr){
    let count =0
    for(let num of arr){
        if(num > 0){
            count++
        }
    }
    return count
}
console.log(countPositive(arr3)) //Επιστρέφει 3
console.log(countPositive2(arr3)) //Επιστρέφει 3

//Γράψτε μια συνάρτηση που παίρνει έναν πίνακα και επιστρέφει τον αριθμό των άρτιων αριθμών του πίνακα
function countEven(arr){
    let count = 0
    for (let num in arr){
        if(num % 2 === 0){
            count++
        }
    }
    return count
}
function countEven2(arr){
    return arr.filter(num => num%2===0).length //Η filter επιστρέφει έναν νέο πίνακα με τα στοιχεία που πληρούν την συνθήκη που δίνεται ως όρισμα
}
console.log(countEven(arr3)) //Επιστρέφει 2
console.log(countEven2(arr3)) //Επιστρέφει 2

//Γράψτε μια συνάρτηση που παίρνει έναν πίνακα και επιστρέφει τον αριθμό των περιττών αριθμών του πίνακα(αντίστοιχα με το προηγούμενο)
function countOdd(arr){
    return arr.filter(num => num%2!==0).length
}

console.log(countOdd(arr3)) //Επιστρέφει 3

function countOdd2(arr){
    let count = 0
    for (let num in arr){
        if(num % 2 !== 0){
            count++
        }
    }
    return count
}
console.log(countOdd2(arr3)) //Επιστρέφει 3

//Ex2 Γράψτε μια συνάρτηση που παίρνει δύο πίνακες και επιστρέφει έναν νέο πίνακα που περιέχει στοιχεία που είναι κοινά και στους δύο πίνακες

function commonElements(arr1,arr2){
    let commonArr = []
    for (let num of arr1){
        if(arr2.includes(num)){ //Η includes επιστρέφει true αν το όρισμα που δίνεται υπάρχει στον πίνακα
            commonArr.push(num)
        }
    }
    return commonArr
}

function commonElements2(arr1,arr2){
    return arr1.filter(num => arr2.includes(num))
}

const arr4 = [1,2,3,4,5]
const arr5 = [3,4,5,6,7]
console.log(commonElements(arr4,arr5)) //Επιστρέφει [3,4,5]
console.log(commonElements2(arr4,arr5)) //Επιστρέφει [3,4,5]

//p5 - Objects

//Ex1 Γράψτε μια συνάρτηση που παίρνει ένα αντικείμενο και έναν πίνακα από keys και επιστρέφει ένα νέο αντικείμενο με μόνο τα ζεύγη key-value των οποίων τα keys βρίσκονται στον πίνακα 
function pick(obj,keys){
    return Object.fromEntries(Object.entries(obj).filter(([key,value]) => keys.includes(key)))
    //Η Object.entries επιστρέφει έναν πίνακα με τα ζεύγη key-value του αντικειμένου, η filter επιστρέφει έναν νέο πίνακα με τα ζεύγη key-value που πληρούν την συνθήκη που δίνεται ως όρισμα, και η fromEntries μετατρέπει τον πίνακα με τα ζεύγη key-value σε αντικείμενο 
}

//β' τρόπος
function pick2(obj,keys){
    let newObj = {}
    for (let key of keys){
        newObj[key] = obj[key]
    }
    return newObj
}

const obj = {
    name: "Angeliki",
    age: 26,
    city: "Salamis"
}
keys = ["name","age"]

console.log(pick(obj,keys)) //Επιστρέφει {name: "Angeliki", age: 26}
console.log(pick2(obj,keys)) //Επιστρέφει {name: "Angeliki", age: 26}

keys2= ["username","age"] //Αν το keys2 περιέχει κάποιο key που δεν υπάρχει στο αντικείμενο, τότε δεν θα εμφανιστεί στο νέο αντικείμενο

console.log(pick(obj,keys2)) //Επιστρέφει {age: 26}
console.log(pick2(obj,keys2)) //Επιστρέφει {age: 26}

//Ex2 Γράψτε μια συνάρτηση που παίρνει ως είσοδο ένα αντικείμενο και μια συνάρτηση mapping και επιστρέφει ένα νέο αντικείμενο όπου οι τιμές είναι το αποτέλεσμα της εφαρμογής της συνάρτησης mapping στις αρχικές τιμές 
function fn(){
    return 
}

function mapValues(obj,fn){

}