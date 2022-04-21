const tituloQuizz = "";
const imagemQuizz = "";
const qntdPerguntas = "";
const qntdNiveis = "";


function renderScreen(button){
if(button.classList.contains("criaQuizz")){
 document.querySelector(".container-cria-quizz").classList.remove("hidden")
  document.querySelector(".container-cria-quizz").innerHTML =
   `<div class="quizzTitles">Começe pelo começo</div>
   <div class="questionario">
       <input class="tituloQizz"  type="text" placeholder="Titulo do seu quiz">
       <input class="imageURL"  type="text" placeholder="URL da imagem do seu quizz">
       <input class="qtdPerguntas"  type="text" placeholder="Quantidade de perguntas do quizz">
       <input class="qtdNiveis"  type="text" placeholder="Quantidade de níveis do quizz"> 
   </div>
   <button onclick="analisaInput()" class="criaPerguntas avancar">Prosseguir para criar perguntas</button>
   </div>`
}else if(button.classList.contains("criaPerguntas"))
document.querySelector(".container-cria-quizz").innerHTML = 
`   <span class="quizzTitles">Crie suas perguntas</span>
    <div class="questionario">
        <span class="quizzTitles">Pergunta 1</span>
        <input class="pergunta" type="text" placeholder="Texto da pergunta">
        <input class="cordefundo" type="text" placeholder="Cor de fundo da pergunta">
        <span class="quizzTitles">Resposta correta</span>
        <input class="RespostaCorreta" type="text" placeholder="Resposta correta">
        <input class="URLcorreta" type="text" placeholder="URL da imagem">
        <span class="quizzTitles">Respostas incorretas</span>
        <input class="incorretaum" type="text" placeholder="Resposta incorreta 1">
        <input class="URLincorretaum" type="text" placeholder="URL da imagem">
        <input class="incorretadois" type="text" placeholder="Resposta incorreta 2">
        <input class="URLincorretadois" type="text" placeholder="URL da imagem">
        <input class="incorretatres" type="text" placeholder="Resposta incorreta 3">
        <input class="URLincorretatres" type="text" placeholder="URL da imagem">
    </div>
    <button onclick="renderScreen(this)" class="criaNiveis avancar">Prosseguir pra criar níveis</button>
</div>`
}
function analisaInput(){
    const titulo = document.querySelector(".tituloQizz").value
    const imagem = document.querySelector(".tituloQizz").value
    const perguntas = document.querySelector(".qtdPerguntas").value
    const níveis = document.querySelector(".qtdNiveis").value
    function isUrl(string) {
        let url;
        try {
          url = new URL(string);
        } catch (_) {
          return false; 
        }
        return true
    }
    console.log(isUrl(imagem))

    if((titulo.length > 65 || titulo.length <20) ){
    
    }

}
