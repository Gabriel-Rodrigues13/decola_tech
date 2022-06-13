const alunos = [
    {
        nome: "Gabriel",
        nota: 7,
        materia: "Matematica"
    },
    {
        nome: "Maria",
        nota: 9,
        materia: "Portugues"
    },
    {
        nome: "Cleber",
        nota: 4,
        materia: "Ciencias"
    },
    {
        nome: "Monique",
        nota: 6,
        materia: "Historia"
    }
]



function aprovados(alunos, media) {
    let aprovados = [];

    for (let i = 0; i < (alunos.length); i++) {
        const { nota, nome } = alunos[i]

        if (nota >= media) {
            aprovados.push(nome)
        }
    }
    return aprovados
}

console.log(aprovados(alunos, 7))