const ages = [20, 30, 50, 18, 34]

// console.log(Math.max(...ages)); // 50
// console.log(Math.min(...ages)); // 18

function getMin(arr){
    if (!arr) return

    let minVal = Math.min(...arr)
    let minPosition = arr.indexOf(minVal)
    return [minVal, minPosition]
}

//Αντίστοιχα για το max
function getMax(arr){
    if (!arr) return

    let maxVal = Math.max(...arr)
    let maxPosition = arr.indexOf(maxVal)
    return [maxVal, maxPosition]
}


console.log(getMin(ages)); // [18, 3]
console.log(getMax(ages)); // [50, 2]
// Προσοχή: Το Math.min() και Math.max() δεν δουλεύουν με arrays, πρέπει να τα κάνουμε spread πρώτα