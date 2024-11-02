let alunos = [
    { nome: "Alice", nota: 89 },
    { nome: "Bob", nota: 92 },
    { nome: "Charlie", nota: 78 },
    { nome: "Chris", nota: 50 }
];

function calculaMediaNotas(alunosNotas) {
    let totalNotas = 0
    for (let position = 0; position < alunos.length; position++) {
        totalNotas = alunosNotas[position].nota + totalNotas
    }
    return totalNotas / alunosNotas.length
}

let counter = 0
while (counter < alunos.length) {
    document.write(alunos[counter].nome + ' ' + alunos[counter].nota + '<br>')
    counter = counter + 1
}
document.write(calculaMediaNotas(alunos).toString())