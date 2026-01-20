const SITE_CONFIG = {
    hotel: {
        name: 'Hotel Alff',
        stars: 3,
        tagline: 'Comodidad y hospitalidad en Paraguay'
    },
    
    navigation: [
        { label: 'Inicio', href: '#home' },
        { label: 'Historia', href: '#about' },
        { label: 'Habitaciones', href: '#rooms' },
        { label: 'Servicios', href: '#amenities' },
        { label: 'Contacto', href: '#contact' },
        { label: 'Reservar', href: '#booking', class: 'btn-nav' }
    ],

    hero: [
        {
            image: 'hotel2.jpg',
            title: 'Bienvenido a Hotel Alff',
            subtitle: 'Donde la comodidad se encuentra con la hospitalidad',
            cta: { text: 'Reservar Habitación', href: '#booking' }
        },
        {
            image: 'hotel3.jpg',
            title: 'Confort y Elegancia',
            subtitle: 'Habitaciones diseñadas para su descanso perfecto',
            cta: { text: 'Ver Habitaciones', href: '#rooms' }
        },
        {
            image: 'hotel4.jpg',
            title: 'Experiencia Única',
            subtitle: 'Un lugar donde crear memorias inolvidables',
            cta: { text: 'Contáctenos', href: '#contact' }
        }
    ],

    welcome: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
            title: 'Comodidad',
            description: 'Habitaciones espaciosas y bien equipadas para garantizar su confort'
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>`,
            title: 'Ubicación',
            description: 'Estratégicamente ubicado para su conveniencia'
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
            title: 'Hospitalidad',
            description: 'Servicio cálido y atención personalizada en todo momento'
        }
    ],

    about: {
        title: 'Nuestra Historia',
        image: 'hotel2.jpg',
        paragraphs: [
            'Hotel Alff es un establecimiento familiar con años de tradición en hospitalidad. Nos enorgullecemos de ofrecer un ambiente acogedor que combina la calidez del servicio personalizado con las comodidades modernas que nuestros huéspedes esperan.',
            'Cada detalle de nuestro hotel ha sido cuidadosamente pensado para proporcionar una experiencia memorable, ya sea que nos visite por negocios o placer.'
        ],
        cta: { text: 'Explorar Habitaciones', href: '#rooms' }
    },

    rooms: [
        {
            image: 'hotel3.jpg',
            title: 'Habitación Estándar',
            badge: 'Popular',
            description: 'Acogedora habitación con todas las comodidades básicas para una estadía confortable',
            features: ['Wi-Fi gratuito', 'Aire acondicionado', 'TV por cable', 'Baño privado']
        },
        {
            image: 'hotel4.jpg',
            title: 'Habitación Superior',
            badge: null,
            description: 'Más espacio y comodidades premium para una experiencia superior',
            features: ['Todo lo de estándar', 'Minibar', 'Escritorio de trabajo', 'Caja de seguridad']
        },
        {
            image: 'hotel2.jpg',
            title: 'Suite',
            badge: 'Premium',
            description: 'Nuestra opción más lujosa con sala de estar separada',
            features: ['Todo lo de superior', 'Sala de estar', 'Jacuzzi', 'Servicio a la habitación']
        }
    ],

    amenities: [
        { icon: '📶', title: 'Wi-Fi Gratuito', description: 'Internet de alta velocidad en todo el hotel' },
        { icon: '🅿️', title: 'Estacionamiento', description: 'Estacionamiento seguro y gratuito' },
        { icon: '🍽️', title: 'Restaurante', description: 'Churrasquería Alff en el mismo local' },
        { icon: '🏪', title: 'Recepción 24/7', description: 'Atención las 24 horas del día' },
        { icon: '🧹', title: 'Limpieza Diaria', description: 'Servicio de limpieza todos los días' },
        { icon: '❄️', title: 'Aire Acondicionado', description: 'Todas las habitaciones climatizadas' }
    ],

    notice: {
        icon: '⏰',
        title: 'Importante',
        text: 'Para llegadas posteriores a las 23:00 se requiere reserva con antelación',
        cta: { text: 'Hacer Reserva', href: '#contact' }
    },

    contact: {
        info: {
            address: 'Dirección del hotel<br>Ciudad, Paraguay',
            phone: '+595 XXX XXX XXX',
            email: 'info@hotelalff.com.py',
            hours: '24 horas, 7 días a la semana'
        },
        social: {
            facebook: 'https://www.facebook.com/pages/Churrasqueria-Alff/255234621275245'
        }
    },

    footer: {
        copyright: '© 2026 Hotel Alff. Todos los derechos reservados.'
    }
};
