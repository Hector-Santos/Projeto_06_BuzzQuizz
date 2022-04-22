let tituloQuizz = "";
let imagemQuizz = "";
let qtdPerguntas = "";
let qtdNiveis = "";
let pergunta = [];
let corDeFundo = [];
let respostaCorreta = [];
let urlCorreta = [];
let incorretaUm = [];
let urlIncorretaUm = [];
let incorretaDois = [];
let urlIncorretaDois = [];
let incorretaTres = [];
let urlIncorretaTres = [];



function renderScreen(button) {
    if (button.classList.contains("criaQuizz")) {
        document.querySelector(".container").classList.remove("hidden")
        document.querySelector(".sectionLista").classList.add("hidden")
        document.querySelector(".container").innerHTML =
            `<div class="quizzTitles">Comece pelo começo</div>
   <div class="questionario">
       <input class="tituloQizz"  type="text" placeholder="Titulo do seu quiz">
       <input class="imageURL"  type="text" placeholder="URL da imagem do seu quizz">
       <input class="qtdPerguntas"  type="text" placeholder="Quantidade de perguntas do quizz">
       <input class="qtdNiveis"  type="text" placeholder="Quantidade de níveis do quizz"> 
   </div>
   <button onclick="analisaInputInicial() " class="criaPerguntas avancar">Prosseguir para criar perguntas</button>
   </div>`
    } else if (button.classList.contains("criaPerguntas")) {
        criaPerguntas()
    } else if (button.classList.contains("criaNiveis")) {
        criaNiveis()
    }

}
function isUrl(string) {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return true
}

function isHex(string) {
    let re = /[0-9A-Fa-f]{6}/g

    if (string[0] === "#" && re.test(string.substring(1))) {
        return true
    } else
        return false
}

function analisaInputInicial() {
    tituloQuizz = document.querySelector(".tituloQizz").value
    imagemQuizz = document.querySelector(".imageURL").value
    qtdPerguntas = document.querySelector(".qtdPerguntas").value
    qtdNiveis = document.querySelector(".qtdNiveis").value

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
function analisaInputPerguntas() {
    let marcador
    for (let i = 1; i <= qtdPerguntas; i++) {
        pergunta[i] = document.querySelector(".pergunta" + i).value
        corDeFundo[i] = document.querySelector(".corDeFundo" + i).value
        respostaCorreta[i] = document.querySelector(".respostaCorreta" + i).value
        urlCorreta[i] = document.querySelector(".urlCorreta" + i).value
        incorretaUm[i] = document.querySelector(".incorretaUm" + i).value
        urlIncorretaUm[i] = document.querySelector(".urlIncorretaUm" + i).value
        incorretaDois[i] = document.querySelector(".incorretaDois" + i).value
        urlIncorretaDois[i] = document.querySelector(".urlIncorretaDois" + i).value
        incorretaTres[i] = document.querySelector(".incorretaTres" + i).value
        urlIncorretaTres[i] = document.querySelector(".urlIncorretaTres" + i).value

        if (pergunta[i].length < 20 || !isHex(corDeFundo[i])
            || respostaCorreta[i] == "" || incorretaUm[i] == ""
            || !isUrl(urlCorreta[i]) || !isUrl(urlIncorretaUm[i])
            || (!isUrl(urlIncorretaDois[i]) && urlIncorretaDois[i] != "")
            || (!isUrl(urlIncorretaTres[i]) && urlIncorretaTres[i] != "")
        ) {
            marcador = false
        } else {
            marcador = true
        }

    }
    if(marcador){
        renderScreen(document.querySelector(".criaNiveis"))
    }
    else{
        alert(`As perguntas devem ter pelo menos 20 caracteres
As imagens devem ser url's validas
Deve haver ao menos uma resposta incorreta por pergunta`)
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
    document.querySelector(".container").innerHTML = `<span class="quizzTitles">Crie suas perguntas</span>`
    for (let i = 1; i <= qtdPerguntas; i++) {
        document.querySelector(".container").innerHTML +=
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
            <input class="urlIncorretaTres${i}"\ type="text" placeholder="URL da imagem">
        </div>
        </div>
        `
    }
    document.querySelector(".container").innerHTML +=
        `<button onclick="analisaInputPerguntas()" class="criaNiveis avancar">Prosseguir pra criar níveis</button>`
}
function criaNiveis() {
    document.querySelector(".container").innerHTML = `<span class="quizzTitles">Agora, decida os níveis</span>`
    for (let i = 1; i <= qtdNiveis; i++) {
        document.querySelector(".container").innerHTML +=
            `<div class="questionario">
            <div class="quizzTitles">Nível ${i}</div>
            <ion-icon onclick="mostraInput(${i})" class="editaInput" name="create-outline"></ion-icon>
            <div class="containerInput${i} hidden">
            <input class="nivel${i}" type="text" placeholder="Título do nível">
            <input class="%acertos${i}" type="text" placeholder="% de acerto mínima">
            <input class="urlNivel${i}" type="text" placeholder="URL da imagem do nível">
            <input class="descricaoNivel${i}" type="text" placeholder="Descrição do nível">
        </div>
        </div>
        `
    }
    document.querySelector(".container").innerHTML +=
        `<button onclick="renderScreen(this)" class="finalizaQuizz avancar">Finalizar Quizz</button>`
}

