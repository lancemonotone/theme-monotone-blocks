document.addEventListener('DOMContentLoaded', (event) => {
    const root = document.documentElement;
    root.classList.add('group', 'primary', 'dark');
    // root.classList.add('contrast');

    const toggleTheme = () => {
        if (root.classList.contains('dark')) {
            root.classList.remove('dark');
            root.classList.add('light');
        } else {
            root.classList.remove('light');
            root.classList.add('dark');
        }
    };
});