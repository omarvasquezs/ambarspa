(function ($) {
    "use strict";

    $(document).ready(function () {
        console.log("Ambar Spa website loaded.");
        
        // Add a responsive body class
        if (window.innerWidth < 576) {
            $('body').addClass('is-mobile');
        } else if (window.innerWidth < 768) {
            $('body').addClass('is-tablet');
        } else {
            $('body').addClass('is-desktop');
        }

        // Initialize Bootstrap tooltips
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

        // Smooth scrolling for navigation links
        const scrollLinks = document.querySelectorAll('.navbar-nav .nav-link, #back-to-top-btn, .footer-back-to-top, .scroll-down-arrow');

        scrollLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Check if the link is a hash link
                if (this.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        // Calculate offset with Bootstrap navbar height
                        const navbarHeight = document.querySelector('.navbar').offsetHeight;
                        
                        // Add extra offset for mobile to prevent content being hidden
                        let extraOffset = 0;
                        if (window.innerWidth < 576) {
                            extraOffset = 15; // Extra pixels on mobile
                        }
                        
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - extraOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });

                        // Close the mobile menu if it's open
                        const navbarCollapse = document.querySelector('.navbar-collapse');
                        if (navbarCollapse.classList.contains('show')) {
                            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                            bsCollapse.hide();
                        }
                    }
                }
            });
        });

        // Add a class to body to manage animations if needed
        $('body').addClass('js-loading');
        $(window).on('load', function() {
            $('body').removeClass('js-loading');
        });

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
        
        $(backToTopButton).on('click', function() {
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

        // Optional: Parallax effect for hero section (disable on mobile for better performance)
        const heroSection = document.querySelector('.hero');
        if (window.innerWidth > 768) { // Only enable parallax on tablets and larger screens
            $(window).on('scroll', function() {
                if(window.scrollY < window.innerHeight) {
                    const scrolled = window.scrollY;
                    $(heroSection).css('background-position-y', `${scrolled * 0.5}px`);
                }
            });
        }

        // Auto-highlight WhatsApp button periodically
        const autoHighlightWhatsApp = () => {
            const whatsappBtns = document.querySelectorAll('.btn-whatsapp');
            if (whatsappBtns.length > 0) {
                whatsappBtns.forEach(btn => {
                    // Add auto-highlight class
                    btn.classList.add('auto-highlight');
                    
                    // Remove auto-highlight class after animation duration
                    setTimeout(() => {
                        btn.classList.remove('auto-highlight');
                    }, 2000);
                });
            }
        };

        // Special highlight for hero WhatsApp button
        const highlightHeroWhatsApp = () => {
            const heroWhatsAppBtn = document.querySelector('.hero-whatsapp-btn');
            if (heroWhatsAppBtn) {
                heroWhatsAppBtn.classList.add('auto-highlight');
                
                setTimeout(() => {
                    heroWhatsAppBtn.classList.remove('auto-highlight');
                }, 2000);
            }
        };

        // Trigger highlight after page load and then periodically
        setTimeout(() => {
            autoHighlightWhatsApp(); // Regular highlight for all WhatsApp buttons
            highlightHeroWhatsApp(); // Special highlight for hero button
        }, 2000);
        
        // Regular WhatsApp buttons
        setInterval(autoHighlightWhatsApp, 10000);
        
        // Hero WhatsApp button (more frequent)
        setInterval(highlightHeroWhatsApp, 7000);

        // Change navbar background on scroll
        $(window).on('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                $(navbar).css({
                    'background-color': 'rgba(255, 255, 255, 0.95)',
                    'box-shadow': '0 2px 10px rgba(0, 0, 0, 0.1)'
                });
            } else {
                $(navbar).css({
                    'background-color': '#ffffff',
                    'box-shadow': '0 2px 5px rgba(0, 0, 0, 0.1)'
                });
            }
        });

        // Handle scroll down indicator visibility
        const scrollIndicator = document.querySelector('.scroll-down-container');
        if (scrollIndicator) {
            // Hide scroll indicator when user scrolls down
            window.addEventListener('scroll', function() {
                const scrollPosition = window.scrollY;
                if (scrollPosition > 100) {
                    scrollIndicator.style.opacity = '0';
                    scrollIndicator.style.transition = 'opacity 0.5s ease';
                } else {
                    scrollIndicator.style.opacity = '1';
                }
            });
            
            // Add a pulsing effect to emphasize the scroll indicator after a delay
            setTimeout(() => {
                scrollIndicator.classList.add('pulse-attention');
            }, 3000);
        }
    });

})(jQuery);