const vagas = [];

function listarVagasm () {
    const vagasText = vagas.reduce((function (textoFinal, vaga, indice) {
        textoFinal + `${indice}, `
        textoFinal += vaga.nome
        textoFinal += ` (${vaga.candidatos.length} candidatos).`
        return textoFinal
        }, "")
    )
    alert(vagasText)
}

function novaVaga () {
    const nome = prompt("Informe um nome para a vaga:")        
    const descricao = prompt("Informe uma descrição para essa vaga:")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga:")

    const confirm = confirm (
        `Deseja criar uma nova vaga com essas informações?\n
        Nome: ${nome}\n
        Descrição: ${descricao}\n
        Data Limite: ${dataLimite}`
    )

    if (confirm) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("Vaga criada com sucesso!")
    }
}

function exibirVaga () {
    const indice = prompt ("Informe o índice da vaga que deseja exibir:")
    const vaga = vaga[indice]

    const candidatosEmText = vaga.candidatos.reduce(function(textoFinal, candidato) {
        return textoFinal + "\n -" + candidato
    }, "")

    alert (
        `Vaga nº ${indice}\n
        Nome: ${vaga.nome}\n
        Descrição: ${vaga.descricao}\n
        Data Limite: ${vaga.dataLimite}\n
        Quantidade de Candidatos: ${vaga.candidatos.legth}\n
        Candidatos Inscritos: ${candidatosEmText}`
    )
}

function inscreverCandidato () {
    const candidato = prompt ("Informe o nome do(a) candato(a):")
    const indicevaga = prompt ("Informe o índice da vaga para a qual o candidato deseja se inscrever:")
    const vaga = vagas[indice]

    const confirm = confirm (
        `deseja inscrever o candidato ${candidato} na vaga ${indice}?\n
        Nome: ${vaga.nome}\n
        descrição: ${vaga.descricao}\n
        Data Limite: ${vaga.dataLimite}`
    )

    if (confirm) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada com sucesso!")
    }
}

function excluirVaga () {
    const indice = prompt ("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirm = confirm (
        `Tem certeza que deseja deletar a vaga ${indice}?\n
        Nome: ${vaga.nome}\n
        descrição: ${vaga.descricao}\n
        Data Limite: ${vaga.dataLimite}`
    )

    if (confirm) {
        vagas.splice(indice, 1)
        alert("vaga excluída com sucesso!")
    }
}

function exibirMenu () {
    const opcao = prompt (
    `cadastro de Vagas de Emprego\n\n
    Escolha uma das opções abaixo:\n
    1 - Listar vagas disponíveis\n
    2 - Criar uma nova vaga\n
    3 - visualizar uma vaga\n
    4 - Inscrever um candidato(a)\n
    5 - Excluir uma vaga\n
    6 - Sair`)

    return opcao
}

function executar () {
    let opcao = ""

    do {
        opcao = exibirMenu() 

        switch (opcao) {
            case "1":
                listarVagasm()
                break;
        
            case "2":
                novaVaga()        
            break;
               
            case "3":
                exibirVaga()       
                break;

            case "4":
                inscreverCandidato()                
                break;

            case "5":
                excluirVaga()                        
                break;

            case "6":
                alert("Saindo")                                
                break;

                
            default:
            alert("Opção inválida")
        }

    } while (opcao !== "6")
}

executar()

