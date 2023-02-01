const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}

const corrigirProva = (prova) => {
    console.log(prova.aluno)
}

corrigirProva(prova)




































// const carro = {
//     ligado: false,
//     velocidade: 0,
//     ligar: function () {
//         if (this.ligado === false) {
//             return "Esse carro já está ligado"
//         } else { this.ligado = true }
//     },
//     desligar: function () {
//         if (this.ligado === true) {
//             return "Esse carro já está desligado"
//         } //else { this.ligado = false }
//     },
//     acelerar: function () {
//         if (this.ligado === true) {
//             return "Não é possível acelerar o carro desligado"
//         } else { this.velocidade = 10 }
//     },
//     desacelerar: function () {
//         if (this.ligado === true) {
//             return "Não é possível desacelerar um carro desligado"
//         } else { this.velocidade = this.velocidade - 10 }
//     }
// }

// console.log(carro.desligar())