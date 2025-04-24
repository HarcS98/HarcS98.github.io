document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const mensajeDiv = document.getElementById('mensaje');
    const resetForm = document.querySelector('form'); 
    const resetCodeInput = document.getElementById('reset_code');
    const passwordInput = document.getElementById('nueva_contrasena');
    const confirmPasswordInput = document.getElementById('confirmar_contrasena');
    const mismatchErrorDiv = document.getElementById('passwordMismatchError');

    // --- Muestra mensajes de error/éxito de la URL 
    if (params.has('error')) {
        mensajeDiv.innerHTML = `<div class="alert alert-danger">${decodeURIComponent(params.get('error'))}</div>`;
    } else if (params.has('exito')) {
        mensajeDiv.innerHTML = `<div class="alert alert-success">${decodeURIComponent(params.get('exito'))}</div>`;
    }

    // --- Event listener para el envío del formulario ---
    if(resetForm) {
        resetForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previene el envío real

            // Resetear errores visuales
            mismatchErrorDiv.style.display = 'none';
            confirmPasswordInput.classList.remove('is-invalid');
            passwordInput.classList.remove('is-invalid');
            resetCodeInput.classList.remove('is-invalid');


            let isValid = true;
            let firstErrorField = null;

            // --- Validación ---
            function showError(field, message, isPasswordMismatch = false) {
                if (isPasswordMismatch) {
                    mismatchErrorDiv.style.display = 'block';
                } else {
                     alert(message); // Alerta simple para simulación
                }
                field.classList.add('is-invalid');
                isValid = false;
                if (!firstErrorField) {
                    firstErrorField = field;
                }
            }

            // 1. Código 
            if (!resetCodeInput || resetCodeInput.value.trim() === "") {
                showError(resetCodeInput, 'Ingresa el código de verificación.');
            }
            // 2. Nueva contraseña
            if (!passwordInput || passwordInput.value.trim() === "") {
                showError(passwordInput, 'Ingresa la nueva contraseña.');
            } else if (passwordInput.value.trim().length < 6) {
                showError(passwordInput, 'La contraseña debe tener al menos 6 caracteres.');
            }
            // 3. Confirmar contraseña
            if (!confirmPasswordInput || confirmPasswordInput.value.trim() === "") {
                showError(confirmarContrasena, 'Confirma la nueva contraseña.');
            }
            // 4. Contraseñas coinciden
            if (isValid && passwordInput.value && confirmPasswordInput.value && passwordInput.value !== confirmPasswordInput.value) {
                showError(confirmPasswordInput, '', true); 
            }


            // --- Simulación de Éxito ---
            if (isValid) {
                console.log(`Simulando reseteo de contraseña con código: ${resetCodeInput.value}`);
                window.location.href = 'iniciosesion.html?reset=exitoso';
            } else {
                if(firstErrorField) firstErrorField.focus();
            }
        });

         // --- Validaciones en tiempo real (opcional pero útil) ---
        confirmPasswordInput.addEventListener('input', function() {
            if (passwordInput.value !== confirmPasswordInput.value && confirmPasswordInput.value !== '') {
                mismatchErrorDiv.style.display = 'block';
                confirmPasswordInput.classList.add('is-invalid');
            } else {
                mismatchErrorDiv.style.display = 'none';
                confirmPasswordInput.classList.remove('is-invalid');
            }
        });
        passwordInput.addEventListener('input', function() {
            if (confirmPasswordInput.value !== '' && passwordInput.value !== confirmPasswordInput.value) {
                mismatchErrorDiv.style.display = 'block';
                confirmPasswordInput.classList.add('is-invalid');
            } else if (confirmPasswordInput.value !== '') {
                mismatchErrorDiv.style.display = 'none';
                confirmPasswordInput.classList.remove('is-invalid');
            }
        });
    }

});