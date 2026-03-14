document.addEventListener('DOMContentLoaded', () => {
    // ─── NAVBAR SCROLL EFFECT ───
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // ─── MOBILE DRAWER TOGGLE ───
    const hamb = document.getElementById('hamb');
    const drawer = document.getElementById('drawer');
    const drawerLinks = document.querySelectorAll('.drawer-links a');

    if (hamb && drawer) {
        hamb.addEventListener('click', () => {
            drawer.classList.toggle('active');
            hamb.classList.toggle('active');
            // Prevent body scroll when drawer is open
            document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Close drawer when a link is clicked
        drawerLinks.forEach(link => {
            link.addEventListener('click', () => {
                drawer.classList.remove('active');
                hamb.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // ─── SCROLL REVEAL ANIMATIONS ───
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // ─── ROI CALCULATOR (If present) ───
    const leadsSlider = document.getElementById('leads-missed');
    const valueInput = document.getElementById('lead-value');
    const resultDisplay = document.getElementById('roi-result');

    if (leadsSlider && valueInput && resultDisplay) {
        const calculateROI = () => {
            const leads = parseInt(leadsSlider.value);
            const value = parseInt(valueInput.value) || 0;
            const convRate = 0.15; // 15% as per request
            const total = Math.round(leads * value * convRate);
            resultDisplay.innerText = '₹' + total.toLocaleString('en-IN');

            // Update labels
            const leadsLabel = document.getElementById('leads-label');
            if (leadsLabel) leadsLabel.innerText = leads;
        };

        leadsSlider.addEventListener('input', calculateROI);
        valueInput.addEventListener('input', calculateROI);
        calculateROI(); // Initial run
    }
});
