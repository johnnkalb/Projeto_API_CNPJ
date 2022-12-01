const cnpj = document.querySelector('#CNPJ')
const exibir = document.querySelector('#botaoExibir')
const errorSpan = document.querySelector('#errorSpan')
const form = document.querySelector('.flexbox-1')
const formulario = document.querySelector('container-form')
const erro = document.querySelector('.erro')
const inserirDados = document.querySelector('.ola')




const showData = (result)=>{
    if(result.error){
            console.log(result)
            alert(result.error)
            // document.querySelector('#RAZAOSOCIAL').value = result.error
    }
        else{
                document.querySelector('#CNPJ').value = result.CNPJ
                document.querySelector('#NOMEFANTASIA').value = result["NOME FANTASIA"]
                document.querySelector('#SITUACAO').value = result.STATUS
                document.querySelector('#RAZAOSOCIAL').value = result["RAZAO SOCIAL"]
                document.querySelector('#CNAEDESC').value = result["CNAE PRINCIPAL DESCRICAO"]
                    document.querySelector('#CNAECOD').value = result["CNAE PRINCIPAL CODIGO"]
                    document.querySelector('#CEP').value = result.CEP
                    document.querySelector('#ABERTURA').value = result["DATA ABERTURA"]
                        document.querySelector('#DDD').value = result.DDD
                        document.querySelector('#TELEFONE').value = result.TELEFONE
                        document.querySelector('#EMAIL').value = result.EMAIL
                            document.querySelector('#TIPOLOGRADOURO').value = result["TIPO LOGRADOURO"]
                                document.querySelector('#LOGRADOURO').value = result.LOGRADOURO
                                    document.querySelector('#NUMERO').value = result.NUMERO
                                    document.querySelector('#COMPLEMENTO').value = result.COMPLEMENTO
                                    document.querySelector('#BAIRRO').value = result.BAIRRO
                                    document.querySelector('#MUNICIPIO').value = result.MUNICIPIO
                                    document.querySelector('#UF').value = result.UF

                }
        }

        const exibeSalva =()=>{var botao = document.querySelector('#botaoAbreModal');botao.style.display ='inline-block'}

     

// const URL = `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${search}`;
    exibir.addEventListener('click', (e)=>{

        if(document.querySelector('#CNPJ').value == ''){
            alert('NENHUM CPF DIGITADO!')
        }
        else{
           
            exibeSalva()

            let search = cnpj.value.replaceAll(/[./-]/g,'') //remove os caracteres do link
        e.preventDefault()

    
        let headers = new Headers();
        headers.append("Accept", "*/*");
        headers.append("User-Agent", "Thunder Client (https://www.thunderclient.com)");
        headers.append('Origin','http://127.0.0.1:5500');

        const options = 
        {
            method: 'GET', 
            headers: headers,
        };

            

        // https://receitaws.com.br/v1/cnpj/
        // https://api-publica.speedio.com.br/buscarcnpj?cnpj=
        fetch(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${search}`, options)
        .then(response => response.json())
        //   .then(response => console.table(response))
        .then(response => showData(response))
        
        .catch(err => alert(`${err}
    (ERRO)`)), document.querySelector(".formulario").reset()
        }
        
    })
        