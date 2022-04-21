const tituloQuizz = "";
const imagemQuizz = "";
const qtdPerguntas = "";
const qtdNiveis = "";


function renderScreen(button) {
    if (button.classList.contains("criaQuizz")) {
        document.querySelector(".container-cria-quizz").classList.remove("hidden")
        document.querySelector(".container-cria-quizz").innerHTML =
            `<div class="quizzTitles">Começe pelo começo</div>
   <div class="questionario">
       <input class="tituloQizz"  type="text" placeholder="Titulo do seu quiz">
       <input class="imageURL"  type="text" placeholder="URL da imagem do seu quizz">
       <input class="qtdPerguntas"  type="text" placeholder="Quantidade de perguntas do quizz">
       <input class="qtdNiveis"  type="text" placeholder="Quantidade de níveis do quizz"> 
   </div>
   <button onclick="analisaInput() " class="criaPerguntas avancar">Prosseguir para criar perguntas</button>
   </div>`
    } else if (button.classList.contains("criaPerguntas"))
        document.querySelector(".container-cria-quizz").innerHTML =
            `<span class="quizzTitles">Crie suas perguntas</span>
            <div class="questionario">
                <div class="quizzTitles">Pergunta 1</div>
                <ion-icon onclick="mostraInput()" class="editaInput" name="create-outline"></ion-icon>
                <div class="containerInput hidden">
                <input class="pergunta" type="text" placeholder="Texto da pergunta">
                <input class="corDeFundo" type="text" placeholder="Cor de fundo da pergunta">
                <div class="quizzTitles">Resposta correta</div>
                <input class="respostaCorreta" type="text" placeholder="Resposta correta">
                <input class="urlCorreta" type="text" placeholder="URL da imagem">
                <div class="quizzTitles">Respostas incorretas</div>
                <input class="incorretaUm" type="text" placeholder="Resposta incorreta 1">
                <input class="urlIncorretaUm" type="text" placeholder="URL da imagem">
                <input class="incorretaDois" type="text" placeholder="Resposta incorreta 2">
                <input class="urlIncorretaDois" type="text" placeholder="URL da imagem">
                <input class="incorretaTres" type="text" placeholder="Resposta incorreta 3">
                <input class="urlIncorretaTres" type="text" placeholder="URL da imagem">
            </div>
            </div>
            <button onclick="renderScreen(this)" class="criaNiveis avancar">Prosseguir pra criar níveis</button>`
}
function analisaInput() {
    tituloQuizz = document.querySelector(".tituloQizz").value
    imagemQuizz = document.querySelector(".imageURL").value
    qtdPerguntas = document.querySelector(".qtdPerguntas").value
    qtdNiveis = document.querySelector(".qtdNiveis").value
    function isUrl(string) {
        let url;
        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }
        return true
    }

    if ((tituloQuizz.length > 65 || tituloQuizz.length < 20) || !isUrl(imagemQuizz)
        || (parseInt(qtdPerguntas) == NaN || parseInt(qtdPerguntas) < 3)
        || (parseInt(qtdNiveis) == NaN || parseInt(qtdNiveis) < 2)) {
        alert(`O título deve ter entre 20 e 65 caracteres
A imagem deve ser um url valida
O numero de perguntas deve ser um numero inteiro maior ou igual a 3
O numero de níveis deve ser um numero inteiro maior ou igual a 2
Não escreva os numeros por extenso `)
    } else {
        renderScreen(document.querySelector(".criaPerguntas"))
    }

}
function mostraInput() {
    if (document.querySelector(".containerInput").classList.contains("hidden")) {
        document.querySelector(".containerInput").classList.remove("hidden")
    } else {
        document.querySelector(".containerInput").classList.add("hidden")
    }
}
