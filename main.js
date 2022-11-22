const cnpj = document.querySelector('#CNPJ')
// const ID = document.querySelector('#')
const errorSpan = document.querySelector('#errorSpan')
const form = document.querySelector('.formulario')
const erro = document.querySelector('.erro')
// const express = require('express')
// const 

// export interface Main {
//     "NOME FANTASIA":            string;
//     "RAZAO SOCIAL":             string;
//     CNPJ:                       string;
//     STATUS:                     string;
//     "CNAE PRINCIPAL DESCRICAO": string;
//     "CNAE PRINCIPAL CODIGO":    string;
//     CEP:                        string;
//     "DATA ABERTURA":            string;
//     DDD:                        string;
//     TELEFONE:                   string;
//     EMAIL:                      string;
//     "TIPO LOGRADOURO":          string;
//     LOGRADOURO:                 string;
//     NUMERO:                     string;
//     COMPLEMENTO:                string;
//     BAIRRO:                     string;
//     MUNICIPIO:                  string;
//     UF:                         string;
// }


// 32840757000180 CNPJ QUERY PARA SEARCH
// const URL = `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${search}`;



cnpj.addEventListener('blur', (e)=>{
    let search = cnpj.value.replace('.', '' & '/', '' & '-', '') //remove os caracteres do link
 
    let headers = new Headers();
    headers.append("Accept", "*/*");
    headers.append("User-Agent", "Thunder Client (https://www.thunderclient.com)");
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','http://127.0.0.1:5500');

    const options = 
        {
        method: 'GET', 
        headers: headers
        };

    const showData = (result)=>{
        for(const campo in result){
            // let resposta = result.value.replace(' ', '')
            if(document.querySelector('#'+campo))
            // document.querySelector("#"+campo).value = result[campo]
            document.querySelector('#'+campo).value = result[campo]
            
            // console.log(campo)
        }
    }

    // https://receitaws.com.br/v1/cnpj/
    // https://api-publica.speedio.com.br/buscarcnpj?cnpj=

    
    fetch(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${search}`, options)
      .then(response => response.json())
    //   .then(response => console.table(response))
      .then(response => showData(response))
      
      .catch(err => console.error(err)), form.reset();
})

// function (showData){
//     inserirDados.innerHtml = 
//     `
//     <div class="container__itens">
//     <label for="porte" class="subtitulo--resultado">Porte</label>
//     <input type="text" id="porte" class="form-control">
//     </div>
//     `
// }