document.getElementById("loginForm").addEventListener("submit", login);

function login(event) {
    event.preventDefault(); // Impede o recarregamento da página ao enviar o formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Autenticação simples
    if (username === "admin" && password === "admin123") {
        sessionStorage.setItem("isAdmin", true); // Marca o usuário como logado
        console.log("Login bem-sucedido. Valor de isAdmin no sessionStorage:", sessionStorage.getItem("isAdmin"));

        // Exibe a área de administração e oculta a área de login
        document.getElementById("loginArea").style.display = "none";
        document.getElementById("adminArea").style.display = "block";
        listarTodosAdminLivros(); // Carrega a lista de livros na área logada
    } else {
        alert("Usuário ou senha incorretos.");
    }
}

function logout() {
    sessionStorage.removeItem("isAdmin"); // Remove a autenticação
    console.log("Logout realizado. Valor de isAdmin no sessionStorage:", sessionStorage.getItem("isAdmin"));

    // Exibe novamente a área de login e esconde a área de administração
    document.getElementById("loginArea").style.display = "block";
    document.getElementById("adminArea").style.display = "none";
}

function verificarLogin() {
    // Verifica se o usuário está logado ao carregar a página
    if (sessionStorage.getItem("isAdmin") === "true") {
        document.getElementById("loginArea").style.display = "none"; // Esconde a área de login
        document.getElementById("adminArea").style.display = "block"; // Exibe a área de administração
        listarTodosAdminLivros(); // Carrega a lista de livros para o administrador
    }
}

// Verifica o login ao carregar a página
document.addEventListener("DOMContentLoaded", verificarLogin);
