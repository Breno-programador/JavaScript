window.alert(`Seja bem vindo ao portal de notas do aluno!`)
function calcular() {
    var nome = prompt(`Nome do aluno`)
    var nota1 = Number(prompt(`Nota do primeiro bimestre`))
    var nota2 = Number(prompt(`Nota do segundo bimestre`))
    var nota3 = Number(prompt(`Nota do terceiro bimestre`))
    var nota4 = Number(prompt(`Nota do quarto bimestre`))
    var mediafinal = (nota1 + nota2 + nota3 + nota4) / 2

    var resultado = document.getElementById(`status`)

    resultado.innerHTML = (`<p>Notas bimestrais do aluno <strong>${nome}</strong>.</p>`)
    resultado.innerHTML += (`<p>As notas obtidas foram <strong>${nota1} , ${nota2} , ${nota3} , ${nota4}</strong> .</p>`)
    resultado.innerHTML += (`<p>A média final de <strong>${nome}</strong> foi ${mediafinal}.</p>`)

    var status = ""

    if (mediafinal >= 28) {
        status = `Aprovado`
        resultado.innerHTML += (`<p>O aluno ${nome} foi <mark>${status}</mark></p>`)
    } else if (mediafinal < 5.5) {
        status = `Reprovado`
        resultado.innerHTML += (`<p>O aluno ${nome} foi <mark>${status}</mark></p>`)
    } else {
        status = `Recuperacao`
        resultado.innerHTML += (`<p>O aluno ${nome} foi <mark>${status}</mark>.</p>`)
    }
}