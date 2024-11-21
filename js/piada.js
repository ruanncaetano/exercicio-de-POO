class Piada {
    constructor(titulo, texto, img, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.imagem = img;
        this.categoria = categoria;
    }

    getTitulo() {
        return this.titulo;
    }

    getTexto() {
        return this.texto;
    }

    getImagemUrl() {
        return this.imagem;
    }

    getCategoria() {
        return this.categoria;
    }
}
