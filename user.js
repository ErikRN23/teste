// Verificar se o usuário está logado
if (!sessionStorage.getItem('isLoggedIn')) {
    window.location.href = 'login.html';
}

// Verificar se é um usuário comum (não admin)
const role = sessionStorage.getItem('role');
if (role === 'admin') {
    window.location.href = 'admin.html';
}

// Exibir nome do usuário
const username = sessionStorage.getItem('username');
if (username) {
    document.getElementById('username').textContent = username;
}

// Função de logout
document.getElementById('logoutBtn').addEventListener('click', function() {
    sessionStorage.clear();
    window.location.href = 'login.html';
});