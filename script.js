document.addEventListener('DOMContentLoaded', () => {
    console.log("Ambar Spa website loaded.");

    // Smooth scrolling for navigation links AND back-to-top button
    const scrollLinks = document.querySelectorAll('nav a[href^="#"], #back-to-top-btn');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Add a class to body to manage animations if needed
    document.body.classList.add('js-loading');
    window.addEventListener('load', () => {
        document.body.classList.remove('js-loading');
    });

    // Example: Maybe add a simple image gallery or testimonial slider later
    // function setupImageSlider() { ... }
    // setupImageSlider();

    // Back to Top Button Logic
    const backToTopButton = document.getElementById("back-to-top-btn");

    // Function to check scroll position and toggle button visibility
    const scrollFunction = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    };

    // Add scroll event listener
    window.addEventListener('scroll', scrollFunction);

    // Initial check in case the page loads already scrolled down
    scrollFunction();

    // Reset hero animations when scrolling back to top
    const heroElements = document.querySelectorAll('.hero .animate-hero');
    
    backToTopButton.addEventListener('click', () => {
        // Remove animation classes
        heroElements.forEach(el => {
            el.style.opacity = 0;
            el.style.animation = 'none';
        });
        
        // Force reflow to restart animations
        setTimeout(() => {
            heroElements.forEach(el => {
                el.style.animation = '';
                el.style.opacity = '';
            });
        }, 100);
    });

    // Optional: Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        if(window.scrollY < window.innerHeight) {
            const scrolled = window.scrollY;
            heroSection.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });

    // Periodically trigger the WhatsApp button hover effect in the hero section
    const heroWhatsAppBtn = document.querySelector('.hero .whatsapp-button');
    
    // Set up automatic periodic animation (every 8 seconds after initial animation)
    setTimeout(() => {
        // After the initial animations finish, start periodic animations
        setInterval(() => {
            // Trigger hover effect by toggling classes
            heroWhatsAppBtn.classList.add('auto-hover-active');
            
            // Remove class after animation duration
            setTimeout(() => {
                heroWhatsAppBtn.classList.remove('auto-hover-active');
            }, 3000); // Match the animation duration
        }, 8000); // Interval between animations
    }, 5000); // Start after initial animations complete

});
