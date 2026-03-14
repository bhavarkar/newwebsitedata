// navbar.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll behaviour
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Hamburger & Drawer
    const hamburger = document.querySelector('.nav-hamburger');
    const drawer = document.querySelector('.nav-drawer');
    const drawerClose = document.querySelector('.drawer-close');

    if (hamburger && drawer && drawerClose) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('is-active');
            drawer.classList.toggle('is-open');
        });

        drawerClose.addEventListener('click', () => {
            hamburger.classList.remove('is-active');
            drawer.classList.remove('is-open');
        });
    }

    // 3. Active indicator sliding logic
    const links = document.querySelectorAll('.nav-link');
    const indicator = document.querySelector('.nav-indicator');
    const navLinksContext = document.querySelector('.nav-links');

    function updateIndicator(link) {
        if (!link || !indicator || !navLinksContext) return;

        const parentRect = navLinksContext.getBoundingClientRect();
        const span = link.querySelector('span') || link;
        const rect = span.getBoundingClientRect();

        indicator.style.width = `${rect.width}px`;
        indicator.style.left = `${rect.left - parentRect.left}px`;
        indicator.style.opacity = '1';

        // Bottom is handled by CSS, but if dynamic alignment is needed it would go here
    }

    let activeLink = document.querySelector('.nav-link.active');

    // Set initial position once fonts are loaded
    if (activeLink && indicator) {
        document.fonts.ready.then(() => {
            updateIndicator(activeLink);
        });
        setTimeout(() => updateIndicator(activeLink), 100);
    }

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            updateIndicator(link);
        });

        link.addEventListener('mouseleave', () => {
            if (activeLink) {
                updateIndicator(activeLink);
            } else {
                indicator.style.width = '0px';
                indicator.style.opacity = '0';
            }
        });

        link.addEventListener('click', (e) => {
            links.forEach(l => l.classList.remove('active'));
            e.currentTarget.classList.add('active');
            activeLink = e.currentTarget;
            updateIndicator(activeLink);
        });
    });
});
