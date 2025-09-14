
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    
    menuIcon.addEventListener('click', () => {
        // Placeholder for menu functionality
        alert('Menu icon clicked!');
    });

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.gallery-item.active').classList.remove('active');
            item.classList.add('active');
        });
    });
});
