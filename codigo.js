console.log("hola");

// const boton = document.getElementById ("consultar");

// boton.addEventListener ('click', promptMensaje);

// let precioDiario1 = 15;
// let precioDiario2 = 13;
// let nombre = "";
// let edad = "";
// let mascota = "";


// function promptMensaje(){ 

// nombre = prompt ("Hola! Ingresa tu nombre aquí!");
// alert ("Bienvenida/o " + " " + nombre);

// alert ("Gracias por visitarnos, ahora te haremos unas preguntas ...!");

// edad = parseInt (prompt ("Ingresa tu edad por favor"));

//   if (edad >=18) {
//     alert (" Puedes ingresar a nuestro sitio y realizar una reserva " + nombre); 

// cantidadMascotas = parseInt (prompt ("Ingresa cuantas mascotas quieres que cuidemos!"));
//   if (cantidadMascotas >=1 && cantidadMascotas <=3){
//   alert ("Podemos cuidar a tu/s mascota/s");
//   }

// mascota = prompt ("Indicanos si tu mascota es perro o gato");
//   if (mascota === "perro"){
//   alert ("El costo para que cuidemos a tu perro es de " + precioDiario1 + " euros por dia");
//   periodoDeCuidado = prompt ("Cuantos días quieres que cuidemos a tu mascota?");
//   alert ("Si nos contratas cuidaremos a tu" + " " + mascota + " " + "por" + " " + periodoDeCuidado + " " + "días. Sumando un total de" + " " + ((precioDiario1)*(periodoDeCuidado)) + " " + "euros");
//    } else if (mascota === "gato"){
// alert ("El costo para que cuidemos a tu gato es de " + precioDiario2 + " euros por dia");
// periodoDeCuidado = prompt ("Cuantos días quieres que cuidemos a tu mascota?");
// alert ("Si nos contratas cuidaremos a tu" + " " + mascota + " " + "por" + " " + periodoDeCuidado + " " + "días. Sumando un total de" + " " + ((precioDiario1)*(periodoDeCuidado)) + " " + "euros");
// } else {
//   alert ( "Si tienes una mascota de otro tipo puedes comunicarte por correo para elaborar un presupuesto")
// }
// }else {
//   alert ("Puedes visitar nuesta pagina pero no puedes contratar el servicio.");
//   }
// }

// Apertura de ventana para logueo

const registro = document.querySelector('#registro');
const modal = document.querySelector('#ventana');
const cerrarModal = document.querySelector ('#cerrarModal');

const showModal = e => {
  e.stopPropagation();
  modal.classList.toggle('d-none');
};

registro.addEventListener('click', e => {
  showModal(e);
});

cerrarModal.addEventListener ('click', e => {
  showModal(e);
})

 //Formulario de Registro---------------------------------------

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

// agregar texto con JavaScript en el banner

let parrafo = document.createElement('p');
parrafo.setAttribute ("class", "parrafo-testimonios");
parrafo.innerHTML = "Acá vas a poder leer algunas de las opiniones que hemos ido recibiendo a lo largo de este tiempo que llevamos cuidando mascotas, lo hacemos con mucho amor, cada una de ellas es cuidada y mimada como si fuesen propias."
// console.log(parrafo);

let introTestimonios = document.getElementById("intro-testimonios");
introTestimonios.append(parrafo);

// agregar texto con JavaScrip Reserva de estadias.

let introReservas = document.createElement ('p');
introReservas.setAttribute ('class', "intro-reservas");
introReservas.innerHTML = "Queremos que las mascotas sean felices y estén cuidadas con el mismo cariño que en sus casas. En Cuidamos a tu Mascota vas a encontrar a una segunda familia para ellos. Anhelamos que sus dueños estén tranquilos en su ausencia, sabiendo que su mascota será muy bien atendida y cuidada. Les proporcionaremos todas las atenciones que nuestros amiguitos peludos necesiten y sus dueños estará al tanto de todo lo que suceda durante su estadía. Estas también son vacaciones para tu mascota!💘 Atenderemos a cada uno de forma individual, según su carácter y necesidades con mucho amor y juegos. Los esperamos!! " 

let contenedorEstadia = document.getElementById ("intro-reservas");
contenedorEstadia.append(introReservas);
// console.log (introReservas);

// aparecer texto lentamente con Jquery

$('#presentacion').hide ();
$('#presentacion').show (2500);

//animacion de secciones

$('#sobrenosotros').addClass('animated fadeInLeft');
$('#seccionEstadia').addClass ('animated fadeInRight');
$('#testimonios').addClass ('animated fadeInLeft');
$('#contenedor-servicios').addClass ('animated fadeInRight');

// texto agregado con jquery

$('#masMacotas').append("¡Si tienes algun otro tipo de mascota, recordá que podes consultarnos.");

// Formulario

$('#presupuesto').click(function (e) { 
  e.preventDefault();
  let nombreDueño = $('#nombre-dueño').val()
  let apellidoDueño = $('#apellido-dueño').val()
  let emailDueño = $('#email-dueño').val()
  let cantidadMascotas = parseInt($('#cantidad-mascotas').val())
  let cantidadPerros = parseInt($('#cantidad-perros').val())
  let cantidadGatos = parseInt($('#cantidad-gatos').val())
  let fecha = $('#fecha').val()
  let totalDias = parseInt($('#total-dias').val())
  let precio = 15

if(cantidadMascotas <= 2) {

  //en construcción
  
  
  } else{
  alert ("Son demasiadas mascotas, lo sentimos");
}
  
  
});

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
