// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {


    const menuLinks = document.querySelectorAll('.menu a');

    const plantillaCategorias = document.querySelectorAll('.plantilla-categoria');
    // Selecciona todas las tarjetas individuales de plantillas
    const plantillaCards = document.querySelectorAll('.plantilla-card');


    plantillaCategorias.forEach(categoria => categoria.style.display = 'none');
    plantillaCards.forEach(card => card.style.display = 'none');


    const defaultCategory = document.getElementById('jata-categoria');
    if (defaultCategory) {
        defaultCategory.style.display = 'flex'; 
        defaultCategory.querySelectorAll('.plantilla-card').forEach(card => card.style.display = 'block');
        document.querySelector('a[data-target="jata-categoria"]')?.classList.add('active');
    }



    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 

            const targetId = this.getAttribute('data-target');
            if (!targetId) return; 

            
            menuLinks.forEach(l => l.classList.remove('active'));
            
            this.classList.add('active');

        
            plantillaCategorias.forEach(categoria => categoria.style.display = 'none');
            plantillaCards.forEach(card => card.style.display = 'none');

            
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                if (targetElement.classList.contains('plantilla-categoria')) {
                    // Es una categoría: mostrar el div de la categoría y todas sus tarjetas
                    targetElement.style.display = 'flex'; // O 'block'
                    targetElement.querySelectorAll('.plantilla-card').forEach(card => card.style.display = 'block');
                    console.log(`Simulación: Mostrando categoría "${targetId}"`);
                } else if (targetElement.classList.contains('plantilla-card')) {
                    // Es una tarjeta individual: mostrar solo esa tarjeta
                    // Asegúrate de que el contenedor de la categoría padre también sea visible
                    const parentCategory = targetElement.closest('.plantilla-categoria');
                    if (parentCategory) {
                        parentCategory.style.display = 'flex'; // O 'block'
                    }
                    targetElement.style.display = 'block';
                    console.log(`Simulación: Mostrando plantilla individual "${targetId}"`);
                }
            } else {
                console.warn(`Elemento con id "${targetId}" no encontrado.`);
            }
        });
    });

    // --- Simulación para los botones "Editar" en las tarjetas de plantillas ---
    const editButtons = document.querySelectorAll('.plantilla-card .btn-softgen');

    editButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir navegación si href="#"

            // Obtener el nombre de la plantilla (ej. "Informe 1")
            const reportName = button.closest('.card-body')?.querySelector('h3')?.textContent || 'Plantilla desconocida';

            // Simular la acción de edición
            console.log(`Simulación: Clic en "Editar" para "${reportName}". Abriendo editor (simulado)...`);
            // Aquí podrías redirigir a una página de edición real
            // window.location.href = 'editor.html?templateId=' + button.closest('.plantilla-card').id;
             alert(`Simulación: Editando "${reportName}"`); // Muestra una alerta simple
        });
    });

});
