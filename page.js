const selector = {
    paragraph: splitting({
        target: '.hero-paragraph-text',
        by: 'words',
    }),
    image: document.querySelector('.hero-background'),
    navItem: document.querySelectorAll('.nav-item'),
};

const initLenis = () => {
    const lenis = new Lenis({
        lerp: 0.05, // Smooth scrolling factor
        smoothWheel: true, // Smooth scrolling with mouse wheel
    });

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    initScroll(lenis); // Initialize scroll functionality
};

// Function to handle scroll-related logic
const initScroll = (lenis) => {
    // Any custom scroll-related logic can go here
};

// Wait until the DOM is fully loaded
window.addEventListener('DOMContentLoaded', initLenis);
