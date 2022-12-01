
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
    // console.log(dbCNPJ)
    dbCNPJ.push (consulta) // Ele Adiciona as Informações do consulta dentro da Array
    setLocalStorage(dbCNPJ)
    // console.log(localStorage.getItem)
}

// VALIDA OS CAMPOS
// const isValidFileds = () =>{
//     return document.getElementById('CNPJ') >= 18;
//  }
const isValidConsulta = () =>{
    return document.getElementById('CNPJ').reportValidity()
}
 const saveCliente = () =>{
    if(isValidConsulta()){
        const cliente = {
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
        // location.reload()
        // console.log('TESTANDO CAMPO CADASTRO')
    }
}

// ----------------------


    document.getElementById('botaoSalvar')
    .addEventListener('click', saveCliente).preventDefault()