const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];

const monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'];

let notes = [];
let count =0;

window.addEventListener('DOMContentLoaded', function(){

    this.setInterval(printGRDate, 1000);
    

    this.document.querySelector('#addNoteBtn').addEventListener('click', function(){
        onInsertHandler({key: count + 1, note: document.querySelector('#inputNote').value.trim(), softDeleted: false});
    })

    this.document.querySelector('#inputNote').addEventListener('keyup', function(event){
        if(event.key === 'Enter'){

        onInsertHandler({key: count + 1, note: event.target.value.trim(), softDeleted: false});
        }
    })

})
