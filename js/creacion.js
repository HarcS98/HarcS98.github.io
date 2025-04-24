// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {

    // --- Simulación para los botones principales de herramientas ---

    // Selecciona todos los botones dentro de las tarjetas de herramientas principales
    // Se asume que los botones relevantes tienen la clase 'btn-softgen' y están dentro de un div con id 'herramienta'
    const toolButtons = document.querySelectorAll('#herramienta .btn-softgen');

    toolButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Previene la acción por defecto si es un enlace real (aunque aquí son enlaces a otras páginas)
            // event.preventDefault();

            // Obtiene el texto del título de la tarjeta asociada al botón
            const cardTitle = button.closest('.card').querySelector('.card-title')?.textContent || 'Acción desconocida';
            const targetPage = button.getAttribute('href'); // Obtiene la página de destino

            // Simula la acción registrando en la consola
            console.log(`Simulación: Clic en botón "${cardTitle}". Navegando a: ${targetPage}`);

            // Nota: La navegación real a la página (ej. 'plantillas.html')
            // ya está manejada por el atributo 'href' en el HTML.
            // No es necesario simular la redirección aquí a menos que quieras añadir un retraso o efecto.
        });
    });

    // --- Simulación para los botones "Editar" en el carrusel de plantillas ---

    // Selecciona todos los botones "Editar" dentro del carrusel
    const carouselEditButtons = document.querySelectorAll('#carouselCards .btn-softgen');

    carouselEditButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Previene la acción por defecto si es un enlace real
            event.preventDefault();

            // Obtiene el nombre del informe (ej. "Informe 1")
            const reportName = button.closest('.card-body')?.querySelector('h3')?.textContent || 'Informe desconocido';

            // Simula la acción de edición registrando en la consola
            console.log(`Simulación: Clic en "Editar" para "${reportName}". Abriendo editor (simulado)...`);
            // Aquí podrías, en una aplicación real, redirigir a una página de edición
            // o abrir un modal con herramientas de edición.
            // window.location.href = 'editor.html?template=' + reportName; // Ejemplo
            alert(`Simulación: Editando "${reportName}"`); // Muestra una alerta simple
        });
    });

    // --- Script existente para la navegación activa (ya lo tienes inline, pero podría ir aquí) ---
    // (Opcional: Mueve el script de navegación activa aquí si lo prefieres)
    /*
    const currentPagePath = window.location.pathname;
    const currentPageFilename = currentPagePath.substring(currentPagePath.lastIndexOf('/') + 1) || 'creacion.html';
    const navLinks = document.querySelectorAll('.navbar-nav.me-auto .nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
        const linkHref = link.getAttribute('href');
        const linkFilename = linkHref.substring(linkHref.lastIndexOf('/') + 1);

        if (linkFilename === currentPageFilename) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else if (currentPagePath === '/' && linkFilename === 'creacion.html') {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
    */

});
