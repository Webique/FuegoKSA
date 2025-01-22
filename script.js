/* ===========================================================
   Mobile Menu Toggle
   =========================================================== */
   document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // Function to toggle the menu
    function toggleMenu() {
        if (menu) {
            menu.classList.toggle('active'); // Toggle active class on the menu
        } else {
            console.error('Menu element not found');
        }
    }

    // Add event listener to the toggle button
    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from bubbling to parent elements
            toggleMenu();
        });
    } else {
        console.error('Menu toggle button not found');
    }

    // Close the menu when clicking outside
    document.addEventListener('click', (e) => {
        if (menu && !menu.contains(e.target) && !menuToggle.contains(e.target)) {
            menu.classList.remove('active'); // Close the menu
        }
    });

    // Ensure the menu closes when a link is clicked
    if (menu) {
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active'); // Close the menu when a link is clicked
            });
        });
    }
});

/* ===========================================================
   Smooth Scrolling
   =========================================================== */
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth' // Smooth scrolling to target section
            });
        }
    });
});
