function contador() {
    var inicio = Number(document.getElementById(`inicio`).value)
    var fim = Number(document.getElementById(`fim`).value)
    var passo = Number(document.getElementById(`passo`).value)

    var resultado = document.getElementById(`contando`)
    resultado.innerHTML = ""
    if (passo <= 0) {
        resultado.innerHTML = `O passo não pode ser 0 ou menor.`
    } else if(inicio < fim) {
        resultado.innerHTML += `${inicio}`
        inicio += passo
    } else {
        while (inicio <= fim) {
        resultado.innerHTML += `${inicio}`
        inicio += passo
    }
}
}