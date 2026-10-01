// DOM
const imagem = document.querySelector('#troca')
const sport = document.querySelector('#sport')
const suv = document.querySelector('#suv')
const hatch = document.querySelector('#hatch')
const picape = document.querySelector('#picape')

// Event
sport.addEventListener('click', troca_sport)
suv.addEventListener('click', troca_suv)
hatch.addEventListener('click', troca_hatch)
picape.addEventListener('click', troca_picape)

// Action
function troca_sport(){
    imagem.src = 'image/sport.webp'
}
function troca_suv(){
    imagem.src = 'image/suv.webp'
}
function troca_hatch(){
    imagem.src = 'image/hatch.avif'
}
function troca_picape(){
    imagem.src = 'image/picape.jpg'
}

