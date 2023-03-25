function verificar() {
    var numero = Number(document.getElementById(`numero1`).value)
    var numero2 = Number(document.getElementById(`numero2`).value)
    var numero3 = Number(document.getElementById(`numero3`).value)

    if (numero > numero2 || numero3) { document.getElementById(`conclusao`).innerHTML = `<p>O número ${numero} é maior</p>`
        if (numero > numero3) { document.getElementById(`conclusao`).innerHTML = `<p>O número ${numero} é maior</p>`
        } else {
            document.getElementById(`conclusao`).innerHTML = `<p>O número ${numero2} é maior</p>`
        }
    } else {
        document.getElementById(`conclusao`).innerHTML = `<p>O número ${numero2} é maior</p>`
    }
}


