/*
  Faça um programa que tenha um menu e apresenta a seguinte mensagem: 

  Olá usuário! Digite a opção desejada:

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa

  ---
  O Programa deverá capturar o número digitado pelo usuário
  e mostrar os seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista.
  Caso o usuário digite 2, ele poderá ver os itens cadastrados.
    Se não houver nenhum item cadastrado, mostrar a mensagem:
      "Não existe item cadastrado."
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/


/*

------------- Com if e else ----------


let menu
let items = []

while(items != 3) {

  menu = Number(prompt(`
  Olá usuário! Digite a opção desejada:
  
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `))

  if(menu == 1) {
    let item = prompt("Digite o nome do item")
    items.push(item)
  } 

  else if(menu == 2) {

    if(items.length == 0){
      alert("Não existe itens cadastrados")
    } else {
      alert(items)
    }
    
  }

  else {
    alert("Programa encerrado.")
  }

}

*/

// Com SWITCH 

let menu
let items = []

while(items != 3) {

  menu = Number(prompt(`
  Olá usuário! Digite a opção desejada:
  
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `))

switch(menu) {
  case 1:
    let item = prompt("Digite o nome do item")
    items.push(item)
    break;
  
  case 2:
    if(items.length == 0){
      alert("Não existe itens cadastrados")
    } else {
      alert(items)
    }
    break;
  
  case 3:
    alert("Programa encerrado.")
    break;
  
  default:
    alert("Opção inválidade. Tente novamnte")
}

}