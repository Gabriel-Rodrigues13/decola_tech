function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNums.push(array[i])
        }
        else {
            console.log("O numero " + array[i] + " não é par")
        }
    }
    console.log(evenNums);
}

function numberGen() {
    let numbers = []
    for (let i = 0; i < 50; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    return numbers
}

let numeros = numberGen();

returnEvenValues(numeros);