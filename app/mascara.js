// Cria Máscara somente para números
const input = document.getElementById("CNPJ");

input.addEventListener("keypress", somenteNumeros);

function somenteNumeros(e) {

var charCode = (e.which) ? e.which : e.keyCode

if (charCode > 31 && (charCode < 48 || charCode > 57))

e.preventDefault();

 }

 ///////

 // Cria Máscara para CPF
 input.addEventListener("keyup", formatarCNPJ);

 function formatarCNPJ(e){

 var v= e.target.value.replace(/\D/g,"")                

 v=v.replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5") 

     e.target.value = v;

}

