const API = "https://mock-api.driven.com.br/api/v6/buzzquizz/";

function mostrarQuizzesServidor() {

    let listaTodosQuizzes = document.querySelector(".listaTodosQuizzes")
    for (let i = 0; i < quizzesServidor.length; i++) {
        listaTodosQuizzes.innerHTML += `
                <li data-id="${quizzesServidor[i].id}" onclick="entrarQuizz(this)">
                    <img src="${quizzesServidor[i].image}">
                    <p>${quizzesServidor[i].title}</p>
                </li>
    `

    }

}
function mostrarQuizzesUsuario() {
    if (quizzesUsuario.length > 0) {
        document.querySelector(".semQuizzProprio").classList.add("hidden")
        document.querySelector(".comQuizzProprio").classList.remove("hidden")
    }

    let listaTodosQuizzes = document.querySelector(".listaSeusQuizzes")
    for (let i = 0; i < quizzesUsuario.length; i++) {
        listaTodosQuizzes.innerHTML += `
                <li data-id="${quizzesUsuario[i].id}" onclick="entrarQuizz(this)">
                    <img src="${quizzesUsuario[i].image}">
                    <p>${quizzesUsuario[i].title}</p>
                </li>
    `

    }

}

let thisQuizz;
function entrarQuizz(element) {
    RecebeQuizz()

    document.querySelector(".sectionLista").classList.add("hidden");
    const sectionExibirQuizz = document.querySelector(".sectionExibirQuizz");
    sectionExibirQuizz.classList.remove("hidden");
    for (let i = 0; i < todosOsQuizzes.length; i++) {
        if (parseInt(element.dataset.id) === parseInt(todosOsQuizzes[i].id)) {
            thisQuizz = todosOsQuizzes[i]
        }
    }
    sectionExibirQuizz.innerHTML = `
            <div class="imagemCover">
                    <img src="${thisQuizz.image}">
                    <div class="mask-img"></div>
                    <p>${thisQuizz.title}</p>
                 </div>
                 <ul class="perguntasQuizz">
                    
                 </ul>
                 <div class="resultadoQuizz hidden">
                 </div>
                 <div class="botaoReiniciarQuizz" onclick="reiniciarQuizz()">
                    <h4>Reiniciar Quizz</h4>
                 </div>
                 <a href="">Voltar para home</a> 
                 
                 `
    for (let i = 0; i < thisQuizz.questions.length; i++) {
        let respostas = shuffleArray(thisQuizz.questions[i].answers)

        document.querySelector(".perguntasQuizz").innerHTML += `
                     <li>
                     <div class="tituloPergunta pergunta${i}">
                         <p>${thisQuizz.questions[i].title}</p>
                     </div>
                     <div class="opcoesPergunta pergunta${i}">
                     </div>   
                     </li>`
        document.querySelector(`.tituloPergunta.pergunta${i}`).style.backgroundColor = thisQuizz.questions[i].color
        for (let j = 0; j < thisQuizz.questions[i].answers.length; j++) {
            document.querySelector(`.opcoesPergunta.pergunta${i}`).innerHTML += `
                       <div data-correct = "${respostas[j].isCorrectAnswer}" onclick = " mostrarResposta(this)"> 
                             <img src="${respostas[j].image}" alt="">
                             <h4>${respostas[j].text}</h4>
                         </div>
                     `
        }
        window.scrollTo(top)

    }
}

let nRespostaCerta = 0;
function mostrarResposta(element) {
    let listaOpcoes = element.parentNode.querySelectorAll(".opcoesPergunta > div");

    for (let i = 0; i < listaOpcoes.length; i++) {
        if (listaOpcoes[i].classList.contains("esbranquicado")) {
            return;
        } else {
            listaOpcoes[i].classList.add("esbranquicado")
        }
        if (listaOpcoes[i].dataset.correct === "true") {
            listaOpcoes[i].classList.add("respostaCerta")
        } else {
            listaOpcoes[i].classList.add("respostaErrada")
        }
    }
    element.classList.add("opcaoClicada");

    if (element.classList.contains("respostaCerta")) {
        nRespostaCerta++
    }
    let parent = element.parentNode

    for (let i = 0; i < thisQuizz.questions.length; i++) {

        if (parent.classList.contains(`pergunta${i}`)) {
            let next = document.querySelector(`.pergunta${i + 1}`)
            if (next !== null) {
                next.scrollIntoView()
            }
        }

    }



    setTimeout(finalizarQuizz, 2000)

}

function reiniciarQuizz() {
    let lista = document.querySelectorAll(".opcoesPergunta > div")
    let resultadoQuizz = document.querySelector(".resultadoQuizz")
    for (let i = 0; i < lista.length; i++) {
        lista[i].classList.remove("esbranquicado");
        lista[i].classList.remove("opcaoClicada")
        lista[i].classList.remove("respostaCerta")
        lista[i].classList.remove("respostaErrada")
        resultadoQuizz.classList.add("hidden")
    }
    nRespostaCerta = 0
    window.scrollTo(top)

}
function finalizarQuizz() {
    let lista = document.querySelectorAll(".opcaoClicada")
    let resultadoQuizz = document.querySelector(".resultadoQuizz")
    let score = Math.floor((nRespostaCerta / thisQuizz.questions.length) * 100)
    console.log(score)

    if (thisQuizz.questions.length === lista.length) {
        resultadoQuizz.classList.remove("hidden")
        resultadoQuizz.scrollIntoView()
        for (let i = 0; i < thisQuizz.levels.length - 1; i++) {
            let j = i + 1
            if (thisQuizz.levels[i + 1].minValue > score) {
                resultadoQuizz.innerHTML = `
            <div class="tituloResultado">
                <p>${thisQuizz.levels[i].title}</p>
            </div>
            <div class="resultadoWrapper">
                 <img src="${thisQuizz.levels[i].image}" alt="">
                 <p>${thisQuizz.levels[i].text}</p>
            </div>
        `
            } else {
                resultadoQuizz.innerHTML = `
                <div class="tituloResultado">
                    <p>${thisQuizz.levels[i + 1].title}</p>
                </div>
                <div class="resultadoWrapper">
                     <img src="${thisQuizz.levels[i + 1].image}" alt="">
                     <p>${thisQuizz.levels[i + 1].text}</p>
                </div>
            `

            }
        }

    }

}



//<div class="resultadoQuizz">
//             <div class="tituloResultado">
//                 <p>Lorem ipsum dolor sit amet! Debitis tempore dignissimos suscipit!</p>
//             </div>
//             <div class="resultadoWrapper">
//                 <img src="https://i.kym-cdn.com/photos/images/original/001/199/337/8f2.png" alt="">
//                 <p>Parabéns! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officiis aut maiores accusamus! Eius repellendus deleniti ipsam accusantium, inventore excepturi quaerat odio eos harum repellat dolorem autem...</p>
//             </div>
//         </div>


