// Select all the anchor tags
let navLinks = document.querySelectorAll('#menu-main-navigation > li > a');

// Flag to disable scroll event handler
let isLinkClicked = false;

// Add click event listener to each anchor tag
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        isLinkClicked = true; // Disable scroll event handler

        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to clicked link
        this.classList.add('active');

        // Scroll to the corresponding section
        let target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });

        // Re-enable scroll event handler after the scroll animation completes
        setTimeout(() => isLinkClicked = false, 1000);
    });
});

// Add scroll event listener to the window
window.addEventListener('scroll', function() {
    if (isLinkClicked) return; // If a link was clicked, do nothing

    // Check the scroll position against each section
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        if (
            window.scrollY >= section.offsetTop - section.offsetHeight * 0.25 &&
            window.scrollY < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
        ) {
            current = section.getAttribute('id');
        }
    });

    // Add 'active' class to the corresponding link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
