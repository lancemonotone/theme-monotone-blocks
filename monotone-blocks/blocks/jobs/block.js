document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.type-job');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 0;
            } else {
                entry.target.style.opacity = 1;
            }
        });
    }, { threshold: 0.9 }); // Adjust the threshold as needed

    cards.forEach(card => {
        observer.observe(card);
    });
});
