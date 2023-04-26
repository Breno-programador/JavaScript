var nomes = []
var nome = document.getElementById(`input_name`)
var lista = document.getElementById(`lista`)

function cadastrar() {
    if (nome.value != ``) {
        nomes.push(nome.value)
        nomes.value = `` // Vai limpar o campo para digitar um novo nome.
        nomes.focus() // Vai deixar o curso piscando dentro do campo nome.
    } else {
        alert(`Digite o nome do aluno.`)
        nome.focus()
    }

}

function imprimir() {
    lista.innerHTML = ``
    for (var c = 0; c < nomes.length; c++) {
        lista.innerHTML += `<p>Aluno ${nomes[c]}</p>`
    }
}

function limpar() {
    nomes = []
    lista.innerHTML = ``
}