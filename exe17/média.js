function calcular() {
    var nome = prompt(`Qual o nome do aluno?`)
    var numero1 = Number(prompt(`Qual foi a primeira nota de ${nome} ?`))
    var numero2 = Number(prompt(`Além de ${numero1},qual foi a outra nota de ${nome}`))
    var media = (numero1 + numero2) / 2

    var resultado = document.getElementById(`situacao`)
    
    resultado.innerHTML = `<p>Calculando a média final de <strong><mark id="corstrong">${nome}</mark></strong>.</p>`
    resultado.innerHTML += `<p>As notas obtidas foram <mark>${numero1} e  ${numero2}</mark>.</p>`
    resultado.innerHTML += `<p>A média final será <mark>${media}</mark></p>`

    var situacao = ""

if (media >= 7) {
    situacao = `Aprovado`
    resultado.innerHTML += `<p>O aluno ${nome} foi <span style = "color: white; background-color : green;">${situacao}</span>.</p>`
} else if (media < 5.5) {
    situacao = `Reprovado`
    resultado.innerHTML += `<p>O aluno ${nome} foi <span style = "color: white; background-color : red;">${situacao}</span>.</p>`
} else {
    situacao = `Recuperação`
    resultado.innerHTML += `<p>O aluno ${nome} está de <span style = "color: white; background-color : orange;">${situacao}</span>.</p>`
}
document.getElementById('corstrong').style.color = "blue"
}
document.getElementById('caixa').style.background = "pink" ;







