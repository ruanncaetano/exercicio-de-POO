// piada.js

class Piada {
    constructor(titulo, texto, imagem_url, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.imagem_url = imagem_url;
        this.categoria = categoria;
    }

    getTitulo() {
        return this.titulo;
    }

    getTexto() {
        return this.texto;
    }

    getImagemUrl() {
        return this.imagem_url;
    }

    getCategoria() {
        return this.categoria;
    }
}
