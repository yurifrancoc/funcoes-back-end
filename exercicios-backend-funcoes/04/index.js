const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        if (valor > 0) {
            this.saldo += valor
            this.historicos.push({
                tipo: "Depósito",
                valor: valor //aqui será o valor informado no argumento do método depositar
            });
            return `Deposito de R$ ${valor / 100} realizado para o cliente: ${this.nome}`
        }
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}`
        } else if (valor < this.saldo) {
            this.saldo -= valor
            this.historicos.push({
                tipo: "Saque",
                valor: valor //aqui será o valor informado no argumento do método sacar
            });
            return `Saque de R$ ${valor / 100} realizado para o cliente: ${this.nome}.`
        }
    },
    extrato: function () {
        let deposito = 0;
        let saque = 0;
        for (let item of this.historicos) {
            if (item.tipo === "Depósito") {
                deposito += item.valor
            }
            if (item.tipo === "Saque") {
                saque += item.valor
            }

        }
        return `Extrato de ${this.nome} 
        Saldo: R$ ${this.saldo / 100}
        Histórico:
        Depósito de $ ${deposito / 100}
        Saque de $ ${saque / 100}`
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());