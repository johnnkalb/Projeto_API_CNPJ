// const options = {method: 'GET', headers: {'Content-Type': 'application/json'}};

// fetch('https://receitaws.com.br/v1/cnpj/cnpj', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));



const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo))
        document.querySelector("#"+campo).value = result[campo]
        // console.log(campo)
    }
}