function listarTodosAdminLivros() {
    fetch("/api/livros")
        .then(response => response.json())
        .then(preencherTabelaAdmin)
        .catch(error => {
            console.log("Erro ao carregar livros para administração:", error);
            document.getElementById("paragrafoMensagem").textContent = "Erro ao carregar livros para administração.";
        });
}

function preencherTabelaAdmin(livros) {
    const corpoTabela = document.getElementById("corpoAdminTabelaLivros");
    corpoTabela.innerHTML = ""; // Limpa a tabela antes de preenchê-la
    livros.forEach(livro => {
        let linha = corpoTabela.insertRow();
        linha.insertCell().textContent = livro.id;
        linha.insertCell().textContent = livro.titulo;
        linha.insertCell().textContent = livro.autor;
        linha.insertCell().textContent = livro.anoPublicacao;

        // Coluna de ações (editar/excluir) para cada livro
        let acoes = linha.insertCell();
        acoes.innerHTML = `<button onclick="editarLivro(${livro.id})">Editar</button>
                           <button onclick="deletarLivro(${livro.id})">Excluir</button>`;
    });
}

function novoLivro() {
    const titulo = prompt("Digite o título do novo livro:");
    const autor = prompt("Digite o autor do novo livro:");
    const anoPublicacao = prompt("Digite o ano de publicação:");

    if (titulo && autor && anoPublicacao) {
        fetch("/api/livros", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ titulo, autor, anoPublicacao })
        })
        .then(listarTodosAdminLivros) // Atualiza a lista após adicionar
        .catch(error => alert("Erro ao adicionar livro."));
    }
}

function editarLivro(id) {
    const titulo = prompt("Digite o novo título do livro:");
    const autor = prompt("Digite o novo autor do livro:");
    const anoPublicacao = prompt("Digite o novo ano de publicação:");

    if (titulo && autor && anoPublicacao) {
        fetch(`/api/livros/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ titulo, autor, anoPublicacao })
        })
        .then(listarTodosAdminLivros) // Atualiza a lista após editar
        .catch(error => alert("Erro ao atualizar livro."));
    }
}

function deletarLivro(id) {
    fetch(`/api/livros/${id}`, { method: "DELETE" })
        .then(listarTodosAdminLivros) // Atualiza a lista após excluir
        .catch(error => alert("Erro ao excluir livro."));
}
