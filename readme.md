API que consulta CNPJ, Feita Exclusivamente Para Fins de Estudos.

-------  MADE BY John Kalb ----------

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


         if (index=='new'){
                if(getLocalStorage(consulta.CNPJ) === null){
                    console.log(localStorage.getItem("db_CNPJ"))
                    createConsulta(consulta)
                    updadeTable()
                    abreModalExibe()
                    // location.reload()
                }else{
                    console.log('diferente de nulo') 
                    console.log(localStorage.getItem("db_CNPJ"))
                    console.log(consulta.CNPJ)
                }
                }else{
                    updadeConsulta(index, consulta)
                    updadeTable()
                    abreModalExibe()
                    }
