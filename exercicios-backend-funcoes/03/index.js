const carrinho = {
    nomeDoCliente: "Yuri Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        },
    ],
    imprimirResumo: function () {
        const { nomeDoCliente, produtos } = this

        console.log(`Cliente: ${nomeDoCliente}
        Total de itens: ${this.calcularTotalDeItens()}
        Total a pagar:${this.calcularTotalAPagar() / 100}`)

    },
    addProduto: function (produto) {
        const { produtos } = this
        let achou = false;
        for (let item of produtos) {
            if (item.id == produto.id) {
                item.qtd += produto.qtd
                achou = true
                break
            }
        }
        if (achou == false) {
            produtos.push(produto)
        }
    },
    imprimirDetalhes: function () {
        let { nomeDoCliente, produtos } = this
        console.log(`Cliente: ${nomeDoCliente}`)

        for (const produto of produtos) {
            let { nome, id, qtd } = this
            console.log(`Item ${produto.id} - ${produto.nome} - ${produto.qtd} und - valor: ${produto.precoUnit * produto.qtd / 100}`)
            console.log(`valor total: ${this.calcularTotalAPagar() / 100}`)
        }
    },
    calcularTotalDeItens: function () {
        const { produtos } = this
        let totalDeItens = 0;
        for (let produto of produtos) {
            totalDeItens += produto.qtd
        }
        return totalDeItens
    },
    calcularTotalAPagar: function () {
        const { produtos } = this
        let somaPrecos = 0;
        for (let produto of produtos) {
            somaPrecos = somaPrecos + (produto.precoUnit * produto.qtd)
        }
        return somaPrecos
    },
    calcularDesconto: function () {
        let somaPrecos = this.calcularTotalAPagar() / 100;
        let totalDeItens = this.calcularTotalDeItens();

        let descontoTotalPorItens = 0;
        let descontoTotalPorValor = 0;

        if (totalDeItens < 4) {
            descontoTotalPorItens = produtos[0].precoUnit
            for (const produto of produtos) {
                if (produto.precoUnit < descontoTotalPorItens) {
                    descontoTotalPorItens = produto.precoUnit
                }
            }
        } if (somaPrecos > 100) {
            descontoTotalPorValor = somaPrecos * 0.1

        }
        return descontoTotalPorItens > descontoTotalPorValor ? descontoTotalPorItens : descontoTotalPorValor;
    }

}


// function addProdutoAoCarrinho(carrinho, produto) {
//     const { produtos } = carrinho
//     let achou = false;
//     for (let item of produtos) {
//         if (item.id == produto.id) {
//             item.qtd += produto.qtd
//             achou = true
//             break
//         }
//     }
//     if (achou == false) {
//         produtos.push(produto)
//     }
// }


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 4,
    precoUnit: 5000
}

console.log(carrinho.calcularDesconto())












// const carrinho = {
//     nomeDoCliente: "Yuri Bernal",
//     produtos: [
//         {
//             id: 1,
//             nome: "Camisa",
//             qtd: 5,
//             precoUnit: 3000
//         },
//         {
//             id: 2,
//             nome: "Bermuda",
//             qtd: 4,
//             precoUnit: 5000
//         },
//         {
//             id: 3,
//             nome: "Calça",
//             qtd: 10,
//             precoUnit: 6000
//         }
//     ]
// }

// function imprimirResumoDoCarrinho(carrinho) {
//     const { nomeDoCliente, produtos } = carrinho
//     let somaPrecos = 0;
//     let somaItens = 0;
//     for (let item of produtos) {
//         if (item.precoUnit > 0)
//             somaPrecos = somaPrecos + (item.precoUnit * item.qtd)
//         somaItens = somaItens + item.qtd
//     }
//     return (`Cliente: ${ nomeDoCliente }
//     Total de itens: ${somaItens}
//     Total a pagar:${somaPrecos / 100}`)

// }
// console.log(imprimirResumoDoCarrinho(carrinho))


// const carrinho = {
//     nomeDoCliente: "Yuri Bernal",
//     produtos: [
//         {
//             id: 1,
//             nome: "Camisa",
//             qtd: 3,
//             precoUnit: 3000
//         },
//         {
//             id: 2,
//             nome: "Bermuda",
//             qtd: 2,
//             precoUnit: 5000
//         },
//     ],
//     imprimirResumo: function () {
//         const { nomeDoCliente, produtos } = this
//         let somaPrecos = 0;
//         let somaItens = 0;
//         for (let item of produtos) {
//             if (item.precoUnit > 0)
//                 somaPrecos = somaPrecos + (item.precoUnit * item.qtd)
//             somaItens = somaItens + item.qtd
//         }
//         return (`Cliente: ${nomeDoCliente}
//         Total de itens: ${somaItens}
//         Total a pagar:${somaPrecos / 100}`)

//     }
// }


// function addProdutoAoCarrinho(carrinho, produto) {
//     const { produtos } = carrinho
//     let achou = false;
//     for (let item of produtos) {
//         if (item.id == produto.id) {
//             item.qtd += produto.qtd
//             achou = true
//             break
//         }
//     }
//     if (achou == false) {
//         produtos.push(produto)
//     }
// }


// const novaBermuda = {
//     id: 2,
//     nome: "Bermuda",
//     qtd: 3,
//     precoUnit: 5000
// }

// addProdutoAoCarrinho(carrinho, novaBermuda);
// console.log(carrinho.imprimirResumo());