const btnsErr = document.querySelectorAll('.err')
const btnsOk = document.querySelectorAll('.ok')

btnsErr.forEach(btn => {
    btn.onclick = bgErr
})

btnsOk.forEach(btn => {
    btn.onclick = bgOk
})

function bgErr(data) {
    const li = data.path[2].querySelector('li')
    li.classList.remove('initial')
    li.classList.remove('certo')
    li.classList.add('errado')
}

function bgOk(data) {
    const li = data.path[2].querySelector('li')
    li.classList.remove('initial')
    li.classList.remove('errado')
    li.classList.add('certo')

} 