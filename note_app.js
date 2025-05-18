const readlineSync = require('readline-sync')
var fs = require('fs')


function showMenu() {
    console.log("1. Add a note\n2. List all notes \n3. Read a note\n"+
        "4. Delete a note\n5. Update a note\n6. Exit")
    let choice = readlineSync.question("Enter your choice: ")
    return choice
}


function addNote(notes) {
    let newTitle = readlineSync.question("Enter note title: ")
    let newBody = readlineSync.question("Enter note body: ")
    const timeStamp = new Date().toISOString()

    let addedNote = {title: newTitle, body: newBody, time: timeStamp}
    notes.push(addedNote)

    fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2))
    console.log("Note added")
    
}


function listNotes(notes) {
        notes.forEach((note, i) => {
        console.log(`\n${i+1}. ${note.title}: ${note.body}\n`);
    })
} 


function readNote(notes) {
    titleToRead = readlineSync.question("Enter note title: ")
    note = notes.find(note => note.title == titleToRead)
    console.log(`\nTitle: ${note.title}\nBody: ${note.body}\nAdded on: ${note.timeStamp}\n`)
}


function removeNote(notes) {
    let titleToDelete = readlineSync.question("Enter note title: ")
    notes = notes.filter(note => note.title != titleToDelete)
    fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2))
    console.log("Note deleted successfully!")
}


function updateNote(notes) {
    let titleToUpdate = readlineSync.question("Enter note title: ")
    note = notes.find(note => note.title == titleToUpdate)
    note.body = readlineSync.question("Enter new note body: ")
    fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2))
    console.log("Note updated successfully")
}




function main() {
    while (true){
    const choice = Number(showMenu())
    const raw = fs.readFileSync('notes.json', 'utf8');
    const notes = JSON.parse(raw);
    const action = {
        1: () => addNote(notes),
        2: () => listNotes(notes),
        3: () => readNote(notes),
        4: () => removeNote(notes),
        5: () => updateNote(notes),
        6: () => {console.log("bye");
            process.exit(0)
        }}
    if (action[choice]) {
        action[choice]()
    } else 
    console.log("choose a num between 1 -6")
}}


main()