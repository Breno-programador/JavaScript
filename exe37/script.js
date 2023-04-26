/* Variáveis Compostas */
/* Array */

var lista = [2, 5, 9, 4] // Isso declare uma variável do Tipo Array com os valores 2, 5, 9 e 4.

var nomes = [`Jaderson`, `Weverton`, `Geovana`, `Vitório`, `Marcus`, `Breno`, `Hitalo`]

console.log(lista[0])
console.log(nomes[5])

console.log(`A lista contém ${nomes.length} valores.`) // length retorna o tamanho da lista.

for (var c = 0; c <= nomes.length; c++) {
    console.log(nomes[c])
}

lista.unshift(51)
console.log(lista)

lista.push(`SENAC`) // Adicione um valor no final do Array(lista)
console.log(lista)

lista.pop() // Remove o último elemento da lista 
console.log(lista)

lista.shift() // Remove o primeiro elemento da lista
console.log(lista)

lista.sort() // Classificar em ordem crescente 
console.log(lista)

lista.reverse() // Classificar em ordem decrescente.
console.log(lista)

console.log(nomes.indexOf(`Breno`))

nomes.splice(0, 1, `Wallas`, `Ricardo`)

console.log(nomes)

var cadastro = [
    [`Jaderson`, 33, `70kg`, 1.69, [`Francisco`, `Marlene`]],
    [`Geovana`, 16, `49kg`, 1.56]
]

console.log(cadastro[0])
console.log(cadastro[0][4][1])