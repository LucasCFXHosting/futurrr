// Configuration de GSAP
gsap.registerPlugin(ScrollTrigger);

// Animation du header au chargement
gsap.from('.main-header', {
    duration: 1.5,
    y: -100,
    opacity: 0,
    ease: 'power4.out'
});

// Animation des liens de navigation
gsap.from('.nav-link', {
    duration: 1,
    opacity: 0,
    y: 20,
    stagger: 0.2,
    ease: 'power2.out'
});

// Animation du titre principal
gsap.from('.main-title', {
    duration: 2,
    scale: 0.5,
    opacity: 0,
    ease: 'elastic.out(1, 0.3)',
    delay: 0.5
});

// Animations au scroll
document.querySelectorAll('section').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });
});

// Animation des éléments au hover
document.querySelectorAll('.animate-hover').forEach(element => {
    element.addEventListener('mouseenter', () => {
        gsap.to(element, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    element.addEventListener('mouseleave', () => {
        gsap.to(element, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
}); 