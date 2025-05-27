// Animaciones adicionales para la web
window.addEventListener('DOMContentLoaded', () => {
  // Animación de entrada para el contenido principal
  const main = document.querySelector('.main-content');
  if (main) {
    main.style.opacity = 0;
    main.style.transform = 'translateY(40px)';
    setTimeout(() => {
      main.style.transition = 'opacity 1.2s cubic-bezier(.77,0,.18,1), transform 1.2s cubic-bezier(.77,0,.18,1)';
      main.style.opacity = 1;
      main.style.transform = 'translateY(0)';
    }, 200);
  }
});
