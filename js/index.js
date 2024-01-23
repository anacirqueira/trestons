/*
import { Router } from './router.js'

const router = new Router()
router.add('/', 'pages/home.html')
router.add('/quemsomos', 'pages/quemsomos.html')
router.add('/servicos', 'pages/servicos.html')
router.add('/contato', 'pages/contato.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
*/

const menuItens = document.querySelectorAll('nav a')

menuItens.forEach(item => {
  item.addEventListener('click', scroll);
})

function scroll(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;
  
  window.scroll({
    top: to - 110,
    behavior: "smooth",
  });
}
