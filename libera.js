// const options = {method: 'GET', headers: {'Content-Type': 'application/json'}};

// fetch('https://receitaws.com.br/v1/cnpj/cnpj', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

const listaDados = document.querySelector('.flexbox-geral')

const showData = (result)=>{
    inserirDados.innerHTML = ''; //Limpa
        listaDados.forEach(dados => {
            inserirDados.innerHTML += 
            ` 
            <div class="container__itens">
                <label for="nome" class="subtitulo--resultado">${dados.EMAIL}</label>
                <input type="text" id='RAZAO SOCIAL' class="form-control">
                <span class="erro"></span>
            </div>
    
                `
        });
    }




    // const showData = (result)=>{
    //     for(const campo in result){
    //         // let resposta = result.value.replace(' ', '')
    //         if(document.querySelector('#'+campo))
    //         document.querySelector('#'+campo).value = result[campo]
    //         console.table(result)
    //     }
    // }