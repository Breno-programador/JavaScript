function somar(){
    var numero_1 = Number(document.getElementById(`ad_number_1`).value)
    var numero_2 = Number(document.getElementById(`ad_number_2`).value)

    var soma = numero_1 + numero_2

    var resultado = document.getElementById('resultado')

    resultado.innerHTML = `A soma entre ${numero_1} e ${numero_2} é igual a <strong>${soma}</strong>`
}

function subtrair(){
    var numero_1 = Number(document.getElementById(`sub_number_1`).value)
    var numero_2 = Number(document.getElementById(`sub_number_2`).value)
    
    var subtrair = numero_1 - numero_2

    var resultado = document.getElementById('resultado_subtracao')

    resultado.innerHTML = `A subtração entre ${numero_1} e ${numero_2} é igual a <strong>${subtrair}</strong>`
}
