function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let totaliza = document.getElementById("item-total");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se não foi digitado algum texto no campo de pesquisa, não faz nada
    if (!campoPesquisa || campoPesquisa == " "){
        return
    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let totais = "";
    let totalConsumo = 0;
    let totalGeracao = 0;

    //console.log(campoPesquisa)

    // Itera sobre cada anime na lista de animes populares
    for (let dado of dados) {
        if (dado.ano == campoPesquisa){
            // Cria um novo elemento de resultado para o anime atual 
            resultados += `
                <div class="item-resultado">
                    <h2> 
                        <strong class="negrito"><a target="_blank">${dado.mes} ${dado.ano}</a></strong>
                    </h2>
                    <p class="descricao-meta">Consumo: ${dado.consumo}.</p>
                    <p class="descricao-meta">Geração: ${dado.geracao}.</p>
                    <p class="descricao-meta">Delta: ${dado.geracao-dado.consumo} (kWh).</p>
                </div>
            `;
            totalConsumo = totalConsumo + dado.consumo;
            totalGeracao = totalGeracao + dado.geracao;

            //adiciona total
            totais = `
                <div class="item-total">
                    <p class="descricao-meta">Consumo: ${totalConsumo}.</p>
                    <p class="descricao-meta">Geração: ${totalGeracao}.</p>
                    <p class="descricao-meta">Delta: ${totalGeracao-totalConsumo}.</p>
                </div>
            `
        };
    };

    // Insere os resultados na seção HTML
    section.innerHTML = resultados;
    totaliza.innerHTML = totais;
};

function limpar(){
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa");
    let totaliza = document.getElementById("item-total");

    //Limpa a seção de todos os resultados
    section.innerHTML = "";
    totaliza.innerHTML = "";
    //Limpa campo de pesquisa e total
    campoPesquisa.value = "";
};