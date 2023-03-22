/*
      Eventos DOM

Evento(metodo) é tudo que pode acontecer com um elemento (div).
Ex: mouseenter (quando o mouse sobrepoe a div) 
    mousemove
    mousedown
    mouseup
    click
    mouseout

Funções 
    É um conjunto de códigos que só será executado quando o evento ocorrer.
    As linhas programadas nesse conjunto chamamos de bloco.
    Um block em Js é delimitado por sinais de "(bloco".
    Ele precisa ser nomeado com uma function e um nome para a ação.
    
    Ex: function ação(param(opcional)){

    }

*/


var area = document.getElementById('area')
console.log(area)
var titulo = document.getElementsByTagName(titulo)
console.log(titulo) 

var area = document.getElementById('area')
function clicar (){
    area.innerHTML = 'você clicou!'
    area.style.background = 'red'
    area.style.width = '200px'
    area.style.height = '200px'
    area.style.textAlign = 'center'
    area.style.lineHeight = '200px'
}
function entrar (){
    area.innerHTML = 'Entrou!'
}
function sair (){
    area.innerHTML = 'Saiu!'
}