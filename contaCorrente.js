const prompt = require('prompt-sync')();
const Conta = require("./conta");

class ContaCorrente extends Conta {
    constructor(titular) {
        super(titular);
        this.juros = 0.05; // Aplicar juros de 0.05 (5%)
    }

    exibirOpcoesConta() {
        do {
            // Exibe o menu personalizado, com os valores dos parâmetros
            this.exibirMenu("CORRENTE", "juros");
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
                    // Essa opção é exclusiva da conta corrente
                    this.aplicarJuros();
                    break;
                default:
                    console.log("\nOpção inválida!\n");
                    break;
            }
        } while (opcao != 0);
    }

    aplicarJuros() {
        // Usa a função 'aplicar' para aplicar os juros de acordo com os parâmetros passados
        this.aplicar('juros', this.juros, 5);
    }
}

module.exports = ContaCorrente;