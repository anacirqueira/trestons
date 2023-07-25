const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTentar = document.querySelector("#btnTentar")
const btnReset = document.querySelector("#btnReset")

function handleTryClick(event) {
  screen1.classList.add("hide")
  screen2.classList.remove("hide")
}

function handleReset() {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
}

btnTentar.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleReset)
