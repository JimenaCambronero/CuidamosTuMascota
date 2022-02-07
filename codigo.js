console.log("hola");

// Apertura de ventana para logueo

const registro = document.querySelector('#registro');
const modal = document.querySelector('#ventana');
const cerrarModal = document.querySelector ('#cerrarModal');
const cerrarModal2 = document.querySelector ('#cerrarModal2')

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

cerrarModal2.addEventListener ('click', e => {
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
  

if(cantidadMascotas <= 2 && cantidadPerros + cantidadGatos <= 2) {
  let resultadoPresupuesto = (parseInt(cantidadMascotas) * parseInt(precio)) * parseInt(totalDias)
      datosFormulario = {
      nombre: nombreDueño,
      apellido: apellidoDueño,
      email: emailDueño,
      cantidadMascotas: cantidadMascotas,
      perros: cantidadPerros,
      gatos: cantidadGatos,
      fechaInicio: fecha,
      totalDias: totalDias,
      presupuesto: resultadoPresupuesto,
  }
  
  localStorage.setItem('datosFormulario',JSON.stringify(datosFormulario)); dispData2();
  
  
  function dispData2(){
    console.log (JSON.parse (localStorage.getItem('datosFormulario')));
    if (localStorage.getItem ('datosFormulario')){
      let {nombre, apellido, email, cantidadMascotas, perros, gatos, fechaInicio, totalDias, presupuesto} = JSON.parse(localStorage.getItem('datosFormulario'))
    }
  }

  for (let i = 0; i < localStorage.length; i++){
    let datosFormulario = localStorage.key(i);
    alert(`Hola! Podes revisar tus datos y enviarnos el siguiente mensaje por whatsApp: Mi nombre es ${nombreDueño} ${apellidoDueño} mi email ${emailDueño} quisiera saber disponibilidad para el cuidado de mi/s ${cantidadMascotas} -${cantidadPerros} ${cantidadGatos} mascota/a a partir del ${fecha} por un total de ${totalDias} dias, por el servicio se me ha cotizado un presupuestado total de ${resultadoPresupuesto} euros, quisiera seguir con la reserva.`);
  }

  } else{
  alert ("Son demasiadas mascotas, lo sentimos");
}  
});


//Api fotos aleatorias

let gatoBtn = document.getElementById('gato-btn');
let perroBtn = document.getElementById('perro-btn');
let gatoResultado = document.getElementById('gato-resultado');
let perroResultado= document.getElementById('perro-resultado');

gatoBtn.addEventListener('click', getRandomCat);
perroBtn.addEventListener('click', getRandomDog);

function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			gatoResultado.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				perroResultado.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}

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
