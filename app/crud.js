const cnpj_box = document.getElementById('CNPJ')


const botaoDeletar = document.querySelector('.botao__consulta--delete')

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
const deleteConsulta = (index) =>{
    const dbCNPJ = readConsulta()
    dbCNPJ.splice(index, 1)
    setLocalStorage(dbCNPJ)
    updadeTable()
}  

const updadeConsulta = (index, consulta) => {
    const dbCNPJ = readConsulta()
    dbCNPJ[index]= consulta
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

 const saveConsulta = (e) =>{
    if(isValidConsulta()){
        // if(getLocalStorage() != null){
        //       console.log('a')
        // }else{
            const consulta = {
                // A_PESQUISA: document.querySelector('#NOMEDEPESQUISA').value,
                CNPJ: document.querySelector('#CNPJ').value,
                NOME_FANTASIA: document.querySelector('#NOMEFANTASIA').value,
                RAZAO_SOCIAL: document.querySelector('#RAZAOSOCIAL').value,
                STATUS: document.querySelector('#SITUACAO').value,
                CNAE_PRINCIPAL_DESCRICAO: document.querySelector('#CNAEDESC').value,
    
                    CNAE_PRINCIPAL_CODIGO: document.querySelector('#CNAECOD').value,
                    CEP: document.querySelector('#CEP').value,
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
            
            
            const index = document.getElementById('CNPJ').dataset.index
            e.preventDefault()
            fechaModal()
        if (index=='new'){
            
            createConsulta(consulta)
            updadeTable()
            abreModalExibe()
            // location.reload()
        }else{
            updadeConsulta(index, consulta)
            updadeTable()
            abreModalExibe()
        }
        } 
    }
    // }

    const createRow = (consulta, index) =>{
        const newRow = document.createElement('tr')
        newRow.innerHTML = `
        <td class="tabela__itemConsulta" id='crudTabela'><div class='editTable'> <button type="button" class="buttonEdit" id='edit-${index}'>Editar</button></div>
        <div class='editTable'> <button type="button" class="botao__consulta--delete" id='delete-${index}'>Exluir</button></div>
        </td>
        <td class="tabela__itemConsulta">${consulta.CNPJ}</td>
        <td class="tabela__itemConsulta">${consulta.NOME_FANTASIA}</td>
        <td class="tabela__itemConsulta">${consulta.RAZAO_SOCIAL}</td>
        <td class="tabela__itemConsulta">${consulta.STATUS}</td>
        <td class="tabela__itemConsulta">${consulta.CNAE_PRINCIPAL_DESCRICAO}</td>
        <td class="tabela__itemConsulta">${consulta.CNAE_PRINCIPAL_CODIGO}</td>
        <td class="tabela__itemConsulta">${consulta.CEP}</td>
        <td class="tabela__itemConsulta">${consulta.DATA_ABERTURA}</td>
        <td class="tabela__itemConsulta">${consulta.DDD}</td>
        <td class="tabela__itemConsulta">${consulta.TELEFONE}</td>
        <td class="tabela__itemConsulta">${consulta.EMAIL}</td>
        <td class="tabela__itemConsulta">${consulta.TIPO_LOGRADOURO}</td>
        <td class="tabela__itemConsulta">${consulta.LOGRADOURO}</td>
        <td class="tabela__itemConsulta">${consulta.NUMERO}</td>
        <td class="tabela__itemConsulta">${consulta.COMPLEMENTO}</td>
        <td class="tabela__itemConsulta">${consulta.BAIRRO}</td>
        <td class="tabela__itemConsulta">${consulta.MUNICIPIO}</td>
        <td class="tabela__itemConsulta">${consulta.UF}</td>
        </td>
       
        `
        document.querySelector('#tableConsulta>tbody').appendChild(newRow)
    }

    const clearTable = () =>{//Limpa a Tabela para não duplicar as informações
        const rows = document.querySelectorAll('#tableConsulta>tbody tr')
        rows.forEach(row => row.parentNode.removeChild(row))
    }

    const updadeTable = () =>{
        const dbCNPJ = readConsulta()
        clearTable() //antes de atualizar limpa a tabela, para não duplicar
        dbCNPJ.forEach(createRow)
    }

const abreModal = (e) =>{
    var botao = document.querySelector('.modal');
    botao.style.display ='inline-block'
    e.preventDefault()
}

    
    const abreModalExibe = (e) =>{
        var botaoExibe = document.querySelector('.modal_exibe');
        var modalForm = document.querySelector('.flexbox-geral');
        // var botaoSalvar = document.getElementById('botaoAbreModal')
       
        botaoExibe.style.display = 'block';
        modalForm.style.display = 'none';
        // botaoSalvar.style.display = 'none'
        // RESOLVER O PROBLEMA DAQUI
        
        updadeTable()
        fechaCrud()
        e.preventDefault()
       
    }

    // const abreBotaoModifica = () =>{
        
    // }

    const abreFormularioVolta = () =>{
        var formulario = document.querySelector('.flexbox-geral')
        var modalExibir = document.querySelector('.modal_Exibe')

        modalExibir.style.display = 'none';
        formulario.style.display = 'flex';
    mostraBotaoConsulta()
    }

    
const fillfields = (client) =>{ //preenche as infomeções já salvas
    document.getElementById('CNPJ').value = client.CNPJ
    document.getElementById('NOMEFANTASIA').value = client.NOME_FANTASIA
    document.getElementById('SITUACAO').value = client.STATUS
    document.getElementById('RAZAOSOCIAL').value = client.RAZAO_SOCIAL
    document.getElementById('CNAEDESC').value = client.CNAE_PRINCIPAL_DESCRICAO
    document.getElementById('CNAECOD').value = client.CNAE_PRINCIPAL_CODIGO
    document.getElementById('CEP').value = client.CEP
    document.getElementById('ABERTURA').value = client.DATA_ABERTURA
    document.getElementById('DDD').value = client.DDD
    document.getElementById('TELEFONE').value = client.TELEFONE
    document.getElementById('EMAIL').value = client.EMAIL
    document.getElementById('TIPOLOGRADOURO').value = client.TIPO_LOGRADOURO
    document.getElementById('LOGRADOURO').value = client.LOGRADOURO
    document.getElementById('NUMERO').value = client.NUMERO
    document.getElementById('COMPLEMENTO').value = client.COMPLEMENTO
    document.getElementById('BAIRRO').value = client.BAIRRO
    document.getElementById('MUNICIPIO').value = client.MUNICIPIO
    document.getElementById('UF').value = client.UF
    document.getElementById('CNPJ').dataset.index = client.index
}
const mostraBotaoConsulta = () =>{
    const botaoConsulta = document.getElementById('botaoAbreModal')
    botaoConsulta.style.display = 'inline-block'
}

    const fechaCrud = () =>{
        const botaoSalvar = document.querySelector('.botao__consulta--salvar')
        // const botaoDeletar = document.querySelector('.botao__consulta--delete')
        botaoSalvar.style.display = 'none'
        botaoDeletar.style.display ='none'}
    // 

    // PREENCHE AS INFORMAÇÕES CONFOR FOR CLICADO
    const editConsulta = (index) =>{
        const client = readConsulta()[index]
        client.index = index
        fillfields(client)
    }

    const editDelete = (event) => {
        if (event.target.type == 'button'){

            const [action, index] = event.target.id.split('-')
            
            const abreCrud = () =>{
                const botaoSalvar = document.querySelector('.botao__consulta--salvar>img')
        
                botaoSalvar.style.display = 'inline-block'
                botaoDeletar.style.display = 'inline-block'
                botaoDeletar.id = `delete-${index}`

            }



            if(action == 'edit'){
                editConsulta(index)
                mostraBotaoConsulta()
                deuLimpo()
                switchModalExibe()
                abreCrud()
                
            }else{
                const client = readConsulta()[index]
                const response = confirm(`Deseja Excluir "${client.NOME_FANTASIA}"?`)
                    if(response){
                        deleteConsulta(index)
                    }
                
            }
        }
        
    }

// ----------------------

  document.getElementById('botaoExibir')
    .addEventListener('click', abreFormularioVolta)

    document.getElementById('botaoAbreModal')
        .addEventListener('click', abreModal)

    document.getElementById('botaoLer')
        .addEventListener('click', abreModalExibe)

    document.getElementById('botaoSalvar')
    .addEventListener('click', saveConsulta)

    document.querySelector('#tableConsulta>tbody')
    .addEventListener('click', editDelete)