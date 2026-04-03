const whatsappNumber = "573136140489"; // Número en formato internacional sin signos ni espacios
const buttons = document.querySelectorAll('.btn-whatsapp');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const producto = button.dataset.producto;
    const mensaje = encodeURIComponent(`Hola, quiero pedir: ${producto}.\nNombre: \nDirección: \nCantidad: \nGracias.`);
    const url = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
    window.open(url, '_blank');
  });
});

// Filtrado de productos
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.producto-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remover active de todos los botones
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Agregar active al botón clicado
    button.classList.add('active');
    
    const filter = button.dataset.filter;
    
    productCards.forEach(card => {
      if (filter === 'todos') {
        card.classList.remove('hidden');
      } else {
        if (card.dataset.tipo === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      }
    });
  });
});
