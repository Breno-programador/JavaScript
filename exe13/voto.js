var idade = 17

//Menores de 16 anos não votam
//Entre 16 e 18 voto opcional
//Maiores de 18 o voto é obrigatório
//Acima de 70 voto opcional

if (idade < 16) {
    console.log(`Não vota.`)
} else if (idade < 18 || idade >= 70) {
    console.log(`Voto opcional.`)
} else {
    console.log(`Voto obrigatório.`)
}