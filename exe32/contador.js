function contador() {
    var inicio = Number(document.getElementById(`numeroinicial`).value)
    var fim = Number(document.getElementById(`numerofinal`).value)
    var passo = Number(document.getElementById(`numerodepasso`))

    var result = inicio + fim

    var resultado =document.getElementById(`contando`)

    resultado.innerHTML = `a soma de ${inicio} e ${fim} é igual a ${result}`
}