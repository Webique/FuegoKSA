// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {

    // Select Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a'); // Individual navigation links

// Toggle Dropdown Menu
hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the document
    hamburger.classList.toggle('active'); // Animates the hamburger
    navLinks.classList.toggle('active'); // Slides down/up the menu
});

// Close Menu When Clicking a Navigation Link
navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').slice(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);

        // Calculate dynamic offset based on viewport size
        const headerHeight = document.querySelector('.main-header').offsetHeight; // Get header height
        let offset = headerHeight;

        // Add extra offset for smaller screens (adjust value as needed)
        if (window.innerWidth <= 768) {
            offset += 20; // Add extra offset for mobile devices
        }

        // Scroll to the target section with adjusted offset
        const sectionPosition = targetSection.offsetTop - offset;
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });

        // Close the dropdown menu
        hamburger.classList.remove('active'); // Reset hamburger animation
        navLinks.classList.remove('active'); // Close dropdown
    });
});

// Close Menu When Clicking Outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active')) {
        hamburger.classList.remove('active'); // Reset hamburger animation
        navLinks.classList.remove('active'); // Close dropdown
    }
});

        // Close Menu When Clicking Outside
    document.addEventListener('click', (e) => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        // Check if the click is outside the hamburger and navLinks
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    }, true); // Use capture phase to detect clicks before bubbling


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
        <img class="lightbox-img" src="" alt="">
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
    lightboxImg.src = ''; // Clear the image source when closed
});

// Close Lightbox When Clicking Outside Image
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('show');
        lightboxImg.src = ''; // Clear the image source when closed
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

document.addEventListener("DOMContentLoaded", function () {
    const viewEventsButton = document.querySelector(".view-events-button");
    const eventsContainer = document.querySelector(".events-container");

    if (viewEventsButton && eventsContainer) {
        viewEventsButton.addEventListener("click", function () {
            eventsContainer.classList.toggle("active");
        });
    }
});

