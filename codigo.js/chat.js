
const abrirChat = document.querySelector('#abrir-boton');
const cerrarChat = document.querySelector('#cerrar-chat');
const popup = document.querySelector('#abrir-chat');


abrirChat.addEventListener ('click', e =>{
    popup.style.display = "block";
});

cerrarChat.addEventListener ('click', e => {
    popup.style.display = "none";
});

