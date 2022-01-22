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

 // titulo movimiento escritura ---------------------------------------

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
console.log(parrafo);

let $introTestimonios = document.getElementById("intro-testimonios");
$introTestimonios.append(parrafo);



// boton se servicios
let botonSaber = document.getElementById("boton-saber")
botonSaber.addEventListener ("click", respuestaClick)

function respuestaClick(){
   if (document.getElementById ("contenido-saber").style.display == "block"){ 
    document.getElementById ("contenido-saber").style.display = "none";
    document.getElementById ("boton-saber").innerHTML = "Saber Más";
  }else{
    document.getElementById ("contenido-saber").style.display = "block";
    document.getElementById ("boton-saber").innerHTML = "Ocultar";
  }
}