function descobrir() {
    var numero = Number(window.prompt(`Digite um número:`))

    var resto = numero % 2

    switch (resto) {
        case 0: 
        document.getElementById(``).resultado.innerHTML = `<p>O número ${numero} é par</p>`
        break

        case 1:
            document.getElementById(``).resultado.innerHTML = `<p>O número ${numero} é ímpar</p>`
    }
}