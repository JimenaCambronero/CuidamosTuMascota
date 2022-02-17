
let verPresupuesto = document.querySelector('#presupuesto');
let modalVentana = document.querySelector('#modal-formulario');
let cerrarVentanaModal = document.querySelector ('#cerrar-form');


let showModal = e => {
  e.stopPropagation();
  modalVentana.classList.toggle('d-none');
};

verPresupuesto.addEventListener('click', e => {
  showModal(e);
});

cerrarVentanaModal.addEventListener ('click', e => {
  showModal(e);
})

