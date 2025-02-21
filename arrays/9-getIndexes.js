const arr = [1, 2, 4, 5, 2, 6, 7, 2, 5, 8, 9, 9, 2]

//function να επιστρεφει ένα πίνακα με τις θέσεις στις οποίες βρίσκεται ένας συγκεκριμένος αριθμός

function getIndexes(arr, val) {
    const indexes = []
    // arr.forEach((v, index) => {
    //     if (v === val) {
    //         indexes.push(index)
    //     }
    // })

    arr.forEach(function(v, index) {
        if (v === val) {
            indexes.push(index)
        }
    })

    return indexes
}

console.log(getIndexes(arr, 2)) // [1, 4, 7, 12]
console.log(getIndexes(arr, 9)) // [10, 11]