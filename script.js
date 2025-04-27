// Menú hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Scroll Reveal básico
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150; // cuando faltan 150px para entrar en pantalla

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    }
  });
});
