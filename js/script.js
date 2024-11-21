
const categoriaHumor = new Categoria("Humor");
const categoriaAnimais = new Categoria("Animais");

const piadas = [
    new Piada(
        "Piada de Programador", 
        "Por que o programador foi ao médico? Porque ele estava com um bug!", 
        "./img/image.png", 
        categoriaHumor
    ),
    new Piada(
        "Piada de Cachorro", 
        "Cê sabia que o meu cachorro é tão inteligente que consegue até ler jornal?      – Sabia. O meu já tinha me contado.", 
        "./img/dog.png",
         categoriaAnimais
    ),
    new Piada(
        "Piada de Gato", 
        "O gato é o melhor amigo do homem... desde que o homem lhe dê comida.", 
        "./img/gatito.png", 
        categoriaAnimais
    ),
    new Piada(
        "Piada de Computação",
         "O que é um computador? Uma máquina que resolve problemas que você não sabia que tinha, de formas que você não entende.",
          "./img/image.png",
           categoriaHumor
        ),
    new Piada(
        "Piada Aleatória",
         "Eu fui no médico e disse: Doutor, minha memória está péssima! E ele me respondeu: Isso já é o suficiente!", "./img/sr.png", 
         categoriaHumor
        ),
    new Piada(
        "Piada de Matematica",
        "Por que o livro de matemática ficou triste? Porque tinha muitos problemas!",
        "./img/coringa.png",
        categoriaHumor
    ),
    new Piada(
        "Piada de Frutas",
        "Por que a laranja foi ao psicólogo? Porque estava se sentindo espremida!",
        "./img/coringa.png",
        categoriaHumor
    ),new Piada(
        "Piada de Cachorro",
        "Num cinema, ao ar livre, o sujeito nota um sujeito com um cachorro que ri muito do filme. Espantado, comenta com o dono do animal:         — Rapaz! Eu estou impressionado! Seu cachorro não para de rir do filme!         — Eu também estranhei… Ele detestou o livro.",
        "./img/dog.png",
        categoriaAnimais
    ),
    new Piada(
        "Piada de Elefante",
        "Por que o elefante não usa computador? Porque tem medo do mouse!",
        "./img/elef.png",
        categoriaAnimais)
];

// Função para mostrar a piada
function mostrarPiada() {
    const categoriaSelecionada = document.getElementById("categoria").value;

    let piadaParaMostrar;

    if (categoriaSelecionada) {
        // piadas pela categoria selecionada
        const piadasFiltradas = piadas.filter(piada => piada.getCategoria().getNome() === categoriaSelecionada);
        if (piadasFiltradas.length > 0) {
            piadaParaMostrar = piadasFiltradas[Math.floor(Math.random() * piadasFiltradas.length)];
        }
    } else {
        // Se nenhuma categoria piada aleatória
        piadaParaMostrar = piadas[Math.floor(Math.random() * piadas.length)];
    }

    // Exibe a piada na tela
    if (piadaParaMostrar) {
        document.getElementById("titulo").innerText = piadaParaMostrar.getTitulo();
        document.getElementById("texto").innerText = piadaParaMostrar.getTexto();
        document.getElementById("imagem").src = piadaParaMostrar.getImagemUrl();

        //  piada visível
        document.getElementById("piada").style.display = "block";
    } else {
        alert("Não há piadas para a categoria selecionada.");
    }
}

// Adicionando o botão
document.getElementById("mostrarPiada").addEventListener("click", mostrarPiada);
