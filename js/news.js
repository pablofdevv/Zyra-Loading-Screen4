/**
 * ==========================================================================
 *        MÓDULO DE NOVEDADES Y ATAJOS EDITORIALES - ZYRA (PREMIUM)
 * ==========================================================================
 */

class ZyraNewsSlider {
    constructor(config) {
        this.config = config || {};
        this.newsContainer = document.getElementById('timeline-feed-wrapper');
        this.init();
    }

    init() {
        if (!this.newsContainer) return;
        
        let html = "";

        // 1. Añadir Novedades como artículos de lookbook
        if (this.config.components.enableNews && this.config.news) {
            this.config.news.forEach(item => {
                const badgeText = item.type === 'update' ? 'UPDATE' : 'EVENT';
                html += `
                    <article class="feed-card">
                        <div class="feed-meta-row">
                            <span class="feed-badge">${badgeText}</span>
                            <span class="feed-date">${item.date}</span>
                        </div>
                        <h4 class="feed-title">${item.title}</h4>
                        <p class="feed-desc">${item.description}</p>
                    </article>`;
            });
        }

        // 2. Añadir Bloque de Controles / Atajos útiles
        if (this.config.controls && this.config.controls.length > 0) {
            let keysHtml = "";
            this.config.controls.forEach(ctrl => {
                keysHtml += `
                    <div class="feed-key-item">
                        <kbd>${ctrl.key}</kbd>
                        <span>${ctrl.description}</span>
                    </div>`;
            });

            html += `
                <article class="feed-card">
                    <div class="feed-meta-row">
                        <span class="feed-badge">SETTINGS</span>
                        <span class="feed-date">USEFUL KEYS</span>
                    </div>
                    <h4 class="feed-title">Server Controls</h4>
                    <div class="feed-keys-container">
                        ${keysHtml}
                    </div>
                </article>`;
        }

        this.newsContainer.innerHTML = html;
    }
}
window.ZyraNewsSlider = ZyraNewsSlider;
