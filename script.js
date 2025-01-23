// Smooth scrolling for menu links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu a').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) { // Only smooth scroll for section IDs
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                    });
                }
            }
        });
    });

    // Navbar toggle for mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    function toggleMenu() {
        menu.classList.toggle('active');
    }

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            menu.classList.remove('active');
        }
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => menu.classList.remove('active'));
    });

    // Scroll-triggered animations for sections
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active'); // Add active class
                }
            });
        },
        { threshold: 0.2 } // Trigger animation when 20% of the section is visible
    );

    // Add hidden class to all sections initially
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Smooth appearance for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.classList.add('active');
        }, 500);
    }
});

// Handle the "Go to Menu" button and language popup
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const languagePopup = document.getElementById('languagePopup');
    const closePopup = document.getElementById('closePopup');

    // Open the popup when the "Go to Menu" button is clicked
    menuButton.addEventListener('click', () => {
        languagePopup.classList.add('show'); // Add the "show" class for smooth appearance
    });

    // Close the popup when the "Cancel" button is clicked
    closePopup.addEventListener('click', () => {
        languagePopup.classList.remove('show'); // Remove the "show" class to hide the popup
    });

    // Close the popup when clicking outside of it
    languagePopup.addEventListener('click', (e) => {
        if (e.target === languagePopup) {
            languagePopup.classList.remove('show'); // Close the popup if clicked outside
        }
    });
});

// Handle logo navigation
document.addEventListener('DOMContentLoaded', () => {
    const logoLink = document.querySelector('.logo-link');

    // Add click event listener for the logo link
    logoLink.addEventListener('click', (event) => {
        // Prevent default anchor behavior if needed
        if (window.location.pathname.includes('index.html')) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on the homepage
        } else {
            window.location.href = 'index.html'; // Redirect to the homepage
        }
    });
});

// FAQ script for toggling questions and answers
document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            // Toggle active class on the clicked FAQ
            faq.classList.toggle('active');

            // Collapse all other FAQs
            faqs.forEach(otherFaq => {
                if (otherFaq !== faq) {
                    otherFaq.classList.remove('active');
                }
            });
        });
    });
});

// Ensure only internal links are handled by smooth scrolling
document.querySelectorAll('.menu a').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) { // Only smooth scroll for section IDs
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                });
            }
        }
    });
});
