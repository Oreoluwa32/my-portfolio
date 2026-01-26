const header = document.querySelector("header");

window.addEventListener("scroll", function() {
	header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

// ScrollReveal Animations
const sr = ScrollReveal({
	distance: '60px',
	duration: 2500,
	delay: 400,
	reset: true
});

sr.reveal('.home-text', { origin: 'left' });
sr.reveal('.about-img', { origin: 'bottom' });
sr.reveal('.about-text', { origin: 'top' });
sr.reveal('.main-text, .services-content, .portfolio-content, .contact', { origin: 'bottom' });
sr.reveal('.box', { interval: 200 });
sr.reveal('.row', { interval: 200 });
