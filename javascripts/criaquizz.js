let tituloQuizz = "";
let imagemQuizz = "";
let qtdPerguntas = "";
let qtdNiveis = "";


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
    } else if (button.classList.contains("criaPerguntas")) {
        criaPerguntas()
    } else if(button.classList.contains("criaNiveis")){
        criaNiveis()
    }

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
function mostraInput(numero) {
    if (document.querySelector(".containerInput" + numero).classList.contains("hidden")) {
        document.querySelector(".containerInput" + numero).classList.remove("hidden")
    } else {
        document.querySelector(".containerInput" + numero).classList.add("hidden")
    }
}

function criaPerguntas() {
    document.querySelector(".container-cria-quizz").innerHTML = `<span class="quizzTitles">Crie suas perguntas</span>`
    for (let i = 1; i <= qtdPerguntas; i++) {
        document.querySelector(".container-cria-quizz").innerHTML +=
            `<div class="questionario">
            <div class="quizzTitles">Pergunta ${i}</div>
            <ion-icon onclick="mostraInput(${i})" class="editaInput" name="create-outline"></ion-icon>
            <div class="containerInput${i} hidden">
            <input class="pergunta${i}" type="text" placeholder="Texto da pergunta">
            <input class="corDeFundo${i}" type="text" placeholder="Cor de fundo da pergunta">
            <div class="quizzTitles">Resposta correta</div>
            <input class="respostaCorreta${i}" type="text" placeholder="Resposta correta">
            <input class="urlCorreta${i}" type="text" placeholder="URL da imagem">
            <div class="quizzTitles">Respostas incorretas</div>
            <input class="incorretaUm${i}" type="text" placeholder="Resposta incorreta 1">
            <input class="urlIncorretaUm${i}" type="text" placeholder="URL da imagem">
            <input class="incorretaDois${i}" type="text" placeholder="Resposta incorreta 2">
            <input class="urlIncorretaDois${i}" type="text" placeholder="URL da imagem">
            <input class="incorretaTres${i}" type="text" placeholder="Resposta incorreta 3">
            <input class="urlIncorretaTres${i}" type="text" placeholder="URL da imagem">
        </div>
        </div>
        `
    }
    document.querySelector(".container-cria-quizz").innerHTML += 
    `<button onclick="renderScreen(this)" class="criaNiveis avancar">Prosseguir pra criar níveis</button>`
}
function criaNiveis() {
    document.querySelector(".container-cria-quizz").innerHTML = `<span class="quizzTitles">Agora, decida os níveis</span>`
    for (let i = 1; i <= qtdNiveis; i++) {
        document.querySelector(".container-cria-quizz").innerHTML +=
            `<div class="questionario">
            <div class="quizzTitles">Nível ${i}</div>
            <ion-icon onclick="mostraInput(${i})" class="editaInput" name="create-outline"></ion-icon>
            <div class="containerInput${i} hidden">
            <input class="nivel${i}" type="text" placeholder="Título do nível">
            <input class="%acertos{i}" type="text" placeholder="% de acerto mínima">
            <input class="urlNivel${i}" type="text" placeholder="URL da imagem do nível">
            <input class="descricaoNivel${i}" type="text" placeholder="Descrição do nível">
        </div>
        </div>
        `
    }
    document.querySelector(".container-cria-quizz").innerHTML += 
    `<button onclick="renderScreen(this)" class="finalizaQuizz avancar">Finalizar Quizz</button>`
}

