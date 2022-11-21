const cnpj = document.querySelector('#cnpj')
const errorSpan = document.querySelector('#errorSpan')
// const express = require('express')
// const 

// const URL = `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${search}`;



cnpj.addEventListener('blur', (e)=>{
    let search = cnpj.value.replace('.', '') //remove os caracteres do link
    
    let headers = new Headers();
    headers.append("Accept", "*/*");
    headers.append("User-Agent", "Thunder Client (https://www.thunderclient.com)");
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','http://127.0.0.1:5500');

    const options = {
        method: 'GET',
        mode: 'cors',  
        cache: 'default',
        headers: headers
    }


    


    const showData = (result)=>{
        for(const campo in result){
            if(document.querySelector("#"+campo))
            document.querySelector("#"+campo).value = result[campo]
            console.log(campo, "II")
        }
    }
  fetch(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${search}`, options)
  .then((response)=>{response.json()
    .then(data=>showData(data), errorSpan.innerHTML='')
     .catch((e=> console.log('error')))
    })
    .catch(e=> console.log=``)
})
// var client = new HttpClient();
// var request = new HttpRequestMessage();
// request.RequestUri = new Uri("https://api-publica.speedio.com.br/buscarcnpj?cnpj=31308464000193");
// request.Method = HttpMethod.Get;

// request.Headers.Add("Accept", "*/*");
// request.Headers.Add("User-Agent", "Thunder Client (https://www.thunderclient.com)");

// var response = await client.SendAsync(request);
// var result = await response.Content.ReadAsStringAsync();
// Console.WriteLine(result);