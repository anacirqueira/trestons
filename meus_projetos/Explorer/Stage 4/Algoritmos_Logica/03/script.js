/*

Capturar 2 números e fazer operações matemáticas 
Soma, subtração, multiplicação, 
Divisão e resto da divisão.

*/

let primeiroNumero = prompt("Digite o primeiro numero: ")
let segundoNumero = prompt("Digite o segundo numero: ")

primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)

const soma = primeiroNumero + segundoNumero
const sub = segundoNumero - segundoNumero
const multi = segundoNumero * segundoNumero
const divisao = segundoNumero / segundoNumero
const resto = segundoNumero % segundoNumero

alert("A soma é igual a: " + soma)
alert("A subtração é igual a: " + sub)
alert("A multiplicação é igual a: " + multi)
alert("A divisão é igual a: " + divisao)
alert("O resto da divisão é igual a: " + resto)