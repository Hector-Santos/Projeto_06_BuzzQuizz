const API = "https://mock-api.driven.com.br/api/v6/buzzquizz/";
let todosOsQuizzes;

function obterQuizzes () {
    let promise = axios.get (`${API}/quizzes`);
    promise.then(mostrarQuizzes)
}
function mostrarQuizzes(response){
    todosOsQuizzes = response.data
    console.log (todosOsQuizzes)
    let listaTodosQuizzes = document.querySelector(".listaTodosQuizzes")
    for(let i = 0; i < todosOsQuizzes.length; i++){
        listaTodosQuizzes.innerHTML += `
                <li data-id="${todosOsQuizzes[i].id}" onclick="entrarQuizz(this)">
                    <img src="${todosOsQuizzes[i].image}">
                    <p>${todosOsQuizzes[i].title}</p>
                </li>
    `

    }
   
}


function entrarQuizz(element) {
    document.querySelector(".sectionLista").classList.add("hidden");
    const sectionExibirQuizz = document.querySelector(".sectionExibirQuizz");
    sectionExibirQuizz.classList.remove("hidden");

    for (let i = 0 ; i < todosOsQuizzes.length ; i++){
        if (parseInt(element.dataset.id) === parseInt(todosOsQuizzes[i].id) ){
            console.log("achou")
            console.log(element.dataset.id)
            console.log (todosOsQuizzes[i].questions)

            sectionExibirQuizz.innerHTML = `
            <div class="imagemCover">
                    <img src="${todosOsQuizzes[i].image}">
                    <div class="mask-img"></div>
                    <p>${todosOsQuizzes[i].title}</p>
                 </div>
                 <ul class="perguntasQuizz">
                    
                 </ul>
                 <div class="botaoReiniciarQuizz">
                    <h4>Reiniciar Quizz</h4>
                 </div>
                 <a href="">Voltar para home</a>  
            `;
            let arrPerguntas = todosOsQuizzes[i].questions;
            for(let index = 0 ; index < arrPerguntas.length ; index ++ ){
                let listaPerguntas = document.querySelector(".perguntasQuizz");
                listaPerguntas.innerHTML+= `
                <li>
                        <div class="tituloPergunta">
                            <p>${arrPerguntas[index].title}</p>
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
                
                
                `




                
            }


        }
        
    }

    
    
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


obterQuizzes()