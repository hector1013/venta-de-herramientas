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
