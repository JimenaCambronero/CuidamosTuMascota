// boton se servicios

const btnSaberMas = document.querySelectorAll('.boton-saber');

for (let i = 0; i < btnSaberMas.length; i++){
  btnSaberMas[i].addEventListener('click', e => {
    const contenidoSaberMas = e.target.nextElementSibling;
    contenidoSaberMas.classList.toggle('d-none');

    if (contenidoSaberMas.classList.contains('d-none')) {
      e.target.innerHTML = 'Saber más'
    }else {
      e.target.innerHTML = 'Ocultar';
    }
  });
}
