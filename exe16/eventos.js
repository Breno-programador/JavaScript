function calcular() {
    var velocidade = Number(document.getElementById(`input_velocidade`).value)

    var resultado = document.getElementById(`relatorio`)
   
    resultado.innerHTML = `<p>Sua velocidade atual é de <strong>${velocidade}</strong> Km/h.</p>`

    if (velocidade > 60) {
        resultado.innerHTML += `<p>Você está <strong id="strongcor">MULTADO!</strong> por excesso de velocidade.</p>`
    } else{
        resultado.innerHTML += `<p>Velocidade dentro do limite permitido.</p>`
    }

    resultado.innerHTML += `<p>Use sempre o cinto de segurança!<p>`
    document.getElementById(`strongcor`).style.color = "red"
}
