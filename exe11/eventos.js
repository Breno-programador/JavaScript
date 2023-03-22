var registro = document.getElementById(`saída`)

function Ação1(){
    registro.innerHTML += '<p>Você clicou no primeiro botão</p>'
}
function Ação2(){
    registro.innerHTML += '<p>Você clicou no segundo botão</p>'
}
function Ação3(){
    registro.innerHTML += '<p>Você clicou no terceiro botão</p>'
}
function Ação4(){
    registro.innerHTML += '<p>Você clicou no quarto botão</p>'
}
function limpar(){
    registro.innerHTML = ""
}