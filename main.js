const cnpj = document.querySelector('#cnpj')
const errorSpan = document.querySelector('#errorSpan')
// const express = require('express')
// const 


const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo))
        document.querySelector("#"+campo).value = result[campo]
        // console.log(campo)
    }
}


cnpj.addEventListener('blur', (e)=>{
    let search = cnpj.value.replace('.', '') //remove os caracteres do link
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','http://localhost:5500');

    const options = {
        method: 'GET',
        mode: 'cors',  
        cache: 'default',
        headers: headers
    }

  fetch(`https://receitaws.com.br/v1/cnpj/${search}`, options)
    .then(response=>{response.json()
        .then(data=>showData(data), errorSpan.innerHTML=``)
    })
    .catch(e=> console.log=``)
})
