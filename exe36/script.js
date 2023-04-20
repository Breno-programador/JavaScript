function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var input_ano = Number(document.getElementById(`input_ano`).value)
    var resultado = document.getElementById(`resultado`)
    var idade = ano - input_ano
    resultado.innerHTML = `<p>Você está com ${idade} anos.</p>`
}