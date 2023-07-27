const frase = [
  'Alguns biscoitos da sorte não contêm nenhuma sorte',
  'Abençoadas são as crianças pois elas vão herdar o débito nacional',
  'Não seja um c#zão',
  'Pegue outro biscoito da sorte',
  'Pare de enrolar - comece amanhã',
  'A maior de todas as torres começa no solo',
  'Todas as coisas são difíceis antes de se tornarem fáceis',
];

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const abrirBiscoito = document.querySelector('#abrirBiscoito')
const novoBiscoito = document.querySelector('#novoBiscoito')
const msg = document.querySelector('.text p')

let randomFrase = frase[Math.round(Math.random() * frase.length)];

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

const handleTryClick = () => {
  toggleScreen()
  msg.innerText = `${randomFrase}`
}

function handleNew() {
  toggleScreen()
  location.reload()
  randomFrase = frase[Math.round(Math.random() * frase.length)];
}

abrirBiscoito.addEventListener('click', handleTryClick);
novoBiscoito.addEventListener('click', handleNew);
