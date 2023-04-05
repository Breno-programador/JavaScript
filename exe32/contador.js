function contador() {
    var inicio = Number(document.getElementById(`inicio`).value)
    var fim = Number(document.getElementById(`fim`).value)
    var passo = Number(document.getElementById(`passo`).value)

    resultado.innerHTML = ""
    if (passo <= 0) {
        resultado.innerHTML = `<strong>O passo não pode ser 0 ou menor que 0.</strong>`
    } else if (inicio < fim) {
        while (inicio <= fim) {
            if (inicio + passo > fim) {
                resultado.innerHTML += `${inicio}\u{1F3C1}`
            } else {
                resultado.innerHTML += `${inicio}\u{27A1}`
            }
            inicio += passo
        }
    } else {
        while (inicio >= fim) {
            if (inicio - passo < fim) {
                resultado.innerHTML += `${inicio}\u{1F3C1}`
            } else {
                resultado.innerHTML += `${inicio}\u{27A1}`
            }
            inicio -= passo
        }
    }
}