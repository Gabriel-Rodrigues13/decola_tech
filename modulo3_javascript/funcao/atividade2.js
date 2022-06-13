const teste1 = {
    nome: "Gabriel",
    idade: 23
}

const teste2 = {
    nome: "Maria",
    idade: 18
}

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos
        } anos de idade.`;
}

console.log(calculaIdade.call(teste1, 10));
console.log(calculaIdade.apply(teste2, [20]));

