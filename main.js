const ContaCorrente = require('./contaCorrente');
const ContaPoupanca = require('./contaPoupanca');
const prompt = require('prompt-sync')();

// As listas servem para separar cada tipo de conta
let listaContasCorrente = [];
let listaContasPoupanca = [];

function menu() {
    do {
        // O menu principal do sistema permite criar uma conta e procurar uma conta ja existente
        console.log(`----- Banco MeuBank -----\n`);
        console.log("0 - Sair");
        console.log("1 - Criar uma nova conta");
        console.log("2 - Selecionar uma conta existente");
        // O usuário seleciona a opção
        var opcao = +prompt("Selecione uma opção: ");    
        switch (opcao) {
            case 0:
                // Selecionando 0, o usuário encerra o sistema
                console.log("\nSaindo do sistema MeuBank...\n");
                break
            case 1:
                console.log("\nCriando uma nova conta...");
                // Para criar uma nova conta, é executada uma função que retorna o valor que o usuário seleciona            
                tipoConta = selecionarConta();
                // O sistema cria uma conta de acordo com a opção
                if (tipoConta == 1) {
                    criarConta(ContaCorrente, listaContasCorrente);
                } else if (tipoConta == 2) {
                    criarConta(ContaPoupanca, listaContasPoupanca);
                } else {
                    console.log("\nConta inválida...\n");
                }
                break;
            case 2:
                console.log("\nSelecionando uma conta...");
                // Para entrar em uma conta existente, também é executada a função que retorna o valor que o usuário seleciona            
                tipoConta = selecionarConta();
                if (tipoConta == 1) {
                    // O sistema procura a conta do usuário com a função 'procurarConta'
                    procurarConta(listaContasCorrente);
                } else if (tipoConta == 2) {
                    procurarConta(listaContasPoupanca);
                } else {
                    console.log("Conta inválida...");
                }
                break; 
            default:
                // Se o usuário digitar uma opção que não existe, o sistema retorna 'valor inválido' por padrão
                console.log("\nValor inválido...\n");
                break;
        }
        // Enquanto o usuário não sair do programa digitando 0, ou digitar um valor inválido, o sistema continua exibindo o menu
    } while (opcao != 0 || isNaN(opcao));
}

// Essa função exibe as opções de conta e retorna o valor digitado no prompt
function selecionarConta() {
    console.log("1 - Conta corrente ");
    console.log("2 - Conta poupança ");
    return +prompt("Selecione o tipo de conta: ");
}

// Essa função procura a conta no nome digitado pelo usuário e verifica se ela existe
// Se existir, exibe as opções disponíveis de acordo com o tipo de conta
// O valor passado como parâmetro é qual lista deve ser usada para fazer a busca
function procurarConta(listaContas) {
    let titular = prompt("Digite o nome do titular da conta: ");
    let conta = listaContas.find((conta) => conta['titular'] == titular);
    if(!conta) {
        console.log(`\nConta com titular ${titular} não encontrada!\n`);
    } else {
        conta.exibirOpcoesConta();
    }
}

// Essa função cria uma nova conta e a adiciona em uma lista
// Os parâmetros são: o tipo de conta (corrente ou poupança) e a lista que a conta vai ser inserida
function criarConta(tipoConta, listaContas) {
    const conta = new tipoConta;
    conta['titular'] = prompt("Digite o nome do titular da conta: ");
    console.log(`\nSucesso!!! Você criou uma conta no nome de ${conta['titular']}\n`);
    listaContas.push(conta);
}

menu();
