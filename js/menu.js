const menu = document.querySelector('.menu');

export function toggleMenu() {
    menu.classList.toggle('show');
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.remove('show');
    }
});
