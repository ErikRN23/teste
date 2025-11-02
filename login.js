// Lista de usuários
const users = {
    admin: {
        email: 'admin@gmail.com',
        password: 'admin123',
        role: 'admin',
        redirectTo: 'admin.html'
    },
    user: {
        email: 'usuario@gmail.com',
        password: 'user123',
        role: 'user',
        redirectTo: 'user.html'
    }
};

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMessage');
    const successMsg = document.getElementById('successMessage');
    
    errorMsg.style.display = 'none';
    successMsg.style.display = 'none';

    if (!email || !password) {
        errorMsg.textContent = '❌ Por favor, preencha todos os campos!';
        errorMsg.style.display = 'block';
        return;
    }

    // Verificar se o usuário existe
    let userFound = null;
    for (let key in users) {
        if (users[key].email === email && users[key].password === password) {
            userFound = users[key];
            break;
        }
    }

    if (userFound) {
        successMsg.textContent = '✓ Login realizado com sucesso! Redirecionando...';
        successMsg.style.display = 'block';
        
        // Salvar informações de login
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('role', userFound.role);
        
        // Redirecionar para a página correspondente
        setTimeout(() => {
            window.location.href = userFound.redirectTo;
        }, 1000);
    } else {
        errorMsg.textContent = '❌ Usuário ou senha incorretos!';
        errorMsg.style.display = 'block';
    }
});