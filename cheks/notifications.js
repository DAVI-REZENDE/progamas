const acceptPermision = document.querySelector('#permission-button')
const closePermision = document.querySelector('#close-permission')
const areaPermission = document.querySelector('.notification-permission')

closePermision.addEventListener("click", closeAreaPermisions)

acceptPermision.addEventListener("click", getPermition)

function closeAreaPermisions() {
    areaPermission.style.display = 'none'
}

function getPermition() {
    closeAreaPermisions()
    Notification.requestPermission();
    sendNotifycation()
}

function sendNotifycation() {
    const options = {
        body: 'Seus a fazeres estão te esperando',
    }

    var n = new Notification('Oii, vamos trabalhar?',options);
    console.log(n);
}

function afterAccept() {
    if(Notification.permission === 'granted'){
        areaPermission.style.display = 'none'
    }
}

afterAccept()