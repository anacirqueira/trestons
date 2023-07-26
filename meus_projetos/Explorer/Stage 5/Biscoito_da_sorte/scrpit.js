const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTentar = document.querySelector('#btnTentar')
const btnReset = document.querySelector('#btnReset')
const msg = document.querySelector('.text p')

const frase = [
  'Alguns biscoitos da sorte não contêm nenhuma sorte',
  'Abençoadas são as crianças pois elas vão herdar o débito nacional',
  'Não seja um c#zão',
  'Pegue outro biscoito da sorte',
  'Pare de enrolar - comece amanhã',
  'A maior de todas as torres começa no solo',
  'Todas as coisas são difíceis antes de se tornarem fáceis'
];

const randomFrase = frase[Math.round(Math.random() * frase.length)];

function toggleSreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleTryClick() {
  toggleSreen()
  msg.innerText = `${randomFrase}`
}

function handleNew() {
  toggleSreen()
  randomFrase = frase[Math.round(Math.random() * frase.length)];
}

btnTentar.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleNew)
