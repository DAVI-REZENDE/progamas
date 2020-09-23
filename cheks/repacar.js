const addNote = document.querySelector('.new input')
const container = document.querySelector('.repacar')

addNote.addEventListener("keyup", newNote)

window.onload = getNotesInLocalStorage

function newNote(key){
    if(key.key === 'Enter' && addNote.value !== ''){
        createNewNote(addNote.value)
        addNote.value = ''
    }
}

function createNewNote(value, text) {
    const note = document.createElement('div')
    note.classList.add('note')
    note.dataset.id = value

    const title = document.createElement('div')
    title.classList.add('title')
    title.innerText = 'Repaçar em: '+value

    const textarea = document.createElement('textarea')
    if(text == undefined){
        textarea.value = ''
    }else{
        textarea.value = text
    }

    const buttonSave = document.createElement('button')
    buttonSave.classList.add('save')
    buttonSave.innerText = 'Salvar'
    
    note.append(title)
    note.append(textarea)
    note.append(buttonSave)
    container.prepend(note)

    buttonSave.onclick = saveNote
}

function saveNote(item){
    const nameNote = item.path[1].dataset.id
    const textNote = item.path[1].querySelector('textarea').value
    addItemInLocalStorage()
}

function addItemInLocalStorage(name, text){
    const notesAll = document.querySelectorAll('.note')
    let notesArray = []

    notesAll.forEach((item)=>{
        const title = item.dataset.id
        const text = item.querySelector('textarea').value

        console.log(title, text);
        notesArray.push({title: title, text: text})
    })
    console.log(notesArray);

    localStorage.setItem('notes', JSON.stringify(notesArray))
    alert('Salvo com sucesso!')
}

function getNotesInLocalStorage() {
    const notes = JSON.parse(localStorage.getItem('notes')) || []

    notes.forEach((note) => {

        createNewNote(note.title, note.text)

    })

}