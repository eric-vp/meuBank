const prompt = require('prompt-sync')();

class Conta {
    // Para criar a conta só é passado o nome do titular
    // Não precisa passar o saldo, pois o saldo inicial é 0
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }

    depositar() {
        let valor = +prompt("Digite o valor que deseja depositar: ");
        // Verifica se o valor é um número, e se não é menor ou igual a 0
        if(valor <= 0 || isNaN(valor)) {
            console.error("\nValor inválido!\n");
        } else {
            // Se for um valor válido, é adicionado ao saldo da conta
            this.saldo += valor;
            // Para melhorar a experiência do usuário, é exibida uma mensagem de sucesso e o saldo atual da conta
            console.log(`\nSucesso!!! Você depositou ${valor} reais na conta de ${this.titular}\n`);
            this.exibirSaldo();
        }
    }

    sacar() {
        let valor = +prompt("Digite o valor que deseja sacar: ");
        // Verifica se o valor é um número, e se não é menor ou igual a 0
        if (valor <= 0 || isNaN(valor)) {
            console.error("\nValor inválido!\n");
        } else {
            // Se for um valor válido, verifica também se o valor não é maior que o saldo da conta
            if(valor > this.saldo) {
                console.error(`\nSaldo insuficiente! Você tem ${this.saldo} reais em sua conta. \n`);
            } else {
                // Se for um valor válido, é subtraído do saldo da conta
                this.saldo -= valor;
                // Para melhorar a experiência do usuário, é exibida uma mensagem de sucesso e o saldo atual da conta
                console.log(`Sucesso!!! Você sacou ${valor} reais da conta de ${this.titular}\n`);
                this.exibirSaldo();
            }
        }
    }

    // Essa função exibe o titular da conta e o saldo, para melhor experiência de usuário
    exibirSaldo() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo: ${this.saldo}`);
    }

    // Essa função exibe as opções de cada conta, de acordo com os parâmetros passados
    // Os parâmetros são: o tipo da conta, para o título, e o se é rendimento ou juros, na opção personalizada
    exibirMenu(tituloConta, opcaoPersonalizada) {
        console.log(`\n${this.titular}: CONTA ${tituloConta}\n`);
        console.log("0 - Sair");
        console.log("1 - Ver saldo");
        console.log("2 - Depositar");
        console.log("3 - Sacar");
        console.log(`4 - Aplicar ${opcaoPersonalizada}`);
    }

    // Essa função aplica juros, ou rendimento, de acordo com os parâmetros
    // Os parâmetros são: nomeValor(juros ou rendimento), valor(this.juros ou this.rendimento) e porcentagem(porcentagem que está sendo aplicada. Ex: 5%, ou 10%)
    aplicar(nomeValor, valor, porcentagem) {
        // Verifica se o saldo é maior que 0, para poder aplicar
        if (this.saldo == 0) {
            console.log("\nVocê ainda não possui saldo nessa conta.\n");
        } else {
            // Aplica juros, ou rendimento, de acordo com o parâmetro que foi passado
            this.saldo += this.saldo * valor;
            console.log(`\nSucesso, ${nomeValor} de ${porcentagem}% aplicados à conta.\n`);
        }
        // Para melhorar a experiência do usuário, é exibido o saldo atual da conta independente do resultado da verificação
        this.exibirSaldo();
    }
}

module.exports = Conta;
