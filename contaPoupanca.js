const prompt = require('prompt-sync')();
const Conta = require("./conta");

class ContaPoupanca extends Conta {
    constructor(titular,) {
        super(titular);
        this.rendimento = 0.1; // Aplicar rendimento de 0.1 (10%)
    }

    exibirOpcoesConta() {
        do {
            // Exibe o menu personalizado, com os valores dos parâmetros
            this.exibirMenu("POUPANÇA", "rendimento");
            var opcao = +prompt("Selecione uma opção: ");
            // Verifica a opção do usuário e executa uma ação de acordo com ela
            switch (opcao) {
                case 0:
                    console.log(`\nSaindo da conta de ${this.titular}...\n`);
                    break;
                case 1:
                    this.exibirSaldo();
                    break;
                case 2:
                    this.depositar();
                    break;
                case 3:
                    this.sacar();
                    break;
                case 4:
                    // Essa opção é exclusiva da conta poupança
                    this.aplicarRendimento();
                    break;
                default:
                    console.log("\nOpção inválida!\n");
                    break;
            }
        } while (opcao != 0);
    }

    aplicarRendimento() {
        // Usa a função 'aplicar' para aplicar o rendimento de acordo com os parâmetros passados
        this.aplicar('rendimento', this.rendimento, 10);
    }
}

module.exports = ContaPoupanca;
