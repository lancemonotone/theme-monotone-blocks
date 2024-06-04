document.addEventListener('DOMContentLoaded', function () {

    function doSpotlight() {
        const spotlight = document.getElementById('spotlight');

        document.addEventListener('pointermove', (event) => {
            const x = event.clientX;
            const y = event.clientY;
            spotlight.style.setProperty('--gradient-position', `${x}px ${y}px`);
        });
    }

    doSpotlight();

});