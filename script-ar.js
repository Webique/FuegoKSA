document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.gallery-toggle-button');
    const galleryGrid = document.querySelector('.gallery-grid');

    if (toggleButton && galleryGrid) {
        toggleButton.addEventListener('click', () => {
            galleryGrid.classList.toggle('active');
            toggleButton.textContent = galleryGrid.classList.contains('active') 
                ? 'إخفاء المعرض' 
                : 'عرض المعرض';
        });

        // Set default button text
        toggleButton.textContent = 'عرض المعرض';
    }
});
