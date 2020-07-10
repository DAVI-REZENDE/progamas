
var marker = document.querySelector('#marker')
var item = document.querySelectorAll('nav ul li a')

function indicator(e){
    marker.style.left = e.offsetLeft+"px"
    marker.style.width = e.offsetWidth+"px"
}

item.forEach(link => {
    link.addEventListener('click', (e) =>{
        indicator(e.target)
    })
})


// Scroll bar

// let progress = document.getElementById('progressbar')
// let totalHeight = document.body.scrollHeight - window.innerHeight;

// window.onscroll = function(){
//     let progressHeight = (window.pageYOffset / totalHeight) * 100

//     progress.style.height = progressHeight + "%"
// }

// parallax

var parallax = new Rellax('.parallax')

let show = true

const menuSection = document.querySelector('.menu-section')
const menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show
} )

$(".menu-content nav ul li a").click(() => {
   menuSection.classList.remove("on")
   document.body.style.overflow = "initial"
   document.body.style.overflowX = "hidden"
    
})
