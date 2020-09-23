//Variables
const items = document.querySelectorAll(".item")
const add = document.querySelector('.input input')
const checks = document.querySelector(".checks")


//Events
items.forEach((item) => {
    item.addEventListener('click', toggleClass) 
})

add.addEventListener("keyup", addItem)

//Functions
function toggleClass(item){
    item.currentTarget.classList.toggle("active")
    setLocalStorage()
}

function addItem(data) {
    const verifyKey = data.key === 'Enter'
    const ExistsValue = add.value !== ''

    if(verifyKey && ExistsValue){
        const newItem = {item: add.value, active: false}
        createNewItem(newItem)
    }
}

function createNewItem(data) {
    const div = document.createElement("div")
    div.classList.add("item")

    const title = document.createElement("strong")
    title.innerHTML = data.item
    title.classList.add('title')

    const status = document.createElement("div")
    status.classList.add('status')

    const buttonClose = generateButtonRemove()

    if(data.active){
        div.classList.add('active')
    }

    div.append(title)
    div.append(status)
    div.append(buttonClose)
  
    checks.append(div)
    div.onclick = toggleClass
    add.value = ''
    setLocalStorage()
}

function setLocalStorage() {
    const itemsRR = document.querySelectorAll('.item')
    let itemsArray = []

    itemsRR.forEach((item)=>{
        const verifyLength = item.classList.length == 2
        const text = item.querySelector('.title').innerText

        if(verifyLength){
            const newItem = {item: text, active: true}
            itemsArray.push(newItem)
        }else{
            const newItem = {item: text, active: false}
            itemsArray.push(newItem)
        }
    })
    localStorage.setItem('checks', JSON.stringify(itemsArray))

}

function getLocalStorage() {
    const itemsFromLocalStorage = JSON.parse(localStorage.getItem('checks'))

    const verifyIfNull = itemsFromLocalStorage !== null

    if(verifyIfNull){
        itemsFromLocalStorage.forEach((item)=>{
            createNewItem(item)
        })    
    }
}

async function removeItem(item){
    const itemsFromLocalStorage = await JSON.parse(localStorage.getItem('checks'))
    await localStorage.clear()

    const id = item.currentTarget.dataset.id -1
    itemsFromLocalStorage.splice(id, 1)
    const json = JSON.stringify(itemsFromLocalStorage)
    console.log(json);
    await localStorage.setItem('checks', json)
}


let id = 0
function generateButtonRemove() {

    id++
    const buttonClose = document.createElement("span")
    buttonClose.classList.add('close')
    buttonClose.innerHTML= 'x'
    buttonClose.dataset.id = id
    buttonClose.onclick = removeItem

    return buttonClose
}


getLocalStorage()