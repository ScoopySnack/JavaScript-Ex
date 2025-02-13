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
console.log(result)

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
console.log(areaCircle(5).toFixed(2))


//p3

