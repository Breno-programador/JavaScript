function verificar() {
    var numero1 = Number(document.getElementById(`numero1`).value)
    var numero2 = Number(document.getElementById(`numero2`).value)
    var numero3 = Number(document.getElementById(`numero3`).value)

    var maior = numero1

    if (numero1 == numero2 && numero1 == numero3) {
        conclusao.innerHTML = `<p>Os números são iguais.</p>`
    } else {
        if (numero2 > maior && numero2 > numero3) {
            maior = numero2
        } else if (numero3 > maior) {
            maior = numero3
        }
        conclusao.innerHTML = `<p>O maior número é o ${maior}</p>`
    }
}