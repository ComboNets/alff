// Main utilities and interactions
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    // Back to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Wait for content to be loaded then observe
    setTimeout(() => {
        const animateElements = document.querySelectorAll('.welcome-card, .room-card, .amenity-item, .about-content, .about-image');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }, 100);
    
    // Lazy loading images
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    }
    
    // Performance: Debounce scroll events
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Scroll-based operations here
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Touch/hover improvements for mobile
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    console.log('Hotel Alff website loaded successfully! 🏨');
});
