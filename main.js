const cnpj = document.querySelector('#CNPJ')
// const ID = document.querySelector('#')
const errorSpan = document.querySelector('#errorSpan')
const form = document.querySelector('.formulario')
const erro = document.querySelector('.erro')


const inserirDados = document.querySelector('.flexbox-geral')
// const express = require('express')

// 32840757000180 CNPJ QUERY PARA SEARCH
// const URL = `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${search}`;



cnpj.addEventListener('blur', (e)=>{
    let search = cnpj.value.replace('.', '') //remove os caracteres do link
 
    let headers = new Headers();
    headers.append("Accept", "*/*");
    headers.append("User-Agent", "Thunder Client (https://www.thunderclient.com)");
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','http://127.0.0.1:5500');

    const options = 
        {
        method: 'GET', 
        headers: headers,
        };

       function carregando(){
        inserirDados.innerHTML = ' <img src="./icons/Spinner-0.7s-114px.svg" alt="CARREGANDO">'
       }
        function exibirDados(result){
            inserirDados.innerHTML = ''; //Limpa
            ;
                
                    inserirDados.innerHTML += 
                    ` 
                <div class="flexbox-1">
                    <div class="container__itens">
                        <label for="cnpj" class="subtitulo--resultado">CNPJ</label>
                        <input type="text" id="CNPJ" class="form-control" name="RAZAO" value="${result.CNPJ}">
                        <!-- <span id="error"></span> -->
                    </div>

                    <div class="container__itens">
                        <label for="NOME FANTASIA" class="subtitulo--resultado">Nome Fantasia</label>
                        <input type="text" id="NOME FANTASIA" class="form-control" value="${result["NOME FANTASIA"]}">
                    </div>

                    <div class="container__itens">
                    <label for="tipo" class="subtitulo--resultado">Situação</label>
                    <input type="text" id="tipo" class="form-control" value="${result.STATUS}">
                </div>
                
               
                   
                    
                </div>
                    <div class="container__itens">
                        <label for="NOMEFANTASIA" class="subtitulo--resultado">Razão Social</label>
                        <input type="text" id='NOMEFANTASIA' class="form-control" value="${result["RAZAO SOCIAL"]}">
                        <span class="erro"></span>
                    </div>
                    
                
                <div class="container__itens">
                    <label for="CNAEDESC" class="subtitulo--resultado">CNAE Principal Desc.</label>
                    <input type="text" id="CNAEDESC" class="form-control" value="${result["CNAE PRINCIPAL DESCRICAO"]}">
                </div>

                <div class="container__itens">
                    <label for="CNAEDESC" class="subtitulo--resultado">CNAE Principal Código</label>
                    <input type="text" id="CNAEDESC" class="form-control" value="${result["CNAE PRINCIPAL CODIGO"]}">
                </div>

                <div class="container__itens">
                    <label for="situacao" class="subtitulo--resultado">CEP</label>
                    <input type="CEP" id="DATA ABERTURA" class="form-control" value="${result.CEP}">
                </div>

                <div class="container__itens">
                    <label for="situacao" class="subtitulo--resultado">Data Abertura</label>
                    <input type="CEP" id="DATA ABERTURA" class="form-control" value="${result["DATA ABERTURA"]}">
                </div>
               
                <div class="container__itens">
                    <label for="situacao" class="subtitulo--resultado">DDD</label>
                    <input type="text" id="DDD" class="form-control" value="${result.DDD}">
                </div>

                <div class="container__itens">
                    <label for="situacao" class="subtitulo--resultado">Telefone</label>
                    <input type="text" id="TELEFONE" class="form-control" value="${result.TELEFONE}">
                </div>


                <div class="container__itens">
                    <label for="situacao" class="subtitulo--resultado">Email</label>
                    <input type="text" id="EMAIL" class="form-control" value="${result.EMAIL}">
                </div>

              

                   

                    <div class="container__itens">
                        <label for="TIPOLOGRADOURO" class="subtitulo--resultado">Tipo Logradouro</label>
                        <input type="text" id="TIPOLOGRADOURO" class="form-control" value="${result["TIPO LOGRADOURO"]}">
                    </div>

                    <div class="container__itens">
                        <label for="LOGRADOURO" class="subtitulo--resultado">Logradouro</label>
                        <input type="text" id="LOGRADOURO" class="form-control" value="${result.LOGRADOURO}">
                    </div>

                    <div class="container__itens">
                        <label for="NUMERO" class="subtitulo--resultado">Número</label>
                        <input type="text" id="NUMERO" class="form-control" value="${result.NUMERO}">
                    </div>

                    <div class="container__itens">
                        <label for="COMPLEMENTO" class="subtitulo--resultado">Complemento</label>
                        <input type="text" id="COMPLEMENTO" class="form-control" value="${result.COMPLEMENTO}">
                    </div>

                    <div class="container__itens">
                        <label for="situacao" class="subtitulo--resultado">Bairro</label>
                        <input type="text" id="BAIRRO" class="form-control" value="${result.BAIRRO}">
                    </div>

                    <div class="container__itens">
                        <label for="situacao" class="subtitulo--resultado">Municipio</label>
                        <input type="text" id="MUNICIPIO" class="form-control" value="${result.MUNICIPIO}">
                    </div>

                    <div class="container__itens">
                        <label for="situacao" class="subtitulo--resultado">Unidade Federativa(UF)</label>
                        <input type="text" id="UF" class="form-control" value="${result.UF}">
                    </div>


                  
            
                        `
                        console.table(result)
                        // console.table(result)
                }



    // https://receitaws.com.br/v1/cnpj/
    // https://api-publica.speedio.com.br/buscarcnpj?cnpj=

    
    fetch(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${search}`, options)
      .then(response => response.json())
    //   .then(response => console.table(response))
      .then(response => exibirDados(response))
      
      .catch(err => console.error(err)), form.reset()})
        
     //EXECUTA

// function (showData){
//     inserirDados.innerHtml = 
//     `
//     <div class="container__itens">
//     <label for="porte" class="subtitulo--resultado">Porte</label>
//     <input type="text" id="porte" class="form-control">
//     </div>
//     `
// }


