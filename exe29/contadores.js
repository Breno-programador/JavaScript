function contador_1() {

    contar_1.innerHTML = ``

    for (var cont = 0; cont <= 5; cont++) {
        contar_1.innerHTML += `<p>Passo ${cont} </p>`
       
    }
}

function contador_2() {
    var cont = 0

    contar_2.innerHTML = ``

    while (cont <= 5) {
        contar_2.innerHTML += `<p>Passo ${cont} </p>`
        cont++
    }
}

function contador_3() {
    var cont = 0

    contar_3.innerHTML = ``

    do {
        contar_3.innerHTML += `</p>Passo ${cont} </p>`
        cont++
    } while (cont <= 5) 
}  