function foto() {
    var resultado = document.getElementById(`resultado`)

    resultado.innerHTML = `<p>Isso aqui vocês já sabem fazer</p>`
    resultado.innerHTML += `<img id="imagem" height="150" src="imagens/chocolate.jpg">`

    var img = document.createElement(`img`)
    img.setAttribute(`id`,`foto`)
    img.setAttribute(`src`,`imagens/lanche.pg`)
    img.setAttribute(`height`,`150`)

    resultado.appendChild(img)
}