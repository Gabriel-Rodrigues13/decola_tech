function inverteStringUm(palavra) {
    let stringSeparada = palavra.split("");
    let stringInvertida = stringSeparada.reverse();
    let stringJunta = stringInvertida.join("");
    return stringJunta;

}

function inverteStringDois(palavra) {
    let novaString = ""

    for (let i = palavra.length - 1; i >= 0; i--) {
        novaString += palavra[i]
    }
    return novaString
}


function verificaPalindromo(palavra) {

    if (palavra == inverteStringDois(palavra)) {
        console.log(`${palavra} é um palindromo`)
    } else {
        console.log(`${palavra} não é um palindromo`)
    }

}

verificaPalindromo('arara')