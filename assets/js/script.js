/* 
    SMTC-CR Website Scripts
    Functionality: Mobile Navigation, Scroll Animations
    Version: 2.0 (Deep Blue Theme Support)
*/

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list a');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            mobileBtn.classList.toggle('active');

            // Animate Hamburger (Check if bars exist, creating them via JS if needed or assuming HTML structure)
            const bars = mobileBtn.querySelectorAll('.bar');
            if (bars.length === 3) {
                if (navList.classList.contains('active')) {
                    bars[0].style.transform = 'translateY(8px) rotate(45deg)';
                    bars[1].style.opacity = '0';
                    bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
                } else {
                    bars[0].style.transform = 'none';
                    bars[1].style.opacity = '1';
                    bars[2].style.transform = 'none';
                }
            }
        });
    }

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                mobileBtn.classList.remove('active');

                const bars = mobileBtn.querySelectorAll('.bar');
                if (bars.length === 3) {
                    bars[0].style.transform = 'none';
                    bars[1].style.opacity = '1';
                    bars[2].style.transform = 'none';
                }
            }
        });
    });

    // Scroll Reveal Animation
    // We add 'scroll-item' class to elements we want to animate
    const targetSelectors = '.text-block, .tech-card, .stat-item, .feature-text, .gallery-item, .comparison-card, .section-header';
    const revealElements = document.querySelectorAll(targetSelectors);

    // Initialize: Add the base CSS class for animation start state if not present
    revealElements.forEach(el => el.classList.add('scroll-item'));

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 50; // Threshold

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Initial check
    revealOnScroll();

    // Listen to scroll
    window.addEventListener('scroll', revealOnScroll);
});
