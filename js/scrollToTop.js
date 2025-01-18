export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function initScrollToTopButton() {
    const button = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
        button.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    button.addEventListener('click', scrollToTop);
}

