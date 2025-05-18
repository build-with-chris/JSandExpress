const express = require('express')
var fs = require('fs')
const morgan = require('morgan')
var app = express();
const DATA_FILE = 'notes.json'


app.use(morgan('tiny'))
app.use(express.json());


function loadNotes() {
    const raw = fs. readFileSync(DATA_FILE, 'utf8');
    const notes = JSON.parse(raw)
    return Array.isArray(notes) ? notes : []
}

function saveNotes(notes) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(notes, null,2));
}

app.get('/notes', (req, res) => {
    const notes = loadNotes()
    res.json(notes)

});

app.route('/notes/:title')
    .get((req, res) => {
        const title = req.params.title;
        const notes = loadNotes()

        const note = notes.find(note => note.title = title)
        if (note) res.json(note)
        else res.status(404).json({error : 'note not found'})
        })
        
    .put((req, res) => {
        const title = req.params.title;
        const { body : newBody } = req.body;
        const notes = loadNotes();

        const idx = notes.findIndex(note => note.title === title);
        if (idx === -1) {
            return res.status(404).json({error: "note not found"})
        }
        notes[idx].body = newBody;
        saveNotes(notes)
        res.json({message: "Note updated", note: notes[idx]})
    })

    .delete((req, res) => {
        const title = req.params.title;
        let notes = JSON.parse(fs.readFileSync('notes.json', 'utf8'));
        notes = notes.filter(note => note.title !== title)
        saveNotes(notes)
        res.json({message:" deleted note"})

    })


app.post('/addnote', (req, res) => {
    const { title, body } = req.body;
    const notes = loadNotes()

    const timeStamp = new Date().toISOString();
    const newNote = { title, body, time: timeStamp};
    notes.push(newNote);
    saveNotes(notes);    
    res.status(201).json({message: "new note added", note: newNote})
});



app.listen(3000, () => {
    console.log('🚀 Server on http://localhost:3000/notes');
  });