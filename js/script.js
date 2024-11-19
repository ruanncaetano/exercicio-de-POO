// script.js

// Criando as categorias
const categoriaHumor = new Categoria("Humor");
const categoriaAnimais = new Categoria("Animais");

// Criando algumas piadas
const piadas = [
    new Piada("Piada de Programador", "Por que o programador foi ao médico? Porque ele estava com um bug!", "https://via.placeholder.com/300", categoriaHumor),
    new Piada("Piada de Cachorro", "O cachorro entrou no bar e pediu uma cerveja... o garçom perguntou: O que você está fazendo aqui?", "https://via.placeholder.com/300", categoriaAnimais),
    new Piada("Piada de Gato", "O gato é o melhor amigo do homem... desde que o homem lhe dê comida.", "https://via.placeholder.com/300", categoriaAnimais),
    new Piada("Piada de Computação", "O que é um computador? Uma máquina que resolve problemas que você não sabia que tinha, de formas que você não entende.", "https://via.placeholder.com/300", categoriaHumor),
    new Piada("Piada Aleatória", "Eu fui no médico e disse: Doutor, minha memória está péssima! E ele me respondeu: Isso já é o suficiente!", "https://via.placeholder.com/300", categoriaHumor)
];

// Função para mostrar a piada
function mostrarPiada() {
    const categoriaSelecionada = document.getElementById("categoria").value;

    let piadaParaMostrar;

    if (categoriaSelecionada) {
        // Filtra as piadas pela categoria selecionada
        const piadasFiltradas = piadas.filter(piada => piada.getCategoria().getNome() === categoriaSelecionada);
        if (piadasFiltradas.length > 0) {
            piadaParaMostrar = piadasFiltradas[Math.floor(Math.random() * piadasFiltradas.length)];
        }
    } else {
        // Se nenhuma categoria for selecionada, exibe uma piada aleatória
        piadaParaMostrar = piadas[Math.floor(Math.random() * piadas.length)];
    }

    // Exibe a piada na tela
    if (piadaParaMostrar) {
        document.getElementById("titulo").innerText = piadaParaMostrar.getTitulo();
        document.getElementById("texto").innerText = piadaParaMostrar.getTexto();
        document.getElementById("imagem").src = piadaParaMostrar.getImagemUrl();

        // Torna o bloco de piada visível
        document.getElementById("piada").style.display = "block";
    } else {
        alert("Não há piadas para a categoria selecionada.");
    }
}

// Adicionando evento ao botão
document.getElementById("mostrarPiada").addEventListener("click", mostrarPiada);
