// --- Gestion du Dark Mode pour CaféCode (Lien Texte) ---
function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('cafecode-theme', theme);
    
    // Mettre à jour le texte du bouton
    const textElements = document.querySelectorAll('.theme-text');
    textElements.forEach(el => {
        el.textContent = theme === 'dark' ? '☀️ Mode Clair' : '🌙 Mode Sombre';
    });
}

// Initialisation immédiate
const savedTheme = localStorage.getItem('cafecode-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);

// Attacher l'événement au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(savedTheme);
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const current = document.documentElement.getAttribute('data-bs-theme') || 'light';
            const next = current === 'light' ? 'dark' : 'light';
            applyTheme(next);
        });
    });
});
