import { toggleMenu } from './menu.js';
import { scrollToTop, initScrollToTopButton } from './scrollToTop.js';

document.querySelector('.menu-button').addEventListener('click', toggleMenu);

initScrollToTopButton();

