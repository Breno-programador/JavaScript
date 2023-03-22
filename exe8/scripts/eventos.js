window.alert('Seja bem vindo!') /* ou assim */

function calcular(){
    var nome = prompt(`qual o nome do aluno?`)

    var numero = Number.parseInt(window.prompt(`Qual a nota inicial do aluno`)) 

    var numero2 = Number.parseInt(window.prompt(`Além da nota ${numero},qual foi a outra nota ?`))

    var soma = (numero + numero2) / 2

    var média =  soma >= 7 ? 'Aprovado':'Reprovado' 
    /* var resultado = média >= 7 ? `Aprovado` : `Reprovado`  */
    /* document.write(`O aluno ${nome} foi ${resultado}`) */

    

    resultado.innerHTML = `<p>Calculando a média final de ${nome}.</p>`
    resultado.innerHTML += `<p>As notas obtidas foram ${numero} e ${numero2}.</p>`
    resultado.innerHTML += `<p>A média final será ${soma}.</p>`
    resultado.innerHTML += `<p>O aluno ${nome} foi ${média}.</p>`
}