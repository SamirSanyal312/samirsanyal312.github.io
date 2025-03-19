// Scroll Reveal Animations
ScrollReveal().reveal('.home__content, .home__image, .projects .project', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    delay: 200,
    easing: 'ease-in-out'
});

// Mobile Navbar Toggle
document.getElementById('nav-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});
