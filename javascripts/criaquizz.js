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
let nivel = [];
let acertos = [];
let urlNivel = [];
let descricaoNivel = [];
let quizz = [];
let listaId = [];


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
    }else if (button.classList.contains("finalizaQuizz")){
    enviaQuizz()
    document.querySelector(".container").innerHTML = 
    `<div class="quizzTitles">Seu quizz está pronto</div>
        <div class="containerImgQuizz">
            <img onclick="criaQuizz(), exibeQuizz()" class = "imagemQuizz"src="${imagemQuizz}" >
            <p>${tituloQuizz}</>
        </div>
    <button onclick="criaQuizz(), exibeQuizz()" class="acessaQuizz avancar">Acessar quizz</button>
    <div onclick="criaQuizz(), voltaHome()">Voltar para home</div>
    </div>`
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
    if (marcador) {
        renderScreen(document.querySelector(".criaNiveis"))
    }
    else {
        alert(`As perguntas devem ter pelo menos 20 caracteres
As imagens devem ser url's validas
Deve haver ao menos uma resposta incorreta por pergunta`)
    }
}
function analisaInputNiveis() {
    let marcador
    let acertos0
    for (let i = 1; i <= qtdNiveis; i++) {
        nivel[i] = document.querySelector(".nivel" + i).value
        acertos[i] = document.querySelector(".acertos" + i).value
        urlNivel[i] = document.querySelector(".urlNivel" + i).value
        descricaoNivel[i] = document.querySelector(".descricaoNivel" + i).value
        console.log(nivel[i])
        if (parseInt(acertos[i]) == 0){
            acertos0 = true
        }

        if (nivel[i].length < 10
            || (parseInt(acertos[i]) == NaN || parseInt(acertos[i]) < 0 || parseInt(acertos[i]) > 100)
            || !isUrl(urlNivel[i])
            || descricaoNivel[i].length < 30 
            || !acertos0
        ) {
            marcador = false
        } 
        else 
        {
            marcador = true
        }

    }
    if (marcador) {
        renderScreen(document.querySelector(".finalizaQuizz"))
    }
    else {
        alert(`O título dos níveis devem ter pelo menos 10 caracteres
As porcentagens de acerto devem ser numeros entre 0 e 10
As imagens devem ser url's validas
As descrições dos níveis devem ter pelo menos 30 caracteres
Deve haver ao menos uma porcentagem igual a zero`)
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
            <input class="acertos${i}" type="text" placeholder="% de acerto mínima">
            <input class="urlNivel${i}" type="text" placeholder="URL da imagem do nível">
            <input class="descricaoNivel${i} descricao" type="text" placeholder="Descrição do nível">
        </div>
        </div>
        `
    }
    document.querySelector(".container").innerHTML +=
        `<button onclick="analisaInputNiveis()" class="finalizaQuizz avancar">Finalizar Quizz</button>`
}

function enviaQuizz(){
    let perguntas = []
    let niveis = []
    for(let i = 1; i <= qtdPerguntas; i++){
        perguntas[i-1] = {
            title: pergunta[i],
            color:  corDeFundo[i],
            answers: [
                {
                    text: respostaCorreta[i],
                    image: urlCorreta[i],
                    isCorrectAnswer: true
                },
                {
                    text: incorretaUm[i],
                    image: urlIncorretaUm[i],
                    isCorrectAnswer: false
                },
                {
                    text: incorretaUm[i],
                    image: urlIncorretaUm[i],
                    isCorrectAnswer: false
                }
            ]
        }
        if(incorretaDois[i] != "")
        perguntas[i-1].answers += {
            text: incorretaDois[i],
            image: urlIncorretaDois[i],
            isCorrectAnswer: false
        }
        if(incorretaTres[i] != "")
        perguntas[i-1].answers += {
            text: incorretaTres[i],
            image: urlIncorretaTres[i],
            isCorrectAnswer: false
        }
    }
    
    for (let i = 1; i <= qtdNiveis; i++){
        niveis[i-1] =  {
            title: nivel[i],
            image: urlNivel[i],
            text: descricaoNivel[i],
            minValue: acertos[i]
        }
    }
    
    quizz =
        {
            title: tituloQuizz,
            image: imagemQuizz,
            questions: perguntas,
            levels: niveis
        }

    let promisse = axios.post("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes", quizz)
    promisse.then(armazenaId)
}

function armazenaId(objeto){
    let id = objeto.data.id
    let listaIdSerializada
    if(localStorage.getItem("lista") != null)
    {
    listaIdSerializada = localStorage.getItem("lista")
    listaId = JSON.parse(listaIdSerializada)
}
    listaId.push(id)
    listaIdSerializada = JSON.stringify(listaId)
    localStorage.setItem("lista", listaIdSerializada)
    console.log(listaId) 
    console.log(localStorage.getItem("lista"))
}


















// function exibeQuizz(){
//    document.querySelector(".sectionLista").classList.add("hidden")
//    const sectionExibirQuizz = document.querySelector(".sectionExibirQuizz");
//    sectionExibirQuizz.classList.remove("hidden");
//    sectionExibirQuizz.innerHTML = `
//    <div class="imagemCover">
//             <img src="${imagemQuizz}">
//             <div class="mask-img"></div>
//             <p>${tituloQuizz}</p>
//         </div>
//         <ul class="perguntasQuizz">  
//         </ul>`
        

//         for(let i = 1; i <= qtdPerguntas; i++){
//         document.querySelector(".perguntasQizz").innerHTML +=`
//         <li>
//         <div class="tituloPergunta">
//             <p>${pergunta[i]}</p>
//         </div>
//         <div class="opcoesPergunta">
//             <div>
//                 <img src="https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/07/Yu-Gi-Oh-1.jpg" alt="">
//                 <h4>Teste</h4>
//             </div>
//             <div>
//                 <img src="https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/07/Yu-Gi-Oh-1.jpg" alt="">
//                 <h4>Teste</h4>
//             </div>
//             <div>
//                 <img src="https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/07/Yu-Gi-Oh-1.jpg" alt="">
//                 <h4>Teste</h4>
//             </div>
//             <div>
//                 <img src="https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/07/Yu-Gi-Oh-1.jpg" alt="">
//                 <h4>Teste</h4>
//             </div>
//         </div>
//         </li>
        
//         `

//         }    
//         `
        
            
            
//         <div class="resultadoQuizz">
//             <div class="tituloResultado">
//                 <p>Lorem ipsum dolor sit amet! Debitis tempore dignissimos suscipit!</p>
//             </div>
//             <div class="resultadoWrapper">
//                 <img src="https://i.kym-cdn.com/photos/images/original/001/199/337/8f2.png" alt="">
//                 <p>Parabéns! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officiis aut maiores accusamus! Eius repellendus deleniti ipsam accusantium, inventore excepturi quaerat odio eos harum repellat dolorem autem...</p>
//             </div>                
//         </div>
//         <div class="botaoReiniciarQuizz">
//             <h4>Reiniciar Quizz</h4>
//         </div>
//         <a href="">Voltar para home</a>
   
//    `

// }



