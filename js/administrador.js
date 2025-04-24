document.addEventListener('DOMContentLoaded', function() {
    const addUserModal = new bootstrap.Modal(document.getElementById('addUserModal'));
    const saveUserButton = document.getElementById('saveUser');
    const userForm = document.getElementById('userForm');
    // Asumiendo que quieres agregar a la tabla de Técnicos
    const tecnicosTableBody = document.querySelector('.table tbody'); // Ajusta si tienes IDs específicos

    // --- Simular Guardar Nuevo Usuario ---
    if (saveUserButton && userForm && tecnicosTableBody) {
        saveUserButton.addEventListener('click', function() {
            const newUserNameInput = userForm.querySelector('#newUserName'); // Deberías tener IDs únicos para nombre y apellido
            const newUserLastNameInput = userForm.querySelector('#newUserLastName'); // Asumiendo que tienes este ID
            const newUserPhoneInput = userForm.querySelector('#newUserPhone'); // Asumiendo que tienes este ID

            const newUserName = newUserNameInput ? newUserNameInput.value.trim() : 'Usuario';
            const newUserLastName = newUserLastNameInput ? newUserLastNameInput.value.trim() : 'Nuevo';
            // const newUserPhone = newUserPhoneInput ? newUserPhoneInput.value.trim() : '-'; // Opcional

            if (newUserName === '') {
                alert('Por favor ingresa el nombre.');
                return;
            }
             if (newUserLastName === '') { // Asumiendo que el apellido es requerido
                alert('Por favor ingresa el apellido.');
                return;
            }


            // Crear nueva fila para la tabla
            const newRow = document.createElement('tr');
            const fullName = `${newUserName} ${newUserLastName}`;

            newRow.innerHTML = `
                <td>${fullName}</td>
                <td>
                    <button class="a delete-user-btn" data-user="${fullName}">
                        <span style="font-size: 30px;"><i class="bi bi-x-circle-fill"></i></span>
                    </button>
                </td>
                <td class="status-completed">Activo</td> 
            `; // Asumiendo que los nuevos son activos

            tecnicosTableBody.appendChild(newRow);

            // Añadir evento de eliminación al nuevo botón
            const newDeleteButton = newRow.querySelector('.delete-user-btn');
            if (newDeleteButton) {
                addDeleteEventListener(newDeleteButton);
            }


            // Limpiar formulario y cerrar modal
            userForm.reset();
            addUserModal.hide();
        });
    }

    // --- Función para añadir el listener de eliminación ---
    function addDeleteEventListener(button) {
        button.addEventListener('click', function() {
            const userName = this.getAttribute('data-user');
            if (confirm(`¿Estás seguro de que deseas eliminar a ${userName}? (exitoso)`)) {
                // Eliminar la fila (el elemento 'tr' padre del botón)
                this.closest('tr').remove();
                console.log(`Simulando eliminación de ${userName}`);
            }
        });
    }

    // --- Añadir listeners a los botones de eliminar existentes ---
    const deleteButtons = document.querySelectorAll('.delete-user'); // Usa la clase original o la nueva si la cambiaste
    deleteButtons.forEach(button => {
    addDeleteEventListener(button);
    });

});