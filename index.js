//Atividade 01 - Programa de gerenciamento de texto em um arquivo.txt

const prompt = require("prompt-sync")();
var fs = require('fs');
Arquivo = 'Arquivo.txt'
Ok = false;

function LerDados()
{
    console.log("Função 'Ler' selecionada! Listando dados do Arquivo:\n");

    fs.readFile(Arquivo, 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data);
      });
}

function EscreverDados()
{   
    console.log("Função 'Escrever' selecionada! Digite o que deseja escrever no arquivo:\n");
    Texto = prompt("")

    fs.writeFile(Arquivo, Texto, function(err) {
        if (err) throw err;
        console.log("\nTexto escrito com sucesso!");
      });
}

function AtualizarDados()
{
    console.log("Função 'Atualizar' selecionada! Digite o que deseja escrever no arquivo:\n");
    Texto = prompt("")

    fs.appendFile(Arquivo, Texto, function(err) {
        if (err) throw err;
        console.log("\nTexto atualizado com sucesso!");
      });
}

function DeletarDados()
{
    console.log("Função 'Deletar' selecionada! Digite o que deseja escrever no arquivo:\n");
    Texto = ""

    fs.writeFile(Arquivo, Texto, function(err) {
        if (err) throw err;
        console.log("\nTexto deletado com sucesso!");
      });
}

function ConfirmarAcao(Escolha, Acao)
{
    console.log(`\nVocê escolheu '${Escolha}. ${Acao}' deseja continuar? [S/N]\n`)
    Resposta = prompt("")
    switch (Resposta) {
        case "S":
        case "s":    
            console.log("\nContinuando execução...\n")
            Ok = true;
            break;
        case "N":
        case "n":
            console.log("\nExecução interrompida.\n");
            break;
        default:
            console.log("\nPor favor, digite 'S' para Sim e 'N' para Não.\n")
            ConfirmarAcao(Escolha, Acao);
            break;
    }
    return Ok;
}

function ProcessarEscolha()
{
    switch (Escolha) {
        case "1":
            Acao = "Ler" 
            Ok = ConfirmarAcao(Escolha, Acao);
            if (Ok) {
                LerDados();
            }
            break;
        case "2":
            Acao = "Escrever" 
            Ok = ConfirmarAcao(Escolha, Acao);
            if (Ok) {
                EscreverDados();
            }
            break;
        case "3":
            Acao = "Atualizar" 
            Ok = ConfirmarAcao(Escolha, Acao);
            if (Ok) {
                AtualizarDados();
            }
            break;
        case "4":
            Acao = "Deletar" 
            Ok = ConfirmarAcao(Escolha, Acao);
            if (Ok) {
                DeletarDados();
            }
            break;
    }
}

function FinalizarPrograma()
{
    console.log("Deseja executar o programa novamente? [S/N]\n");
    Reiniciar = prompt("");
    
    switch (Reiniciar) {
        case "S":
        case "s":    
            ReiniciarPrograma();
            break;
        case "N":
        case "n":
            console.log("\nFinalizando programa..\n")
            exit(0);
            break;
        default:
            console.log("\nPor favor, digite 'S' para Sim e 'N' para Não.\n")
            FinalizarPrograma();
            break;
    }
}

function IniciarPrograma()
{
    console.log(`
        Qual função você deseja executar no Arquivo.txt?
            
            1. Ler
            2. Escrever
            3. Atualizar
            4. Deletar
            
            `)
    Escolha = prompt("");   
    
    return Escolha; 
}

function ReiniciarPrograma()
{
    // Escolha = "";
    // Acao = "";
    // Resposta = "";
    Texto = "";
    
    App();
}

function App()
{
    IniciarPrograma();
    ProcessarEscolha(Escolha);
    FinalizarPrograma();
}

App();