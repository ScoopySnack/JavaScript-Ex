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

function printGRDate(){
    const currertDate = new Date();
    const day = daysGR[currertDate.getDay()];
    const date = currertDate.getDate();
    const month = monthsGR[currertDate.getMonth()];
    const year = currertDate.getFullYear();
    const hours = currertDate.getHours();
    const minutes = currertDate.getMinutes();
    const seconds = currertDate.getSeconds();

    const dateStr = `${day}, ${date} ${month} ${year}`; 

    const timeStr = `${(hours<10) ? '0' : ' '}${hours} :${(minutes<10) ? '0' : ' '}${minutes} :${(seconds<10) ? '0' : ' '}${seconds}`;

    document.querySelector('#dateTxt').innerHTML = dateStr + '<br>' + timeStr;
}

/**
 * Controller in MVC.
 * @param {Object} data 
 * @returns nothing if data.note is empty or null
 */

function onInsertHandler(data){
    if(!data.note) return;
    insertNote(data);
    reset();
}

/**
 * Model function, inserts a new note.
 * @param {Object} note 
 */

function insertNote (note){
    notes = [...notes, note]
    count++;
    renderNotes();
}

/*
 *  View rerendering
*/

function renderNotes(){
    const container = document.getElementById('notesWrapper');

    container.innerHTML = notes.map((note) => `<div id="${'noteTemplate' + note.key}" class="flex justify-content-between items-center px-[10px] py-[2px]border-b border-black"> 
        <div id="${'noteInfo' + note.key}" class="flex items-center">
            <input id="${'noteCheck' + note.key}" type="checkbox" class="w-[25px] h-[25px] mr-[5px]" onclick="strikeThrough(${note.key})" ${note.softDeleted ? 'checked' : ''}>
            <label id="${'noteLabel' + note.key}" for="${'noteCheck' + note.key}" class="w-[200px] max-h-[150px] leading-[1.2rem] overflow-hidden break-words whitespace-normal text-base ${note.softDeleted ? 'line-through text-gray-500' : ''}">${note.note}</label>
        </div>
        <button type="button" id="${'noteDelBtn' + note.key}" class="w-[35px] h-[35px]" onclick="deleteNote(${note.key})">X</button>
    </div>`).join("");
}

/*
 *  Model functions
 */

function strikeThrough(key){
    notes = notes.map((note) => 
        note.key === key ? {...note, softDeleted: !note.softDeleted} : {...note}
    )
    renderNotes();
}

function deleteNote (key){
    notes = notes.filter((note) => note.key !== key);
    renderNotes();
}


function reset(){
    document.querySelector('#inputNote').value = ''; // clear input
}