function contador() {
    var numero = Number(document.getElementById(`numaleatorio`).value)
    resultado.innerHTML = `Tabuada de <strong>${numero}</strong><br>`
    for (var cont = 0; cont <= 10; cont++) {
        resultado.innerHTML += `<p>${numero} x ${cont} = ${numero * cont}</p>`
    }
}