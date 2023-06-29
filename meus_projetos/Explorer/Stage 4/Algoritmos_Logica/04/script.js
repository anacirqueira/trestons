/* 
Solicitar o nome do aluno e as 3 notas do bimestre
Calcular a média daquele aluno

A média positiva deverá ser maior que 6

Se o aluno passou, dar parabéns. 

Se o aluno não passou, motiva-lo a dar o seu melhor
na prova de recuperação.

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let nomeAluno = prompt("Qual seu nome: ")
let nota1 = prompt("Digite a primeira nota: ")
let nota2 = prompt("Digite a segunda nota: ")
let nota3 = prompt("Digite a terceira nota: ")

nota1 = Number(nota1)
nota2 = Number(nota2)
nota3 = Number(nota3)

let media = (nota1 + nota2 + nota3)/3

let result = media > 6

media = media.toFixed(1)

if (result) {
  alert("Parabéns, " + nomeAluno + "! sua média foi de " + media)
}else {
  alert("Que pena, " + nomeAluno + "! Dê o seu melhor na prova de recuperação, sua média foi de " + media)
} 
