// Lógica para menús desplegables en juegos.html
window.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(drop => {
    const btn = drop.querySelector('.dropbtn');
    btn.addEventListener('click', () => {
      // Cierra otros menús
      dropdowns.forEach(d => { if (d !== drop) d.classList.remove('open'); });
      // Alterna el menú actual
      drop.classList.toggle('open');
    });
  });
  // Cierra el menú si se hace clic fuera
  document.addEventListener('click', (e) => {
    if (![...dropdowns].some(drop => drop.contains(e.target))) {
      dropdowns.forEach(drop => drop.classList.remove('open'));
    }
  });
});
