function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var input_ano = Number(document.getElementById(`input_ano`).value)
    var resultado = document.getElementById(`resultado`)
    var idade = ano - input_ano
    resultado.innerHTML = `<p>Você está com ${idade} anos.</p>`
    var input_radio = document.getElementsByName(`radsex`)
    var genero = ``
    var img = document.createElement(`img`)
    img.setAttribute(`id`, `foto`)


    if (input_radio[0].checked) {
        genero = `Homem`
        if (idade >= 0 && idade < 12) {
            resultado.innerHTML = `<p>Criança com ${idade} anos do sexo masculino</p>`
            img.setAttribute(`src`, `imagens/crianca menino.jpg`)
            img.setAttribute(`height`, `450`)
        } else if (idade < 21) {
            resultado.innerHTML = `<p>Jovem com ${idade} anos do sexo masculino</p>`
            img.setAttribute(`src`, `imagens/jovem.avif`)
            img.setAttribute(`height`, `450`)
        } else if (idade < 50) {
            resultado.innerHTML = `<p>Adulto com ${idade} anos do sexo masculino</p>`
            img.setAttribute(`src`, `imagens/homem adulto.png`)
            img.setAttribute(`height`, `450`)
        } else {
            resultado.innerHTML = `<p>Idoso com ${idade} anos do sexo masculino</p>`
            img.setAttribute(`src`, `imagens/idoso.jpg`)
            img.setAttribute(`height`, `450`)
        }

    } else {
        genero = `Mulher`
        if (idade >= 0 && idade < 12) {
            resultado.innerHTML = `<p>Criança com ${idade} anos do sexo feminino</p>`
            img.setAttribute(`src`, `imagens/crianca menina.png`)
            img.setAttribute(`height`, `450`)
        } else if (idade < 21) {
            resultado.innerHTML = `<p>Jovem com ${idade} anos do sexo feminino</p>`
            img.setAttribute(`src`, `imagens/mulher jovem.avif`)
            img.setAttribute(`height`, `450`)
        } else if (idade < 50) {
            resultado.innerHTML = `<p>Adulto com ${idade} anos do sexo feminino</p>`
            img.setAttribute(`src`, `imagens/mulher adulta.png`)
            img.setAttribute(`height`, `450`)
        } else {
            resultado.innerHTML = `<p>Idoso com ${idade} anos do sexo feminino</p>`
            img.setAttribute(`src`, `imagens/idosa.jpg`)
            img.setAttribute(`height`, `450`)
        }
    }
    resultado.appendChild(img)
}