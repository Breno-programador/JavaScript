function verificar() {
    var numero = Number(document.getElementById(`numero1`).value)
    var numero2 = Number(document.getElementById(`numero2`).value)
    var numero3 = Number(document.getElementById(`numero3`).value)

    if (numero > numero2 || numero1 > numero3 || numero2 > numero3) {
        document.getElementById(`conclusao`).innerHTML = `<p>O número ${numero} é maior</p>`
    } else if (numero < numero2 || numero3) {
        document.getElementById(`conclusao`).innerHTML = `<p>O número ${numero} é maior</p>`
    } else  {
        document.getElementById(`conclusao`).innerHTML = `<p>O número ${numero} é igual ao numero ${numero2} e ${numero3}</p>`
    }
}