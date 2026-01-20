// Content rendering for Churrasqueria
document.addEventListener('DOMContentLoaded', () => {
    // Welcome cards
    const welcomeGrid = document.getElementById('welcome-grid');
    SITE_CONFIG.welcome.forEach(item => {
        const card = document.createElement('div');
        card.className = 'welcome-card';
        card.innerHTML = `
            <div class="card-icon-emoji">${item.icon}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        welcomeGrid.appendChild(card);
    });
    
    // About section
    const aboutGrid = document.getElementById('about-grid');
    const about = SITE_CONFIG.about;
    aboutGrid.innerHTML = `
        <div class="about-content">
            <h2 class="section-title">${about.title}</h2>
            <div class="section-divider"></div>
            ${about.paragraphs.map(p => `<p class="about-text">${p}</p>`).join('')}
            <a href="${about.cta.href}" class="btn-secondary">${about.cta.text}</a>
        </div>
        <div class="about-image">
            <img src="${about.image}" alt="${about.title}" loading="lazy">
        </div>
    `;
    
    // Menu section
    const menuGrid = document.getElementById('menu-grid');
    SITE_CONFIG.menu.forEach(menuCategory => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'menu-category';
        categoryCard.innerHTML = `
            <h3 class="category-title">${menuCategory.category}</h3>
            <div class="menu-items">
                ${menuCategory.items.map(item => `
                    <div class="menu-item">
                        <div class="item-header">
                            <span class="item-name">${item.name}</span>
                            <span class="item-price">${item.price}</span>
                        </div>
                        <p class="item-description">${item.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
        menuGrid.appendChild(categoryCard);
    });
    
    // Drinks section
    const drinksGrid = document.getElementById('drinks-grid');
    SITE_CONFIG.drinks.forEach(drink => {
        const drinkItem = document.createElement('div');
        drinkItem.className = 'drink-item';
        drinkItem.innerHTML = `
            <div class="drink-icon">${drink.icon}</div>
            <h3>${drink.title}</h3>
            <p>${drink.description}</p>
        `;
        drinksGrid.appendChild(drinkItem);
    });
    
    // Hours notice
    const hoursContent = document.getElementById('hours-content');
    const hours = SITE_CONFIG.hours;
    hoursContent.innerHTML = `
        <div class="notice-icon">${hours.icon}</div>
        <div class="notice-text">
            <h3>${hours.title}</h3>
            ${hours.schedule.map(s => `
                <div class="schedule-item">
                    <strong>${s.day}:</strong> ${s.time}
                </div>
            `).join('')}
        </div>
        <a href="${hours.cta.href}" class="btn-primary">${hours.cta.text}</a>
    `;
    
    // Contact
    const contactGrid = document.getElementById('contact-grid');
    const contact = SITE_CONFIG.contact;
    contactGrid.innerHTML = `
        <div class="contact-info">
            <h3>Churrasqueria Alff</h3>
            <div class="contact-item">
                <strong>Dirección:</strong>
                <p>${contact.info.address}</p>
            </div>
            <div class="contact-item">
                <strong>Teléfono:</strong>
                <p>${contact.info.phone}</p>
            </div>
            <div class="contact-item">
                <strong>Email:</strong>
                <p>${contact.info.email}</p>
            </div>
            <div class="contact-item">
                <strong>Horario:</strong>
                <p>${contact.info.hours}</p>
            </div>
            <div class="social-links">
                <a href="${contact.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="contact-form-wrapper">
            <form class="contact-form" id="contact-form">
                <div class="form-group">
                    <label for="name">Nombre completo</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Teléfono</label>
                    <input type="tel" id="phone" name="phone">
                </div>
                <div class="form-group">
                    <label for="guests">Número de personas</label>
                    <input type="number" id="guests" name="guests" min="1" max="20">
                </div>
                <div class="form-group">
                    <label for="date">Fecha de reserva</label>
                    <input type="date" id="date" name="date">
                </div>
                <div class="form-group">
                    <label for="message">Mensaje</label>
                    <textarea id="message" name="message" rows="5"></textarea>
                </div>
                <button type="submit" class="btn-primary">Enviar Reserva</button>
            </form>
        </div>
    `;
    
    // Footer
    const footerContent = document.getElementById('footer-content');
    footerContent.innerHTML = `
        <div class="footer-logo">
            <span class="logo-flourish-left">❦</span>
            <div class="logo-text-group">
                <span class="logo-name">Alff</span>
                <span class="logo-subtitle">CHURRASQUERIA</span>
            </div>
            <span class="logo-flourish-right">❦</span>
        </div>
        <p class="footer-text">${SITE_CONFIG.footer.copyright}</p>
    `;
    
    // Form handler
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        console.log('Reservation submitted:', data);
        alert('¡Gracias por su reserva! Le contactaremos pronto para confirmar.');
        contactForm.reset();
    });
});
