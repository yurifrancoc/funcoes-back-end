function corrigirProva(prova) {
    const { questoes } = prova
    let contadorDeAcerto = 0;
    for (let item of questoes)
        if (item.resposta === item.correta) {
            contadorDeAcerto++
        }
    let nota = contadorDeAcerto * (prova.valor / prova.questoes.length)
    console.log(`${prova.aluno} acertou ${contadorDeAcerto} e tirou nota ${nota.toFixed(1)}`)
}


const prova = {
    aluno: "Jose",
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
            resposta: "c",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "d",
            correta: "d"
        }
    ]
}

corrigirProva(prova)






























































// const pessoa = {
//     nome: "Yuri",
//     idade: 64,
//     altura: 1.4,
//     profissao: "estudante",
//     apresenta: function () {
//         console.log(`Olá meu nome é ${this.nome},
//         sou um ${this.verifica(this.idade)} de
//         ${this.idade} anos
//         `)
//     },
//     verifica: function () {
//         if (this.idade < 12) {
//             return "jovem"
//         } else if (this.idade < 18) {
//             return "adulto"
//         } else if (this.idade < 65)
//             return "velho"
//     }
// }


// console.log(pessoa.verifica())


























// function pessoa(nome, idade, profissao, altura) {
//     if (idade < 18) {
//         console.log("JOVEM")
//     }
//     console.log(`Olá! Meu nome é ${nome}, sou um jovem de ${idade} anos, ${altura}m e sou ${profissao}`)
// }

// let nome = "João";
// let idade = 12;
// let profissao = "estudante";
// let altura = 1.4;

// pessoa(nome, idade, profissao, altura)
