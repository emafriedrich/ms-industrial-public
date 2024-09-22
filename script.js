document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown');
    const modal = document.querySelector('.modal');

    if (!dropdown.contains(event.target)) {
        modal.style.display = 'none'; 
    }
}); 
