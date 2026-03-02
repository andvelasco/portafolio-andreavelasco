// Función para cambiar idioma (placeholder - necesitarás implementar traducciones completas)
function toggleLanguage() {
    const langBtn = document.querySelector('.lang-switch');
    const currentLang = langBtn.textContent;
    
    if (currentLang === 'ENGLISH') {
        langBtn.textContent = 'ESPAÑOL';
        // Aquí irían las traducciones al inglés
        alert('Funcionalidad de traducción en desarrollo');
    } else {
        langBtn.textContent = 'ENGLISH';
        // Aquí irían las traducciones al español
    }
}
