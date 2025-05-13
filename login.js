document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            
            // Validación básica
            if (!email || !password) {
                showError('Por favor, complete todos los campos.');
                return;
            }
            
            if (!isValidEmail(email)) {
                showError('Ingrese un correo electrónico válido.');
                return;
            }
            
            // Simulación de autenticación exitosa (reemplazar con llamada a backend)
            authenticateUser(email, password)
                .then(() => {
                    window.location.href = 'dashboard.html'; // Redirigir al dashboard
                })
                .catch(error => {
                    showError(error.message);
                });
        });
    }
});

// Función para validar email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Simulación de autenticación (ejemplo)
function authenticateUser(email, password) {
    return new Promise((resolve, reject) => {
        // Aquí iría una llamada a tu backend real
        setTimeout(() => {
            const users = [
                { email: 'admin@aulalink.com', password: '123456', role: 'admin' },
                { email: 'docente@aulalink.com', password: '123456', role: 'teacher' }
            ];
            
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user)); // Guardar en localStorage
                resolve();
            } else {
                reject(new Error('Correo o contraseña incorrectos.'));
            }
        }, 1000); // Simular delay de red
    });
}

// Mostrar errores
function showError(message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = 'var(--accent-color)';
    errorElement.style.marginTop = '10px';
    errorElement.style.textAlign = 'center';
    
    const form = document.getElementById('loginForm');
    const existingError = form.querySelector('.error-message');
    
    if (existingError) {
        form.removeChild(existingError);
    }
    
    form.appendChild(errorElement);
}