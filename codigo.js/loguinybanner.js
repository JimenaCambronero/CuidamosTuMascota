console.log("hola");

// Apertura de ventana para logueo


let registro = document.querySelector('#registro');
let modal = document.querySelector('#ventana');
let cerrarModal = document.querySelector ('#cerrarModal');
let cerrarModal2 = document.querySelector ('#cerrarModal2')

let showModal = e => {
  e.stopPropagation();
  modal.classList.toggle('d-none');
};

registro.addEventListener('click', e => {
  showModal(e);
});

cerrarModal.addEventListener ('click', e => {
  showModal(e);
})

cerrarModal2.addEventListener ('click', e => {
  showModal(e);
})

//  Formulario de Registro---------------------------------------

const btnSignIn = document.querySelector ('.sign-in-btn'), //boton iniciar sesion
      btnSignUp = document.querySelector ('.sign-up-btn'), // boton registrarse
      signUp = document.querySelector ('.sign-up'), // contenedor registrarse
      signIn = document.querySelector('.sign-in'),// contenedor iniciar sesion
      cuentaGratis = document.querySelector ('.cuenta-gratis'),
      registrarse = document.getElementById ('boton-registrarse');

const changeActive = e => {
  if (e.target === btnSignIn || e.target === btnSignUp){
      signIn.classList.toggle('active');
      signUp.classList.toggle ('active');
  }
};

btnSignIn.addEventListener('click', e => {
  changeActive(e);
});
btnSignUp.addEventListener ('click', e => {
  changeActive(e);
});

registrarse.addEventListener('click', e => {
  let formData = {
      nombre: document.getElementById('nombre').value,
      email: document.getElementById ('email').value,
      contraseña: document.getElementById ('contraseña').value,
  }
  localStorage.setItem("formData", JSON.stringify(formData));
  dispData();
  e.preventDefault();
})

function dispData(){
  console.log (JSON.parse(localStorage.getItem("formData")));
  if(localStorage.getItem("formData")){
      let {nombre, email, contraseña} = JSON.parse(localStorage.getItem("formData"));
  }
}
dispData();
console.log();


// Funcion animacion de Titulo

function typeEffect(element, speed) {
  let text = element.innerHTML;
  element.innerHTML = "";
  
  let i = 0;
  let timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

let speed = 150;
let h1 = document.querySelector('h1');
let delay = h1.innerHTML.length * speed + speed;

typeEffect(h1, speed);

// aparecer texto lentamente con Jquery

$('#presentacion').hide ();
$('#presentacion').show (2500);

//animacion de secciones

$('#sobrenosotros').addClass('animated fadeInLeft');
$('#seccionEstadia').addClass ('animated fadeInRight');
$('#testimonios').addClass ('animated fadeInLeft');
$('#tiendaChiches').addClass('animated fadeInRight');
$('#contenedor-servicios').addClass('animated fadeInLeft');

