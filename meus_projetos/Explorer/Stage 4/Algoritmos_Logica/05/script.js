/*
  Capture 10 itens para compor uma lista de compras.

  Após capturar os 10 itens, imprima-os, separando por vírgula.
*/

let items = [];

for(let item = 0; item < 10; item ++) {
  let itemName = prompt("Digite um item " + (item + 1))

  items[item] = itemName
}

alert(items)