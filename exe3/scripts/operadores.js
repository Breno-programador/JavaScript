var numero1 = Number.parseInt(window.prompt(`digite um número`)) /* Int soma números inteiros*/
var numero2 = Number.parseFloat(window.prompt(`digite outro número`)) /* float soma números decimais,inteiros,com vírgulas e etc*/

console.log(typeof numero1) /* typeof mostra o tipo de valor que contém na variável */
var soma = numero1 + numero2

/* window.alert(`A soma dos valores é ${soma}`) */ /* pode fazer assim */
window.alert('A soma dos valores é ' + soma ) /* ou assim */
