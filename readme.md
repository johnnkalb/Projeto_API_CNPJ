export interface Main {
    "NOME FANTASIA":            string;
    "RAZAO SOCIAL":             string;
    CNPJ:                       string;
    STATUS:                     string;
    "CNAE PRINCIPAL DESCRICAO": string;
    "CNAE PRINCIPAL CODIGO":    string;
    CEP:                        string;
    "DATA ABERTURA":            string;
    DDD:                        string;
    TELEFONE:                   string;
    EMAIL:                      string;
    "TIPO LOGRADOURO":          string;
    LOGRADOURO:                 string;
    NUMERO:                     string;
    COMPLEMENTO:                string;
    BAIRRO:                     string;
    MUNICIPIO:                  string;
    UF:                         string;
}

detail:

























 function exibirDados(result){
            inserirDados.innerHTML = ''; //Limpa
            ;
                if(result.error){

                    inserirDados.innerHTML = 
                        `
                        <div class='flexbox-2'>
                            <span class='mensagem-error'>${result.error}</span>
                        </div>
                        `
                        console.log(result)
                }
                    else{
                        
                        inserirDados.innerHTML = 
                        ` 
                
                    <div class='flexbox-1'>

                    <div class="container__itens">
                                <label for="CNPJ" class="subtitulo--resultado">CNPJ</label>
                                <input type="text" id="CNPJ" class="form-control" value="${result.CNPJ}">
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
                        <label for="CNAECOD" class="subtitulo--resultado">CNAE Principal Código</label>
                        <input type="text" id="CNAECOD" class="form-control" value="${result["CNAE PRINCIPAL CODIGO"]}">
                    </div>

                    <div class="container__itens">
                        <label for="CEP" class="subtitulo--resultado">CEP</label>
                        <input type="CEP" id="CEP" class="form-control" value="${result.CEP}">
                    </div>

                    <div class="container__itens">
                        <label for="ABERTURA" class="subtitulo--resultado">Data Abertura</label>
                        <input type="CEP" id="ABERTURA" class="form-control" value="${result["DATA ABERTURA"]}">
                    </div>
                
                    <div class="container__itens">
                        <label for="DDD" class="subtitulo--resultado">DDD</label>
                        <input type="text" id="DDD" class="form-control" value="${result.DDD}">
                    </div>

                    <div class="container__itens">
                        <label for="TELEFONE" class="subtitulo--resultado">Telefone</label>
                        <input type="text" id="TELEFONE" class="form-control" value="${result.TELEFONE}">
                    </div>


                    <div class="container__itens">
                        <label for="EMAIL" class="subtitulo--resultado">Email</label>
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
                            <label for="BAIRRO" class="subtitulo--resultado">Bairro</label>
                            <input type="text" id="BAIRRO" class="form-control" value="${result.BAIRRO}">
                        </div>

                        <div class="container__itens">
                            <label for="MUNICIPIO" class="subtitulo--resultado">Municipio</label>
                            <input type="text" id="MUNICIPIO" class="form-control" value="${result.MUNICIPIO}">
                        </div>

                        <div class="container__itens">
                            <label for="UF" class="subtitulo--resultado">Unidade Federativa(UF)</label>
                            <input type="text" id="UF" class="form-control" value="${result.UF}">
                        </div>


                    
                
                            `    
                            console.table(result)
                            // console.table(result)
                    }
                }
