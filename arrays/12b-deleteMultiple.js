const arr = [1, 2, 3, 2, 4, 5, 2, 6, 7, 2, 8, 9, 2];

const deleteBackwars = (arr, value) => {
    if (!arr) return;
    
    let i = arr.length;

    while (i--){
        if (arr[i]===value){
            arr.splice(i, 1);
        }
        //i--
    }
}

deleteBackwars(arr, 2);
console.log(arr); // [1, 3, 4, 5, 6, 7, 8, 9]