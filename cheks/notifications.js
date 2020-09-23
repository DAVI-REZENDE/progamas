const closePermision = document.querySelector('#close-permission')
const areaPermission = document.querySelector('.notification-permission')

closePermision.addEventListener("click", closeAreaPermisions)

function closeAreaPermisions() {
    areaPermission.style.display = 'none'
}