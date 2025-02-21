const cities = ['New York', 'San Francisco', 'Miami', 'Chicago', 'Los Angeles'];
const numbers = [10, 101, 103, 77, 99, 123, 690, 590]

// Sort the cities array alphabetically
console.log(cities.sort()); //ASCII based sorting

// Sort the numbers array in ascending order
console.log(numbers.sort()); //Δεν δίνει το αναμενόμενο αποτέλεσμα, γιατι βασίζεται στο ASCII όχι στον αριθμό

// numbers.sort(function(a,b){
//     if(a>b) return 1;
//     if(a<b) return -1;
//     if(a===b) return 0;
// }) 

//Ascending order
numbers.sort(function(a,b){
    return a-b;
})

//Descending order
numbers.sort(function(a,b){
    return b-a;
})

//Η λογική της compare function είναι ότι αν το α είναι μεγαλψτερο από το β, τότε επιστρέφει 1, αν το α είναι μικρότερο από το β, τότε επιστρέφει -1, αν είναι ίσα, τότε επιστρέφει 0

console.log(numbers); 

console.log(numbers.reverse()); //Αντιστροφή του πίνακα