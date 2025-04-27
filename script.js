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

    // Smooth scroll for the button is now handled by the updated scrollLinks logic above.

});
