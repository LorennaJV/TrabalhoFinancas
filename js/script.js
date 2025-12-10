/* Cadastro do salário */
document.getElementById("FormCadastroSala").addEventListener("submit", function(event){
    event.preventDefault(); /* Impede a página de recarregar */

    var salario = document.getElementById("salario").value; /* Pega o salário digitado */
    localStorage.setItem("salario", salario); /* Salva no localStorage */

    document.getElementById("FormCadastroSala").reset(); /* Limpa o formulário */
});


/* Cadastro das despesas */
document.getElementById("FormCadastroDesp").addEventListener("submit", function(event){
    event.preventDefault();

    var nome = document.getElementById("nomedesp").value;
    var data = document.getElementById("datadesp").value;
    var valor = document.getElementById("valordesp").value;

    /* Cria objeto da despesa */
    var despesa = { nome: nome, data: data, valor: valor };

    /* Carrega lista ou cria lista vazia */
    var lista_finanças = JSON.parse(localStorage.getItem('listagem')) || [];

    lista_finanças.push(despesa); /* Adiciona a despesa */
    localStorage.setItem('listagem', JSON.stringify(lista_finanças)); /* Salva */

    document.getElementById('FormCadastroDesp').reset(); /* Limpa o formulário */

    exibir_finanças()
});


/* Exibir lista de despesas */
function exibir_finanças(){
    var lista_finanças = JSON.parse(localStorage.getItem('listagem')) || []; /* Carrega a lista */
    var output = document.getElementById('output');

    output.innerHTML = ""; /* Limpa a lista mostrada */

    /* Percorre todas as despesas */
    for(let i = 0; i < lista_finanças.length; i++){
        let li = document.createElement('li');

        /* Texto exibido */
        li.textContent =
            'Nome: ' + lista_finanças[i].nome + ' - ' +
            'Valor: ' + lista_finanças[i].valor + ' - ' +
            'Data: ' + lista_finanças[i].data;

        output.appendChild(li); /* Adiciona na ul */
    }
}


/* Exibir resumo financeiro */
function exibirResumo() {
    let salario = Number(localStorage.getItem("salario")) || 0;
    let lista = JSON.parse(localStorage.getItem("listagem")) || [];

    let total = 0;

    /* Soma todas as despesas */
    for (let i = 0; i < lista.length; i++) {
        total += Number(lista[i].valor);
    }

    let saldo = salario - total; 

    document.getElementById('formsresumo').innerHTML
    formsresumo.textContent= 
    "Salário: R$ " + salario +
    "\nDespesas: R$ " + total +
    "\nSaldo: R$ " + saldo
    
}

function apagardesp() {
    
 /*Pega a lista atual*/
let lista = JSON.parse(localStorage.getItem('listagem')) || [];

if (lista.length === 0) {
    alert("Não existem despesas para apagar");
    return;
    }   
else{
localStorage.setItem('listagem', JSON.stringify([])); /** Zera a lista */
    exibir_finanças(); /** Atualiza a tela */
    }
}

