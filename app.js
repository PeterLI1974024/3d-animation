const card = document.querySelector(".card")
const container = document.querySelector(".container")
const title =  document.querySelector(".title")
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase button')
const despriction = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')

container.addEventListener('mousemove',(e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX)  / 25
    let yAxis = (window.innerHeight / 2 - e.pageY)  / 25
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

    container.addEventListener('mouseenter',(e)=>{
    card.style.transition = 'none'
    sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)'
    title.style.transform = "translateZ(150px)";
})

container.addEventListener('mouseleave',(e)=>{
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)'
})

