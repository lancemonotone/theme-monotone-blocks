document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with data-fancybox attribute starting with 'gallery-'
    const galleries = document.querySelectorAll('[data-fancybox^="gallery-"]');

    // Iterate over each gallery
    galleries.forEach(gallery => {
        // Get the gallery id
        const galleryId = gallery.getAttribute('data-fancybox');

        // Bind Fancybox to the gallery
        Fancybox.bind(`[data-fancybox="${galleryId}"]`, {
            autoSize: true,
            fitToView: true,
            maxWidth: 940
        });
    });
});