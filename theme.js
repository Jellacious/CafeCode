// --- Gestion automatique du thème selon l'appareil ---
function applyDeviceTheme() {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
}

applyDeviceTheme();

if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyDeviceTheme);
}
