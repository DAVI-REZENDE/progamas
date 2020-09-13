//Variables
let items = JSON.parse(localStorage.getItem('items')) || []

const inputAdd = document.querySelector('#add')
const list = document.getElementById('list')
const buttonAdd = document.querySelector('.more')

//Events

buttonAdd.addEventListener('click', () => {
    const valueInput = inputAdd.value
    const verifyIfHasValue = valueInput.length > 0

    if(verifyIfHasValue){
        addNewItemInItems(valueInput)
        inputAdd.value = ''
    }

})

inputAdd.addEventListener('keyup', (key) => {
    const pressed = key.key
    const VerifyIfKeyEnterOrOther = pressed === 'Enter'
    
    if(VerifyIfKeyEnterOrOther){
        const valueInput = inputAdd.value
        const verifyIfHasValue = valueInput.length > 0

        if(verifyIfHasValue){
    
            addNewItemInItems(valueInput)
            inputAdd.value = ''
        }
    }
})

//Methodos

function addNewItemInItems(content){
    const newItem = content

    items.push(newItem)
    addInList()
}

function addInList(){
    list.innerHTML = ''

    items.forEach((item) => {
        
        const itemInList = document.createElement('li')
        itemInList.classList.add('item')
        toggleClassActive(itemInList)
        itemInList.innerHTML = `${item}<div data-id="${item}" class="remove-item" ><i class="fas fa-times"></i></div>`

        const buttonRemove = itemInList.querySelector('.remove-item')
        buttonRemove.onclick = removeItemFromList

        list.append(itemInList)

    })
}

function toggleClassActive(item) {
    item.onclick = () => {
        item.classList.toggle('active')
    }
}

function removeItemFromList(button) {
  
    const position = this.dataset.id
    const index = items.indexOf(position)
    items.splice(index, 1)        
    updateArrayFromList(classItem)
    // const pather = document.querySelector(id)
    // const index = items.indexOf({id: id, content: text})

    console.log(items, index, position);
    
}

function updateArrayFromList(classItem) {
    const toDos = document.querySelectorAll('item')
    console.log(toDos, classItem);
}

console.log(items);