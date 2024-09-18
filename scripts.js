let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restdiv = firstNumber % secondNumber

alert('soma: ' + sum)
alert('subtração: ' + sub)
alert('multiplicação: ' + mult)
alert('divisão: ' + div)
alert('resto da divisão: ' + restdiv)
