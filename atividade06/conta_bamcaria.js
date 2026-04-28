class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    verSaldo() {
        console.log(`
            Olá ${this.titular},
            seu saldo atual é
            R$ ${this.saldo} `)
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado com sucesso!`);
    }
    // criar o método sacar e sacar 1000 reais da sua conta, e depois mostrar o saldo atualizado.
    sacar(valor) {
        this.saldo -= valor;
    }
}

let contaDooFelipe = new ContaBancaria("Bernardo", 15000)
contaDoBernardo.verSaldo() // 15k
contaDoBernardo.depositar(350); // 15k + 350 = 15350
contaDoBernardo.sacar(100)
contaDoBernardo.verSaldo() // 15250

let contaDaCecilia = new ContaBancaria("Cecília", 1000000)
contaDaCecilia.verSaldo();