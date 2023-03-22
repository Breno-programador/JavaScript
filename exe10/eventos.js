var cliques = 0

function contar() {
    cliques ++
    var resultado = document.getElementById(`resultado`)
    resultado.innerHTML = `<p>O contador está com <mark>${cliques}</mark> cliques.</p>`
}

function zerar() {
      cliques = 0
      var saída = document.getElementById(`resultado`)
      saída.innerHTML = `<p>O contador está com <mark>${cliques}</mark> cliques.</p>`
}