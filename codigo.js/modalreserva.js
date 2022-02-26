let cierreVentana = document.querySelector ('#cerrar-ventana');
let ventanaContenido = document.querySelector ('#modal-formulario');

cierreVentana.addEventListener ('click', e => {
  ventanaContenido.style.display = "none";
});