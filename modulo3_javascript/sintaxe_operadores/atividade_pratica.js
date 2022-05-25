/* Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
 */
function comparaSoma(numero1, numero2) {
    let num1 = numero1;
    let num2 = numero2;

    let compara = (num1 == num2) ? (true) : (false);
    let soma = num1 + num2;
    let maior_dez = (soma > 10) ? ("maior que 10") : ("menor que 10");
    let menor_vinte = (soma < 20) ? ("menor que 20") : ("maior que 20");



    if (compara) {
        console.log(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é ${maior_dez} e ${menor_vinte}`)
    } else {
        console.log(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é ${maior_dez} e ${menor_vinte}`)
    }

}

comparaSoma(10, 5)
