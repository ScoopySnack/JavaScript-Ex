const initial = [1, 2, 3];

const copy = [...initial]; // [1, 2, 3]
console.log(copy);
//Ο Spread operator(...)  μπορεί να χρησιμοποιηθεί για να αντιγράψει έναν πίνακα. Στην περίπτωση αυτή, ο πίνακας initial αντιγράφεται στον πίνακα copy.
//Ο πίνακας copy είναι ένας ανεξάρτητος πίνακας από τον initial, δηλαδή αν αλλάξει ο initial, δεν αλλάζει ο copy και αντιστρόφως.   

const extended = [0, ...initial, 4]; // [0, 1, 2, 3, 4], shallow copy

const chars = [..."Hello"]

console.log(extended); // [0, 1, 2, 3, 4]
console.log(chars); // ["H", "e", "l", "l", "o"]
//Ο Spread operator(...) μπορεί να χρησιμοποιηθεί για να επεκτείνει έναν πίνακα. Στην περίπτωση αυτή, ο πίνακας initial επεκτείνεται με τον πίνακα extended. Ο πίνακας extended περιέχει τα στοιχεία του initial πίνακα, το 0 και το 4. Ο πίνακας extended είναι ένας ανεξάρτητος πίνακας από τον initial, δηλαδή αν αλλάξει ο initial, δεν αλλάζει ο extended και αντιστρόφως.

