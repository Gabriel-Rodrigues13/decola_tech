var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0
document.getElementsByName("subtrair")[0].addEventListener("click", decrement);
document.getElementsByName("adicionar")[0].addEventListener("click", increment);
var botoes = document.getElementsByClassName("botao")

for (i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", checkNumber);
}

function increment() {
    if (currentNumber < 10) {
        currentNumber = currentNumber + 1
        currentNumberWrapper.innerHTML = currentNumber
    }
}
function decrement() {
    if (currentNumber > -10) {
        currentNumber = currentNumber - 1
        currentNumberWrapper.innerHTML = currentNumber
    }

}
function checkNumber() {
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "red"
    } else {
        currentNumberWrapper.style.color = "black"
    }
}

