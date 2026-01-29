// Hero slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const heroSlider = document.getElementById('hero-slider');
    const indicators = document.getElementById('slider-indicators');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    
    let currentSlide = 0;
    let slideInterval;
    let slides = [];
    
    // Build slides
    SITE_CONFIG.hero.forEach((slide, index) => {
        const slideEl = document.createElement('div');
        slideEl.className = `slide ${index === 0 ? 'active' : ''}`;
        slideEl.style.backgroundImage = `url('${slide.image}')`;
        
        slideEl.innerHTML = `
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <h1 class="hero-title">${slide.title}</h1>
                <p class="hero-subtitle">${slide.subtitle}</p>
                <a href="${slide.cta.href}" class="btn-primary">${slide.cta.text}</a>
            </div>
        `;
        
        heroSlider.appendChild(slideEl);
        slides.push(slideEl);
        
        // Create indicator
        const indicator = document.createElement('button');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.setAttribute('aria-label', `Ir a imagen ${index + 1}`);
        indicator.addEventListener('click', () => {
            showSlide(index);
            stopSlider();
            startSlider();
        });
        indicators.appendChild(indicator);
    });
    
    const indicatorButtons = indicators.querySelectorAll('.indicator');
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicatorButtons.forEach(indicator => indicator.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        indicatorButtons[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopSlider() {
        clearInterval(slideInterval);
    }
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopSlider();
        startSlider();
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopSlider();
        startSlider();
    });
    
    heroSlider.addEventListener('mouseenter', stopSlider);
    heroSlider.addEventListener('mouseleave', startSlider);
    
    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;
    
    heroSlider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    heroSlider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextSlide();
            stopSlider();
            startSlider();
        }
        if (touchEndX > touchStartX + 50) {
            prevSlide();
            stopSlider();
            startSlider();
        }
    }
    
    startSlider();
});
