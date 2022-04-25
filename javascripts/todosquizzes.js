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
    
    console.log(quizzesUsuario.length)
    if(quizzesUsuario.length>0){
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


function entrarQuizz(element) {
    RecebeQuizz()
    let thisQuizz
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
                 <div class="botaoReiniciarQuizz">
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
                       <div onclick = " mostrarResposta(this)"> 
                             <img src="${respostas[j].image}" alt="">
                             <h4>${respostas[j].text}</h4>
                         </div>
                     `
        }
    }
}


function mostrarResposta(element) {
    let listaOpcoes = document.querySelectorAll(".opcoesPergunta > div");
    
    for (let i = 0; i < listaOpcoes.length; i++) {
        if (listaOpcoes[i].classList.contains("esbranquicado")) {
            return;
        } else {
            listaOpcoes[i].classList.add("esbranquicado")
        }
    }
    element.classList.add("opcaoClicada");
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


