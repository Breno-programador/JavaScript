/* function verificar() {
    var maior = numero1

    switch (maior) {
        case `numero == numero2 && numero1 == numero3`:
            conclusao.innerHTML = `Os números são iguais`
            break
        case `numero2 > maior && numero2 > numero3`:
            conclusao.innerHTML = `maior = numero2`
            break
        case `numero3 > maior`:
            conclusao.innerHTML = `maior = numero3`
            break}
} */

function verificar() {
    let numero1 = Number(document.getElementById(`numero1`).value)
    let numero2 = Number(document.getElementById(`numero2`).value)
    let numero3 = Number(document.getElementById(`numero3`).value)
    let conclusao = documento.getElementById(``)
    switch (true) {
        case (numero1 > numero2 && numero1 > numero3):
            conclusao.innerHTML = `numero1`
            break;
        case (numero2 > maior && numero2 > numero3):
            conclusao.innerHTML = `numero2`
            break;
        case (numero3 > numero1 && numero3 > numero2):
            conclusao.innerHTML = `numero3`
            break;
        default:
            conclusao.innerHTML = `Os números são iguais`
    }
}