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

    // --- Hamburger Menu Functionality ---
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

            // Close the menu after clicking
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close Menu When Clicking Outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
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

    // --- Lightbox Feature for Gallery ---
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox">&times;</span>
            <img class="lightbox-img" src="" alt="Expanded View">
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const closeLightbox = lightbox.querySelector('.close-lightbox');

    // Open Lightbox
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightbox.classList.add('show');
            lightboxImg.src = item.src;
        });
    });

    // Close Lightbox
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('show');
    });

    // Close Lightbox When Clicking Outside Image
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove('show');
        }
    });

    // --- Gallery Toggle ---
    const galleryToggleButton = document.querySelector('.gallery-toggle-button');
    const galleryGrid = document.querySelector('.gallery-grid');

    if (galleryToggleButton && galleryGrid) {
        galleryToggleButton.addEventListener('click', () => {
            galleryGrid.classList.toggle('active');
            galleryToggleButton.textContent = galleryGrid.classList.contains('active') ? "Hide Gallery" : "View Gallery";
        });
    }

    // --- View Highlights Button Toggle ---
    const highlightsButton = document.querySelector('.view-highlights-button');
    const highlightsGallery = document.querySelector('.contributions-gallery .gallery-grid');

    if (highlightsButton && highlightsGallery) {
        highlightsButton.addEventListener('click', () => {
            highlightsGallery.classList.toggle('active');
            highlightsButton.textContent = highlightsGallery.classList.contains('active') ? 'Hide Highlights' : 'View Highlights';
        });
    }

    // --- Language Popup ---
    const languagePopup = document.getElementById('languagePopup');
    const openPopupButton = document.getElementById('openLanguagePopup');
    const closePopupButton = document.getElementById('closePopup');

    if (openPopupButton && languagePopup) {
        openPopupButton.addEventListener('click', () => {
            languagePopup.style.display = 'flex';
        });
    }

    if (closePopupButton && languagePopup) {
        closePopupButton.addEventListener('click', () => {
            languagePopup.style.display = 'none';
        });
    }

    // Close popup when clicking outside the content area
    window.addEventListener('click', (e) => {
        if (e.target === languagePopup) {
            languagePopup.style.display = 'none';
        }
    });

    // --- Smooth Scroll with Offset for Fixed Navbar ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Auto-open English Menu PDF ---
    window.addEventListener('load', () => {
        const englishMenuLink = document.querySelector('#auto-open');
        if (englishMenuLink) {
            window.open(englishMenuLink.href, '_blank');
        }
    });
});
