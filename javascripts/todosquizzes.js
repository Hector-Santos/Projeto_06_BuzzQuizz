const API = "https://mock-api.driven.com.br/api/v6/buzzquizz/";

function mostrarQuizzes(){
    console.log (quizzesServidor)
    let listaTodosQuizzes = document.querySelector(".listaTodosQuizzes")
    for(let i = 0; i < quizzesServidor.length; i++){
        listaTodosQuizzes.innerHTML += `
                <li data-id="${quizzesServidor[i].id}" onclick="entrarQuizz(this)">
                    <img src="${quizzesServidor[i].image}">
                    <p>${quizzesServidor[i].title}</p>
                </li>
    `

    }
   
}


function entrarQuizz(element) {
    console.log(element)
    document.querySelector(".sectionLista").classList.add("hidden");
    const sectionExibirQuizz = document.querySelector(".sectionExibirQuizz");
    sectionExibirQuizz.classList.remove("hidden");
    sectionExibirQuizz.innerHTML = `
    <div class="imagemCover">
            <img src="https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/07/Yu-Gi-Oh-1.jpg">
            <div class="mask-img"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
         </div>
         <ul class="perguntasQuizz">
            <li>
                <div class="tituloPergunta">
                    <p>Possimus vero ex molestias iste temporibus sapiente?</p>
                </div>
                <div class="opcoesPergunta">
                    <div onclick="mostrarResposta(this)">
                        <img src="https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/07/Yu-Gi-Oh-1.jpg">
                        <h4>Teste</h4>
                    </div>
                    <div onclick="mostrarResposta(this)">
                        <img src="https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/07/Yu-Gi-Oh-1.jpg" >
                        <h4>Teste</h4>
                    </div>
                    <div onclick="mostrarResposta(this)">
                        <img src="https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/07/Yu-Gi-Oh-1.jpg" >
                        <h4>Teste</h4>
                    </div>
                    <div onclick="mostrarResposta(this)">
                        <img src="https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/07/Yu-Gi-Oh-1.jpg" >
                        <h4>Teste</h4>
                    </div>
                </div>
            </li>
         </ul>
         <div class="botaoReiniciarQuizz">
            <h4>Reiniciar Quizz</h4>
         </div>
         <a href="">Voltar para home</a>  
    
    
    `;
}

function mostrarResposta(element) {
    let listaOpcoes = document.querySelectorAll(".opcoesPergunta > div");
    console.log(listaOpcoes)
    for (let i = 0 ; i < listaOpcoes.length ; i++ ) {   
        if (listaOpcoes[i].classList.contains("esbranquicado")){
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


