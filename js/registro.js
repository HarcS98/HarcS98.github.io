document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // envío real del formulario

            let isValid = true;
            let firstErrorField = null;

            // --- Obtener los campos ---
            const nombre = form.elements['nombre'];
            const apellido = form.elements['apellido'];
            const telefono = form.elements['telefono'];
            const email = form.elements['email'];
            const contrasena = form.elements['contrasena'];
            const confirmarContrasena = form.elements['confirmarcontrasena'];

            // --- Validación ---
            function showError(field, message) {
                alert(message); // alerta para la simulación
                isValid = false;
                if (!firstErrorField) {
                    firstErrorField = field;
                }
            }

            if (!nombre || nombre.value.trim() === "") showError(nombre, 'Ingresa tu nombre.');
            if (!apellido || apellido.value.trim() === "") showError(apellido, 'Ingresa tu apellido.');
            if (!email || email.value.trim() === "" || !email.value.includes('@')) showError(email, 'Ingresa un email válido.');
            if (!contrasena || contrasena.value.trim() === "") showError(contrasena, 'Ingresa una contraseña.');
            else if (contrasena.value.trim().length < 6) showError(contrasena, 'La contraseña debe tener al menos 6 caracteres.');
            if (!confirmarContrasena || confirmarContrasena.value.trim() === "") showError(confirmarContrasena, 'Confirma tu contraseña.');
            if (contrasena.value && confirmarContrasena.value && contrasena.value !== confirmarContrasena.value) {
                showError(confirmarContrasena, 'Las contraseñas no coinciden.');
            }

        
            if (isValid) {
                console.log(`Simulando registro para: ${nombre.value} ${apellido.value}, Email: ${email.value}`);
                // Redirige a inicio de sesión con parámetro de éxito
                window.location.href = 'iniciosesion.html?registro=exitoso';
            } else {
                if (firstErrorField) {
                    firstErrorField.focus();
                }
            }
        });
    } else {
        console.error("El formulario con id 'registroForm' no se encontró.");
    }
});