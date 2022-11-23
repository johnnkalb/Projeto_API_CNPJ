const cnpj = document.querySelector('#CNPJ')
// const ID = document.querySelector('#')
const errorSpan = document.querySelector('#errorSpan')
const form = document.querySelector('.flexbox-1')
const formulario = document.querySelector('container-form')
const erro = document.querySelector('.erro')


const inserirDados = document.querySelector('.ola')
// const express = require('express')

// 32840757000180 CNPJ QUERY PARA SEARCH
// const URL = `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${search}`;



cnpj.addEventListener('blur', (e)=>{
    let search = cnpj.value.replaceAll('.', '') //remove os caracteres do link
    




 
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

    //    function carregando(){
    //     inserirDados.innerHTML = ' <img src="./icons/Spinner-0.7s-114px.svg" alt="CARREGANDO">'
    //    }
        function exibirDados(result){
            //Limpa
    
                if(result.error){
                        console.log(result)
                }
                    else{
                        
                            console.table(result)
                            // console.table(result)
                    }
                }


    // https://receitaws.com.br/v1/cnpj/
    // https://api-publica.speedio.com.br/buscarcnpj?cnpj=

    
    fetch(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${search}`, options)
      .then(response => response.json())
    //   .then(response => console.table(response))
      .then(response => exibirDados(response))
      
      .catch(err => console.error(err)), document.querySelector(".formulario").reset();})
        
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


