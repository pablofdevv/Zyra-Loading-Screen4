/**
 * ==========================================================================
 *        MÓDULO DE FASES DE CARGA - ZYRA EDITORIAL (PREMIUM)
 * ==========================================================================
 */

class ZyraLoadingManager {
    constructor(config) {
        this.config = config || {};
        this.phases = this.config.phases || [];
        this.logText = document.getElementById('log-text');
        this.statusTag = document.getElementById('server-status-tag');
    }

    updatePhaseText(percentage) {
        const val = Math.min(Math.max(percentage, 0), 100);
        
        // Hallar el texto correspondiente al progreso actual
        const activePhase = this.phases.reduce((prev, curr) => {
            return (val >= curr.progress) ? curr : prev;
        }, this.phases[0]);

        if (activePhase && this.logText) {
            this.logText.innerText = activePhase.text;
        }

        // Actualizar etiqueta del encabezado
        if (this.statusTag) {
            if (val < 25) {
                this.statusTag.innerText = "EDITION 01 / CONNECTING";
            } else if (val < 75) {
                this.statusTag.innerText = "EDITION 01 / DOWNLOADING";
            } else if (val < 100) {
                this.statusTag.innerText = "EDITION 01 / CONFIGURING";
            } else {
                this.statusTag.innerText = "EDITION 01 / READY";
            }
        }
    }
}
window.ZyraLoadingManager = ZyraLoadingManager;
