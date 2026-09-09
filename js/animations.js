/**
 * ==========================================================================
 *        MÓDULO DE ANIMACIONES Y TRANSICIONES - ZYRA EDITORIAL (PREMIUM)
 * ==========================================================================
 */

class ZyraAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Configuraciones base de animaciones de entrada en la carga
        document.documentElement.style.setProperty('--anim-duration', '1.4s');
        document.documentElement.style.setProperty('--anim-easing', 'cubic-bezier(0.16, 1, 0.3, 1)');
        
        // Aplicar pequeños retrasos de stagger a los artículos de novedades
        const cards = document.querySelectorAll('.feed-card');
        cards.forEach((card, idx) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(12px)';
            card.style.transition = 'opacity 1s ease, transform 1s ease';
            card.style.transitionDelay = `${0.35 + (idx * 0.1)}s`;
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        });
    }
}
window.ZyraAnimations = ZyraAnimations;
