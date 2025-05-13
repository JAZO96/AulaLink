// auth.js
document.addEventListener('DOMContentLoaded', function() {
    // Validación de Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Validación básica (puedes reemplazar con llamadas a un backend)
            if (email && password) {
                alert('Inicio de sesión exitoso. Redirigiendo...');
                window.location.href = 'dashboard.html'; // Página después del login
            } else {
                alert('Por favor, complete todos los campos.');
            }
        });
    }

    // Validación de Registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden.');
                return;
            }
            
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            window.location.href = 'login.html';
        });
    }
});