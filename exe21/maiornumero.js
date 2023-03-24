function verificar() {
    var numero = Number(document.getElementById(`numero1`).value)
    var numero2 = Number(document.getElementById(`numero2`).value)

    if (numero > numero2) {
        document.getElementById(`conclusao`).innerHTML = `<p>O número ${numero} é maior</p>`
    } else if (numero < numero2) {
        document.getElementById(`conclusao`).innerHTML = `<p>O número ${numero} é maior</p>`
    } else  {
        document.getElementById(`conclusao`).innerHTML = `<p>O número ${numero} é igual ao numero ${numero2} </p>`
    }
}