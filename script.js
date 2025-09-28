document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(currentTheme);

    toggleButton.addEventListener('click', function() {
        const isLightMode = document.body.classList.contains('light');
        document.body.classList.toggle('light', !isLightMode);
        document.body.classList.toggle('dark', isLightMode);
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
        toggleButton.textContent = isLightMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });
});