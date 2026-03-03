// Traducciones
const translations = {
    es: {
        inicio: 'INICIO',
        proyectos: 'PROYECTOS',
        contacto: 'CONTACTO',
        branding: 'Branding & Packaging',
        publicidad: 'Publicidad',
        fotografia: 'Fotografía y Retoque',
        redes: 'Redes Sociales',
        ilustracion: 'Ilustración',
        brandingTitle: 'Branding & Packaging',
        brandingDesc: '"Lirio" es 1 de 12 colecciones edición especial, para las cuales creé un empaque ilustrado inspirado cada uno en una flor diferente.',
        publicidadTitle: 'Publicidad',
        publicidadDesc: 'Campañas publicitarias y contenido creativo.',
        fotografiaTitle: 'Fotografía y Retoque',
        fotografiaDesc: 'Proyectos de fotografía profesional y retoque digital.',
        redesTitle: 'Redes Sociales',
        redesDesc: 'Contenido visual para redes sociales y marketing digital.',
        ilustracionTitle: 'Ilustración',
        ilustracionDesc: 'Ilustraciones digitales y diseño gráfico.',
        contactoTitle: 'Contacto',
        contactoDesc: '¿Tienes un proyecto en mente? Me encantaría colaborar contigo.',
        heroTitle: 'Diseño & Creatividad',
        heroDesc: 'Creando experiencias visuales únicas',
        footer: '© 2026 Andrea Velasco'
    },
    en: {
        inicio: 'HOME',
        proyectos: 'PROJECTS',
        contacto: 'CONTACT',
        branding: 'Branding & Packaging',
        publicidad: 'Advertising',
        fotografia: 'Photography & Retouching',
        redes: 'Social Media',
        ilustracion: 'Illustration',
        brandingTitle: 'Branding & Packaging',
        brandingDesc: '"Lirio" is 1 of 12 special edition collections, for which I created an illustrated packaging inspired by a different flower each.',
        publicidadTitle: 'Advertising',
        publicidadDesc: 'Advertising campaigns and creative content.',
        fotografiaTitle: 'Photography & Retouching',
        fotografiaDesc: 'Professional photography projects and digital retouching.',
        redesTitle: 'Social Media',
        redesDesc: 'Visual content for social media and digital marketing.',
        ilustracionTitle: 'Illustration',
        ilustracionDesc: 'Digital illustrations and graphic design.',
        contactoTitle: 'Contact',
        contactoDesc: 'Do you have a project in mind? I would love to collaborate with you.',
        heroTitle: 'Design & Creativity',
        heroDesc: 'Creating unique visual experiences',
        footer: '© 2026 Andrea Velasco'
    }
};

let currentLang = 'es';

function toggleLanguage() {
    const langBtn = document.querySelector('.lang-switch');
    
    if (currentLang === 'es') {
        currentLang = 'en';
        langBtn.textContent = 'ESPAÑOL';
        translatePage('en');
    } else {
        currentLang = 'es';
        langBtn.textContent = 'ENGLISH';
        translatePage('es');
    }
}

function translatePage(lang) {
    const t = translations[lang];
    
    // Traducir menú
    const menuItems = document.querySelectorAll('.nav-menu a');
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === 'index.html' || href === '#') {
            if (item.classList.contains('active') || item.textContent.includes('INICIO') || item.textContent.includes('HOME')) {
                item.textContent = t.inicio;
            }
        }
        if (item.classList.contains('dropbtn')) {
            item.textContent = t.proyectos;
        }
        if (href === 'contacto.html') {
            item.textContent = t.contacto;
        }
    });
    
    // Traducir dropdown
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    if (dropdownLinks.length > 0) {
        dropdownLinks[0].textContent = t.branding;
        dropdownLinks[1].textContent = t.publicidad;
        dropdownLinks[2].textContent = t.fotografia;
        dropdownLinks[3].textContent = t.redes;
        dropdownLinks[4].textContent = t.ilustracion;
    }
    
    // Traducir contenido de la página
    const h1 = document.querySelector('h1');
    const projectDesc = document.querySelector('.project-header p, .contact-intro, .hero-text p');
    
    if (h1) {
        const page = window.location.pathname;
        if (page.includes('branding')) h1.textContent = t.brandingTitle;
        if (page.includes('publicidad')) h1.textContent = t.publicidadTitle;
        if (page.includes('fotografia')) h1.textContent = t.fotografiaTitle;
        if (page.includes('redes')) h1.textContent = t.redesTitle;
        if (page.includes('ilustracion')) h1.textContent = t.ilustracionTitle;
        if (page.includes('contacto')) h1.textContent = t.contactoTitle;
    }
    
    if (projectDesc) {
        const page = window.location.pathname;
        if (page.includes('branding')) projectDesc.textContent = t.brandingDesc;
        if (page.includes('publicidad')) projectDesc.textContent = t.publicidadDesc;
        if (page.includes('fotografia')) projectDesc.textContent = t.fotografiaDesc;
        if (page.includes('redes')) projectDesc.textContent = t.redesDesc;
        if (page.includes('ilustracion')) projectDesc.textContent = t.ilustracionDesc;
        if (page.includes('contacto')) projectDesc.textContent = t.contactoDesc;
    }
    
    // Traducir hero
    const heroTitle = document.querySelector('.hero-text h1');
    const heroDesc = document.querySelector('.hero-text p');
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    if (heroDesc) heroDesc.textContent = t.heroDesc;
    
    // Traducir footer
    const footer = document.querySelector('footer p');
    if (footer) footer.textContent = t.footer;
}
