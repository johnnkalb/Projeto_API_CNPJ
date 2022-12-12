const cnpj_box = document.getElementById('CNPJ')

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_CNPJ')) ?? [] // Lê as Informações do LocalStorage, Transforma em JSON, e Armazena na Constante db_CNPJ, Caso Não Exista Cria um Array Vazio ( ??[] )

const setLocalStorage = (dbCNPJ) => localStorage.setItem("db_CNPJ", JSON.stringify(dbCNPJ)) // Posta A Informação No local Storage


// const tempConsulta = {
//     NOME_FANTASIA: "QUERY",
//     RAZAO_SOCIAL: "QUERY TECNOLOGIA DA INFORMACAO LTDA",
//     CNPJ: "32840757000180",
//     STATUS: "ATIVA",
//     CNAE_PRINCIPAL_DESCRICAO: "Desenvolvimento e licenciamento de programas de computador customizáveis",
//     CNAE_PRINCIPAL_CODIGO: "6202300",
//     CEP: "65060541",
//     DATA_ABERTURA: "21/02/2019",
//     DDD: "98",
//     TELEFONE: "81270800",
//     EMAIL: "roberiolemos@gmail.com",
//     TIPO_LOGRADOURO: "RODOVIA",
//     LOGRADOURO: "MA - 201/ ESTRADA DE RIBAMAR",
//     NUMERO: "43",
//     COMPLEMENTO: "",
//     BAIRRO: "FORQUILHA",
//     MUNICIPIO: "Sao luis",
//     UF: "MA"
//   }

// DELETE
const deleteCliente = (index) =>{
    const dbCNPJ = readConsulta()
    dbCNPJ.splice(index,1)
    setLocalStorage(dbCNPJ)
}  

//READ
const readConsulta = () => getLocalStorage()

// CREATE
const createConsulta = (consulta) =>{
        const dbCNPJ = getLocalStorage()
        dbCNPJ.push (consulta) // Ele Adiciona as Informações do consulta dentro da Array
        setLocalStorage(dbCNPJ)
    }

const isValidConsulta = () =>{
    return cnpj_box.reportValidity() 
}

const prevent = (event) =>{
    event.preventDefault()
}

 const saveCliente = (e) =>{
    if(isValidConsulta()){
        // if(getLocalStorage() != null){
        //       console.log('a')
        // }else{
            const cliente = {
                // A_PESQUISA: document.querySelector('#NOMEDEPESQUISA').value,
                CNPJ: document.querySelector('#CNPJ').value,
                NOME_FANTASIA: document.querySelector('#NOMEFANTASIA').value,
                RAZAO_SOCIAL: document.querySelector('#RAZAOSOCIAL').value,
                STATUS: document.querySelector('#SITUACAO').value,
                CNAE_PRINCIPAL_DESCRICAO: document.querySelector('#CNAEDESC').value,
    
                    CNAE_PRINCIPAL_CODIGO: document.querySelector('#CNAECOD').value,
                    CEP: document.querySelector('#CEP'),
                    DATA_ABERTURA: document.querySelector('#ABERTURA').value,
                    DDD: document.querySelector('#DDD').value,
    
                        TELEFONE: document.querySelector('#TELEFONE').value,
                        EMAIL:document.querySelector('#EMAIL').value,
                        TIPO_LOGRADOURO: document.querySelector('#TIPOLOGRADOURO').value,
                        LOGRADOURO: document.querySelector('#LOGRADOURO').value,
                        NUMERO: document.querySelector('#NUMERO').value,
    
                            COMPLEMENTO: document.querySelector('#COMPLEMENTO').value,
                            BAIRRO: document.querySelector('#BAIRRO').value,
                            MUNICIPIO: document.querySelector('#MUNICIPIO').value,
                            UF: document.querySelector('#UF').value,
            }
            
            createConsulta(cliente)
            updadeTable()
            location.reload()
        } 
    }
    // }

    const createRow = (cliente) =>{
        const newRow = document.createElement('tr')
        newRow.innerHTML = `

        <td class="tabela__itemConsulta">${cliente.CNPJ}</td>
        <td class="tabela__itemConsulta">${cliente.NOME_FANTASIA}</td>
        <td class="tabela__itemConsulta">${cliente.RAZAO_SOCIAL}</td>
        <td class="tabela__itemConsulta">${cliente.STATUS}</td>
        <td class="tabela__itemConsulta">${cliente.CNAE_PRINCIPAL_DESCRICAO}</td>
        <td class="tabela__itemConsulta">${cliente.CNAE_PRINCIPAL_CODIGO}</td>
        <td class="tabela__itemConsulta">${cliente.CEP}</td>
        <td class="tabela__itemConsulta">${cliente.DATA_ABERTURA}</td>
        <td class="tabela__itemConsulta">${cliente.DDD}</td>
        <td class="tabela__itemConsulta">${cliente.TELEFONE}</td>
        <td class="tabela__itemConsulta">${cliente.EMAIL}</td>
        <td class="tabela__itemConsulta">${cliente.TIPO_LOGRADOURO}</td>
        <td class="tabela__itemConsulta">${cliente.LOGRADOURO}</td>
        <td class="tabela__itemConsulta">${cliente.NUMERO}</td>
        <td class="tabela__itemConsulta">${cliente.COMPLEMENTO}</td>
        <td class="tabela__itemConsulta">${cliente.BAIRRO}</td>
        <td class="tabela__itemConsulta">${cliente.MUNICIPIO}</td>
        <td class="tabela__itemConsulta">${cliente.UF}</td>
        </td>
    
        `
        document.querySelector('#tableConsulta>tbody').appendChild(newRow)
    }

    const clearTable = () =>{//Limpa a Tabela para não duplicar as informações
        const rows = document.querySelectorAll('#tableConsulta>tbody tr')
        rows.forEach(row => row.parentNode.removeChild(row))
    }

    const updadeTable = () =>{
        const dbCliente = readConsulta()
        clearTable() //antes de atualizar limpa a tabela, para não duplicar
        dbCliente.forEach(createRow)
    }

const abreModal = (e) =>{
    var botao = document.querySelector('.modal');
    botao.style.display ='inline-block'
    e.preventDefault()
}

    
    const abreModalExibe = (e) =>{
        var botaoExibe = document.querySelector('.modal_exibe');
        var modalForm = document.querySelector('.flexbox-geral');
        var botaoSalvar = document.getElementById('botaoAbreModal')
       
        botaoExibe.style.display = 'block';
        modalForm.style.display = 'none';
        botaoSalvar.style.display = 'none'
        // RESOLVER O PROBLEMA DAQUI
        
        updadeTable()
        e.preventDefault()
       
    }


    const abreFormularioVolta = () =>{
        var formulario = document.querySelector('.flexbox-geral')
        var modalExibir = document.querySelector('.modal_Exibe')

        modalExibir.style.display = 'none'
        formulario.style.display = 'flex'
    }
// ----------------------

  document.getElementById('botaoExibir')
    .addEventListener('click', abreFormularioVolta)

    document.getElementById('botaoAbreModal')
        .addEventListener('click', abreModal)

    document.getElementById('botaoLer')
        .addEventListener('click', abreModalExibe)

    document.getElementById('botaoSalvar')
    .addEventListener('click', saveCliente)