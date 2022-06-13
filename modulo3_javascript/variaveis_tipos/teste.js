function tracos() {
    let tracos = ""
    for (let i = 0; i < 39; i++) {
        tracos += '-'
    }
    console.log(tracos)
}
function linha() {
    let linha = "|"
    for (let i = 0; i < 37; i++) {
        linha += " "
    }
    linha += "|"
    console.log(linha)
}

function desenha(tracos, linha) {
    let desenhaTraco;
    let desenhaLinha;
    for (let i = 0; i < 1; i++) {
        desenhaTraco += tracos()
        for (let j = 0; j < 4; j++) {
            desenhaLinha += linha()
        }
        desenhaTraco += tracos()
    }
}
desenha(tracos, linha)
