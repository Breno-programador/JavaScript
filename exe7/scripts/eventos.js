window.alert('Seja bem vindo') /* ou assim */

function calcular(){
    var numero = Number.parseInt(window.prompt(`digite um número`)) 

    var resultado = document.getElementById(`resultado`)

    resultado.innerHTML = `<p>O dobro de ${numero} é ${numero * 2} e a metade é ${numero / 2}!</p>`
}

