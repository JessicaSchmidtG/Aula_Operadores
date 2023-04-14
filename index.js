//Graus Fahrenheit  p/ kelvin
//(KELVIN) = (GRAUS_FAHRENHEIT -32)*(5/9) + 273.15

//GRAUS CELSIUS P/ FAHRENHEIT
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

//EXERCICIO 1
/*let fahrenheit1 = 77
kelvin1 = (fahrenheit1 - 32)*(5/9) + 273.15
console.log("77 graus Fahrenheit em Kelvin é: ", kelvin1)

//EXERCÍCIO 2
let celsius2 = 80
fahrenheit2 = (celsius2)*(9/5) + 32
console.log("80 graus Celsius em Fahrenheit é:",fahrenheit2)

//EXERCÍCIO 3
let celsius3 = 30
fahrenheit3 = (celsius3)*(9/5) + 32
console.log("30 graus Celsius em Fahrenheit é: ",fahrenheit3)
kelvin3 = (fahrenheit3 - 32)*(5/9) + 273.15
console.log("30 graus Celsius em Kelvin é: '", kelvin3)

//EXERCÍCIO 4
let celsius4 = parseFloat(prompt("Digite o valor em graus Celsius que deseja converter:"))
fahrenheit4 = (celsius4)*(9/5) + 32
console.log(celsius4+"graus Celsius em Fahrenheit é: ", fahrenheit4)
kelvin4 = (fahrenheit4 - 32)*(5/9) + 273.15
console.log(celsius4+"graus Celsius em Kelvin é:",kelvin4)
*/

//EXERCÍCIO 5
/*
let qW_h = 0.05
let consumo = parseFloat(prompt("Digite a quantidade de quilowatts consumida na residência: "))
//A) Calcule e mostre o valor a ser pago por uma residencia que consuma 280 quilowatt-hora
let valor = (consumo*0.05);
console.log("Ovalor a ser pago pelo consumo de 280 quilowatts-hora é de R$: "+valor, "reais.")

*/
/*B) Altere o programa para receber mais um valor: a porcentagem de desconto.
Calcule e mostre o valor a ser pago pela mesma residencia acima 
considerando 15% de desconto
*/

/*
let anoNascimento = Number(prompt("Qual seu ano de nascimento? "));
const anoAtual = 2023
let idade = anoAtual - anoNascimento
console.log(idade)
alert("Sua idade é: "+ idade);
*/

//13/04/2023 - Aula 12
//Exercício
//Solicitar nome de usuario e 3 notas e validar média 7 
/*
let nome = prompt("Digite seu nome: ")
let nota1 = Number(prompt("Informe a primeira nota: "));
let nota2 = Number(prompt("Infrome a segunda nota: "))
let nota3 = Number(prompt("Informe a terceira nota: "));

let soma = nota1 + nota2 +nota3
let media = soma / 3

alert(nome+ " Suas notas foram: "+nota1+" , "+ nota2+" e "+ nota3)
console.log(nome+ " Suas notas foram: "+nota1+" , "+ nota2+" e "+ nota3)

console.log(nome, media, media>=7)

if (media<7) {
    console.log(nome, ", sua média é: ",media,". Você foi REPROVADO e precisará repetir o ano!")
    alert(nome+", sua média é: "+media + ". Você foi REPROVADO e precisará repetir de ano!")
} else{
    console.log(nome,", sua média é: ", media, ". Você foi APROVADO! Parabéns!")
    alert(nome+", sua média é: "+media + ". Você foi APROVADO! Parabéns!")
}
*/
//Solicitar um numero para o usuario validar se é par e informar
/*
let numero = Number(prompt("Informe um número: "));
if(numero%2 === 0){
    console.log("o número "+numero+" é par!");
    alert("o número "+numero+" é par!");
}else{
    console.log("O número "+numero+" é ímpar!");
    alert("O número "+numero+" é ímpar!");
}
*/
//solicitar 2 numeros para o usuario
//Exibir o maior
/*
let num1 = Number(prompt("Digite um número: "))
let num2 = Number(prompt("Digite outro número: "))
if(num1>num2){
    console.log("O número "+num1+" é maior!")
    alert("O número "+num1+" é maior!")
}if (num2>num1) {
    console.log("O número "+num2+" é maior!")
    alert("O número "+num2+" é maior!")
} else {
    console.log("Os números informados são iguais")    
}
*/
let num1 = Number(prompt("Digite um número: "))
let num2 = Number(prompt("Digite outro número: "))
let num3 = Number(prompt("Digite mais um número:"))

if(num1>num2&&num3){
    console.log("O número "+num1+" é maior!")
    alert("O número "+num1+" é maior!")
}if (num2>num1&&num3) {
    console.log("O número "+num2+" é maior!")
    alert("O número "+num2+" é maior!")
} if (num3>num1&&num2) {
    console.log("O número "+num3+" é maior!")
    alert("O número "+num3+" é maior!")  
} else {
    console.log("Os números informados são iguais")    
}

