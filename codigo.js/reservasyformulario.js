// agregar texto con JavaScrip Reserva de estadias.
let introReservas = document.createElement ('p');
introReservas.setAttribute ('class', "intro-reservas");
introReservas.innerHTML = "Queremos que las mascotas sean felices y estén cuidadas con el mismo cariño que en sus casas. En Cuidamos a tu Mascota vas a encontrar a una segunda familia para ellos. Anhelamos que sus dueños estén tranquilos en su ausencia, sabiendo que su mascota será muy bien atendida y cuidada. Les proporcionaremos todas las atenciones que nuestros amiguitos peludos necesiten y sus dueños estará al tanto de todo lo que suceda durante su estadía. Estas también son vacaciones para tu mascota!💘 Atenderemos a cada uno de forma individual, según su carácter y necesidades con mucho amor y juegos. Los esperamos!! " 

let contenedorEstadia = document.getElementById ("intro-reservas");
contenedorEstadia.append(introReservas);
// console.log (introReservas);

// texto agregado con jquery

$('#masMacotas').append("¡Si tienes algun otro tipo de mascota, recordá que podes consultarnos.");

// Formulario

aperturaModal = document.querySelector ('#modal-formulario')



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
    
        if(cantidadMascotas <= 2 && cantidadPerros + cantidadGatos <= 2 && nombreDueño !="" && apellidoDueño !="") {
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
        aperturaModal.style.display = "block";

        for (let i = 0; i < localStorage.length; i++){
          let datosFormulario = localStorage.key(i);
  
    }
    let textoModalReserva = document.createElement ('p')
    textoModalReserva.setAttribute('class', 'mensaje-reserva')
   
    textoModalReserva = `Hola! Podes revisar tus datos y luego comunicarte por WhatsApp para que realicemos la reserva, copia y pega este mensaje: Mi nombre es ${nombreDueño} ${apellidoDueño} mi email es ${emailDueño} quisiera saber disponibilidad para el cuidado de mi/s ${cantidadMascotas} mascota/s (${cantidadPerros} perro/s ${cantidadGatos} gato/s) a partir del ${fecha} por un total de ${totalDias} dias, por el servicio se me ha cotizado un presupuestado total de ${resultadoPresupuesto} euros, quisiera seguir con la reserva.`;
    
    let mensajeContenedor = document.getElementById ('mensaje-contenedor');
    mensajeContenedor.append(textoModalReserva);
    
    } else{
    alert ("Recuerda completar todos los campos. Solo podemos cuidar hasta dos mascotas, lo sentimos");
  }  
  });
  
  //limpiar formulario
  $ (document).ready (function (){
    $('#limpiar-formulario').click (function(){
      $('#formulario-presupuesto') [0].reset ();
    });
  });


  

