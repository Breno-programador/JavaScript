var animal = `Cachorro`
switch (animal) {
    case `Vaca`:
    case `Girafa`:
    case `Cachorro`:
    case `Gorila`:
    case `Macaco`:
    case `Chimpanzé`:
    case `Tigre`:
    case `Leão`:
    case `Rinoceronte`:
    case `Javali`:
    case `Jabuti`:
    case `Hipopótamo`:
    case `Gavião`:
    case `Sabiá`:
        console.log(`Esse animal irá para a Arca de Nóe.`)
        break
    case `Dinossauro`:
        console.log(`Esse anima não vai para a Arca de Nóe.`)
        break
    default:
        console.log(`Esse animal não existe`)
        break
}