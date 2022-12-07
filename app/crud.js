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
            location.reload()
        } 
    }
    // }

    // const createRow = (cliente) =>{
    //     const newRow = document.createElement('tr')
    //     newRow.innerHTML = `
    //     <td>${cliente.nome}</td>
    //     <td>${cliente.email}</td>
    //     <td>${cliente.telefone}</td>
    //     <td>${cliente.cidade}</td>
    //     <td>
    //         <button type="button" class="button green">editar</button>
    //         <button type="button" class="button red">excluir</button>
    //     </td>
    //     `
    //     document.querySelector('#tableCliente>tbody').appendChild(newRow)
    // }

    // const updadeTable = () =>{
    //     const dbCliente = readCliente()
    //     dbCliente.forEach(createRow)
    // }

const abreModal = (e) =>{
    var botao = document.querySelector('.modal');
    botao.style.display ='inline-block'
    e.preventDefault()
}
const abreModalExibe = (e) =>{
    var botaoExibe = document.querySelector('.modal_exibe');
    botaoExibe.style.display = 'inline-block';
    e.preventDefault()
}

// ----------------------

  
    document.getElementById('botaoAbreModal')
        .addEventListener('click', abreModal)

    document,getElementById('botaoLer')
        .addEventListener('click', abreModalExibe)

    document.getElementById('botaoSalvar')
    .addEventListener('click', saveCliente)