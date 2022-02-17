
// textos Testimonios

let parrafo = document.createElement('p');
parrafo.setAttribute ("class", "parrafo-testimonios");
parrafo.innerHTML = "Acá vas a poder leer algunas de las opiniones que hemos ido recibiendo a lo largo de este tiempo que llevamos cuidando mascotas, lo hacemos con mucho amor, cada una de ellas es cuidada y mimada como si fuesen propias."
// console.log(parrafo);
let introTestimonios = document.getElementById("intro-testimonios");
introTestimonios.append(parrafo);
