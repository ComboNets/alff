const SITE_CONFIG = {
    restaurant: {
        name: 'Alff Churrasqueria',
        since: 1996,
        tagline: 'Tradición en asados desde 1996'
    },
    
    navigation: [
        { label: 'Inicio', href: '#home' },
        { label: 'Historia', href: '#about' },
        { label: 'Menú', href: '#menu' },
        { label: 'Bebidas', href: '#drinks' },
        { label: 'Reservas', href: '#reservas' },
        { label: 'Contacto', href: '#contact' },
        { label: 'Hotel', href: '../hotel/', class: 'btn-nav-alt' }
    ],

    hero: [
        {
            image: 'https://via.placeholder.com/1200x800/8B4513/FFFFFF?text=Churrasqueria+Alff',
            title: 'Bienvenido a Churrasqueria Alff',
            subtitle: 'Los mejores asados desde 1996',
            cta: { text: 'Ver Menú', href: '#menu' }
        },
        {
            image: 'https://via.placeholder.com/1200x800/654321/FFFFFF?text=Asado+al+Punto',
            title: 'Carne de Primera',
            subtitle: 'Selección premium y preparación tradicional',
            cta: { text: 'Hacer Reserva', href: '#reservas' }
        },
        {
            image: 'https://via.placeholder.com/1200x800/8B4513/FFFFFF?text=Ambiente+Familiar',
            title: 'Ambiente Familiar',
            subtitle: 'El lugar perfecto para compartir',
            cta: { text: 'Contáctenos', href: '#contact' }
        }
    ],

    welcome: [
        {
            icon: '🥩',
            title: 'Carne Premium',
            description: 'Los mejores cortes seleccionados para tu disfrute'
        },
        {
            icon: '🔥',
            title: 'Asado Tradicional',
            description: 'Preparado a la parrilla con técnicas artesanales'
        },
        {
            icon: '👨‍🍳',
            title: 'Chefs Expertos',
            description: 'Años de experiencia en el arte del asado'
        }
    ],

    about: {
        title: 'Nuestra Historia',
        image: 'churrasqueria/assets/images/Menu.jpg',
        paragraphs: [
            'Desde 1996, Churrasqueria Alff ha sido sinónimo de calidad y tradición en asados. Nuestra pasión por la buena carne y el servicio excepcional nos ha convertido en un referente en Paraguay.',
            'Cada corte es seleccionado cuidadosamente y preparado con técnicas tradicionales que resaltan el sabor auténtico de la carne. Nuestro compromiso es ofrecer la mejor experiencia gastronómica en cada visita.'
        ],
        cta: { text: 'Ver Menú', href: '#menu' }
    },

    menu: [
        {
            category: 'Asados',
            items: [
                { name: 'Asado de Tira', description: 'Corte tradicional a la parrilla', price: 'Consultar' },
                { name: 'Bife de Chorizo', description: 'Jugoso y tierno', price: 'Consultar' },
                { name: 'Costilla', description: 'Ahumada y sabrosa', price: 'Consultar' },
                { name: 'Vacío', description: 'Corte premium', price: 'Consultar' }
            ]
        },
        {
            category: 'Especialidades',
            items: [
                { name: 'Parrillada para 2', description: 'Variedad de cortes premium', price: 'Consultar' },
                { name: 'Choripán', description: 'Con chimichurri casero', price: 'Consultar' },
                { name: 'Morcilla', description: 'Artesanal', price: 'Consultar' },
                { name: 'Mollejas', description: 'A la parrilla', price: 'Consultar' }
            ]
        },
        {
            category: 'Guarniciones',
            items: [
                { name: 'Ensalada Mixta', description: 'Fresca del día', price: 'Consultar' },
                { name: 'Papas Fritas', description: 'Crocantes', price: 'Consultar' },
                { name: 'Mandioca', description: 'Cocida o frita', price: 'Consultar' },
                { name: 'Chimichurri', description: 'Preparación casera', price: 'Incluido' }
            ]
        }
    ],

    drinks: [
        { icon: '🍺', title: 'Cervezas', description: 'Nacionales e importadas' },
        { icon: '🍷', title: 'Vinos', description: 'Selección de tintos y blancos' },
        { icon: '🥤', title: 'Refrescos', description: 'Bebidas sin alcohol' },
        { icon: '☕', title: 'Café', description: 'Expreso y capuccino' }
    ],

    hours: {
        icon: '🕐',
        title: 'Horarios',
        schedule: [
            { day: 'Desayuno', time: 'Buffet con platos, dulces, frutas, churrrasqueria, café, etc.' },
            { day: 'Almuerzo', time: 'Menestras y corte de las 10:30 hasta las 23:00' },
            { day: 'Cena', time: 'Todos los días de 06:00 a 23:00' }
        ],
        cta: { text: 'Hacer Reserva', href: '#contact' }
    },

    contact: {
        info: {
            address: 'Dirección del restaurante<br>Ciudad, Paraguay',
            phone: '+595 XXX XXX XXX',
            email: 'info@churrasqueriaalff.com.py',
            hours: 'Lun-Dom: 10:30 - 23:00'
        },
        social: {
            facebook: 'https://www.facebook.com/pages/Churrasqueria-Alff/255234621275245'
        }
    },

    footer: {
        copyright: '© 2026 Churrasqueria Alff. Todos los derechos reservados.'
    }
};
