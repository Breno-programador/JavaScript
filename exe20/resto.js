function verificar() {
    var numero = Number.parseInt(prompt(`qual o número`))

    if (numero % 2 == 0){
        document.getElementById(`resultado`).innerHTML = `<p>O número ${numero} é par</p>`
    } else {
        document.getElementById(`resultado`).innerHTML = `<p>O número ${numero} é impar</p>`
    }
}