//Add in List
const inputAdd = document.querySelector('#add')
const list = document.getElementById('list')

inputAdd.addEventListener('keyup', (key) => {
    const pressed = key.key
    const VerifyIfKeyEnterOrOther = pressed === 'Enter'

    if(VerifyIfKeyEnterOrOther){
        const InputAddValue = inputAdd.value
        const newItem = document.createElement('li')
        newItem.classList.add('item')
        newItem.dataset.id = InputAddValue
        toggleActive(newItem)
        newItem.innerHTML = InputAddValue

        list.append(newItem)

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

function toggleActive(item) {
    // item.classList.toggle('active')
    item.addEventListener('click', () => {
        item.classList.toggle('active')
    })
}

function handleHasItemsInLocalStorage() {
    const items = localStorage.getItem('items')
    const hasItems = items != null

    console.log(items);
}

handleHasItemsInLocalStorage()