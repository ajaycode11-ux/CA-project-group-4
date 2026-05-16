document.addEventListener('DOMContentLoaded', () => {
    // Select all header elements (could be multiple if we reuse script)
    const headers = document.querySelectorAll('.header');

    headers.forEach(header => {
        const hamburgerBtn = header.querySelector('.hamburger-btn');
        const mainNav = header.querySelector('.main-nav');

        if (hamburgerBtn && mainNav) {
            hamburgerBtn.addEventListener('click', () => {
                // Toggle active class on navigation menu
                mainNav.classList.toggle('nav-active');
                // Toggle active class on hamburger for animation
                hamburgerBtn.classList.toggle('active');
            });
        }
    });
});
