// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Scrolling for Internal Links ---
    document.querySelectorAll('.menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    
// Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Toggle Dropdown Menu
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Smooth Scroll and Close Menu on Link Click
navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        const headerHeight = document.querySelector('.main-header').offsetHeight;
        let offset = headerHeight;

        if (window.innerWidth <= 768) {
            offset += 20;
        }

        const sectionPosition = targetSection.offsetTop - offset;
        window.scrollTo({ top: sectionPosition, behavior: 'smooth' });

        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close Menu When Clicking Outside
document.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});



    // --- Scroll-triggered Animations ---
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Add active class
            }
        });
    }, { threshold: 0.2 });

    // Add hidden class and observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // --- Hero Title Animation ---
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        setTimeout(() => heroTitle.classList.add('active'), 500);
    }

    // --- Handle Logo Navigation ---
    const logoLink = document.querySelector('.logo-link');
    logoLink.addEventListener('click', (event) => {
        if (window.location.pathname.includes('index.html')) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.location.href = 'index.html';
        }
    });

    // --- FAQ Toggle ---
    const faqs = document.querySelectorAll('.faq');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('active');
            faqs.forEach(otherFaq => {
                if (otherFaq !== faq) {
                    otherFaq.classList.remove('active');
                }
            });
        });
    });
});
        // JavaScript to handle popup visibility
        const languagePopup = document.getElementById('languagePopup');
        const openPopupButton = document.getElementById('openLanguagePopup');
        const closePopupButton = document.getElementById('closePopup');

        openPopupButton.addEventListener('click', () => {
            languagePopup.style.display = 'flex';
        });

        closePopupButton.addEventListener('click', () => {
            languagePopup.style.display = 'none';
        });

        // Close popup when clicking outside the content area
        window.addEventListener('click', (e) => {
            if (e.target === languagePopup) {
                languagePopup.style.display = 'none';
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                const target = document.querySelector(this.getAttribute('href'));
        
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
        
                if (target) {
                    // Get the height of the fixed header
                    const headerHeight = document.querySelector('.main-header').offsetHeight;
        
                    // Smoothly scroll to the target section
                    window.scrollTo({
                        top: target.offsetTop - headerHeight, // Adjust for header height
                        behavior: 'smooth'
                    });
                }
            });
        });
        window.addEventListener('load', () => {
            // Auto-open the English menu PDF
            const englishMenuLink = document.querySelector('#auto-open');
            if (englishMenuLink) {
                window.open(englishMenuLink.href, '_blank');
            }
        });
                        