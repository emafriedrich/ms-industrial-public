document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown');
    const modal = document.querySelector('.modal');

    if (!dropdown.contains(event.target)) {
        modal.style.display = 'none'; 
    }
}); 
document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.getElementById('burger-button');
    const menuContent = document.getElementById('menu-content');
    const productosButton = document.getElementById('productos-button');
    const modal = document.getElementById('modal');

    // Mostrar/ocultar el contenido del menú
    burgerButton.addEventListener('click', function() {
        if (menuContent.style.display === 'flex') {
            menuContent.style.display = 'none';
        } else {
            menuContent.style.display = 'flex';
        }
    });

    // Mostrar/ocultar el modal de productos
    productosButton.addEventListener('click', function() {
        if (modal.style.display === 'block') {
            modal.style.display = 'none';
        } else {
            modal.style.display = 'block';
        }
    });

    // Cerrar el modal si se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (!menuContent.contains(event.target) && event.target !== burgerButton) {
            menuContent.style.display = 'none';
        }
        if (!modal.contains(event.target) && event.target !== productosButton) {
            modal.style.display = 'none';
        }
    });
});