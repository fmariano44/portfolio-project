/* Objetivo: quando clicarmos na aba temos que mostrar o conteudo da aba que foi clicadoa pelo usuario e esconder o conteudo da aba anterior 
 * passo 1 dar um jeito de pegar os elementos que representam as abas no html
 * passo 2 dar um jeito de identificar o clique no elemento da aba
 * passo 3 quando o usuario clicar desmarcar a aba selecionada
 * passo 4 marcar a aba clicada como selecionado
 * passo 5 esconder o conteudo anterior
 * passo 6 mostrar o conteudo da aba selecionada
 */

//passo 1
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    //passo 2
    aba.addEventListener("click", function(){ 
        
        if(aba.classList.contains("selecionado")){//n rodar o codigo se a aba ja estiver selecionada
            return;
        }

        selecionarAba(aba);
        monstrarInfoDaAba(aba);
    });
});

function selecionarAba(aba){
    //passo 3
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
    
    //passo 4
    aba.classList.add("selecionado");
}

function monstrarInfoDaAba(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionado"); //passo 5
    informacaoSelecionada.classList.remove("selecionado");
        
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;

    const infoSerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    infoSerMostrada.classList.add("selecionado");

}