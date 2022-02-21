
function reload() {
    loadNote();
    screenNote();
}

let userNotes = [];

function saveNote() {
    let userInput = document.getElementById('userInput').value;
    if (userInput) {
        userNotes.push(userInput);
        screenNote();
        saveLocal();
        userInput = document.getElementById('userInput').value = '';
    } else {
        alert("Write your Note")
    }

}

function screenNote() {
    let noteUser = document.getElementById('note_user');
    noteUser.innerHTML = '';
    for (let i = 0; i < userNotes.length; i++) {
        noteUser.innerHTML += `
        <div class="note note-p-trash">
            <p>${userNotes[i]}</p>
            <i onclick = "delateNote(${i})" class="fa-solid fa-trash-can fa-xl"></i>
        </div>
        `;
    }
}

function delateNote(positon) {
    userNotes.splice(positon, 1);
    screenNote();
    saveLocal();
}

//      ...........................LOCAL STORAGE........................

function saveLocal() {
    let noteText = JSON.stringify(userNotes);
    localStorage.setItem('Key', noteText);
}

function loadNote() {
    let noteText = localStorage.getItem('Key');

    if (noteText) {
        userNotes = JSON.parse(noteText);
    }
}
