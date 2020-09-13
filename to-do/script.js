//Add in List
let itemsFromLocalStorage = JSON.parse(localStorage.getItem('items')) || []

const inputAdd = document.querySelector('#add')
const list = document.getElementById('list')
const buttonAdd = document.querySelector('.more')
const removeItem = document.querySelectorAll('.close-item')

//Events

buttonAdd.addEventListener('click', () => {
    const valueInput = inputAdd.value
    const verifyIfHasValue = valueInput.length > 0

    if(verifyIfHasValue){
        const newItem = document.createElement('li')

        newItem.classList.add('item')
        newItem.dataset.id = valueInput
        newItem.innerHTML = valueInput

        addItemInListAndLocalStorage(newItem, valueInput)
        
        inputAdd.value = ''
    }

})

inputAdd.addEventListener('keyup', (key) => {
    const pressed = key.key
    const VerifyIfKeyEnterOrOther = pressed === 'Enter'

    if(VerifyIfKeyEnterOrOther){
        const InputAddValue = inputAdd.value

        const newItem = document.createElement('li')

        newItem.classList.add('item')
        newItem.dataset.id = InputAddValue
        newItem.innerHTML = InputAddValue

        addItemInListAndLocalStorage(newItem, InputAddValue)
        
        inputAdd.value = ''
    }
})

//Lista
const items = document.querySelectorAll('.item');

items.forEach(element => {
    const item = element

    item.addEventListener('click', () => {
        item.classList.toggle('active')
    })

});

//Methodos

function addItemInListAndLocalStorage(element, value){

    element.innerHTML += `<div class="close-item" ><i class="fas fa-times"></i></div>`

    toggleActive(element)
    list.append(element)
    verifyItemsInLocalStorage(value)

}

function toggleActive(item) {
    const buttonOfRemove = item.querySelector('.close-item')

    item.addEventListener('click', () => {            
        item.classList.toggle('active')
    })

    buttonOfRemove.addEventListener('click', () => {
        const valueFromItem = item.innerText
        removeItemFromLocalStorage(valueFromItem)
    })
}

function verifyItemsInLocalStorage(value) {

    let items = localStorage.getItem('items')
    const hasInLocalStorage = items != '';

    if(hasInLocalStorage){

        const valueFromLocalStorage = JSON.parse(items)
        valueFromLocalStorage.push({content: value})
        const valueFormated = JSON.stringify(valueFromLocalStorage)

        localStorage.setItem('items', valueFormated)

    }else{
        const valueAdd = [
            {content: value}
        ]
        const items_json = JSON.stringify(valueAdd)

        localStorage.setItem('items', items_json)
    }

}


function handleHasItemsInLocalStorage() {
    const items = localStorage.getItem('items')
    const hasItems = items != ''
    if(hasItems){
        const getItems = JSON.parse(items)
        getItems.forEach((item) => {
            insertFromList(item.content)            
        })
    }    

}

function insertFromList(item){
    const newItem = document.createElement('li')

    newItem.classList.add('item')
    newItem.dataset.id = item
    newItem.innerHTML = `${item}<div class="close-item" ><i class="fas fa-times"></i></div>`
    toggleActive(newItem)

    list.append(newItem)

}

function removeItemFromLocalStorage(id){

    const jsonFromLocalStorage = localStorage.getItem('items')
    const jsonFormated = JSON.parse(jsonFromLocalStorage)
    const index = {content: "Estudar Angular :("}
    let itemToRemoved = jsonFormated.includes(index)

    // jsonFormated.forEach( item => {
    //     itemToRemoved = jsonFormated.indexOf(id)
    // })
    
    console.log(index, itemToRemoved, jsonFormated);
    // localStorage.removeItem(itemToRemoved)


}

handleHasItemsInLocalStorage()
console.log(itemsFromLocalStorage);