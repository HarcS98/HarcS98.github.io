document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const mensajeDiv = document.getElementById('mensaje'); // Div para mostrar mensajes

    // Muestra mensajes de éxito de registro o reseteo si vienen en la URL
    const params = new URLSearchParams(window.location.search);
    if (params.has('registro') && params.get('registro') === 'exitoso') {
        mensajeDiv.innerHTML = `<div class="alert alert-success">¡Registro exitoso! Ahora puedes iniciar sesión.</div>`;
    } else if (params.has('reset') && params.get('reset') === 'exitoso') {
        mensajeDiv.innerHTML = `<div class="alert alert-success">¡Contraseña restablecida! Ahora puedes iniciar sesión.</div>`;
    } else if (params.has('error')) {
        mensajeDiv.innerHTML = `<div class="alert alert-danger">${decodeURIComponent(params.get('error'))}</div>`;
    }


    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Previene el envío real del formulario

            const rol = form.elements['rol'].value;
            const email = form.elements['email'].value;
            const contrasena = form.elements['contrasena'].value;
            let isValid = true;
            let firstErrorField = null;

             // --- Validaciones básicas (puedes añadir más si quieres) ---
            if (rol === "") {
                alert('Por favor, selecciona tu rol.');
                isValid = false;
                firstErrorField = form.elements['rol'];
            } else if (email.trim() === "" || !email.includes('@')) { // Validación muy simple de email
                alert('Por favor, ingresa un correo electrónico válido.');
                isValid = false;
                firstErrorField = form.elements['email'];
            } else if (contrasena.trim() === "") {
                alert('Por favor, ingresa tu contraseña.');
                isValid = false;
                firstErrorField = form.elements['contrasena'];
            }

            if (!isValid) {
                if(firstErrorField) firstErrorField.focus();
                return; // Detiene si hay errores
            }

            // --- Simulación de Redirección ---
            console.log(`Simulando login para Rol: ${rol}, Email: ${email}`); // Para depuración
            mensajeDiv.innerHTML = ''; // Limpia mensajes previos

            // Puedes añadir lógica simple aquí si quieres simular credenciales específicas
            // Ejemplo: if (rol === 'administrador' && email === 'admin@test.com') { ... }

            switch (rol) {
                case 'administrador':
                    window.location.href = 'administrador.html'; // Redirige a la página de admin
                    break;
                case 'tecnico':
                    window.location.href = 'creacion.html'; // Redirige a la página de técnico
                    break;
                case 'cliente':
                    window.location.href = 'visualizacion.html'; // Redirige a la página de cliente
                    break;
                default:
                    // Este caso no debería ocurrir si la validación del rol funciona
                    mensajeDiv.innerHTML = `<div class="alert alert-danger">Rol inválido seleccionado.</div>`;
                    break;
            }
        });
    } else {
        console.error("El formulario con id 'loginForm' no se encontró.");
    }
});