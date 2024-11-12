document.addEventListener("DOMContentLoaded", function () {
    listarTodosLivros();
});

function listarTodosLivros() {
    fetch("/api/livros")
        .then(response => response.json())
        .then(preencherTabelaPublica)
        .catch(error => {
            document.getElementById("paragrafoMensagem").textContent = "Erro ao carregar livros.";
        });
}

function preencherTabelaPublica(livros) {
    const corpoTabela = document.getElementById("corpoTabelaLivros");
    corpoTabela.innerHTML = "";
    livros.forEach(livro => {
        let linha = corpoTabela.insertRow();
        linha.insertCell().textContent = livro.id;
        linha.insertCell().textContent = livro.titulo;
        linha.insertCell().textContent = livro.autor;
        linha.insertCell().textContent = livro.anoPublicacao;
    });
}
