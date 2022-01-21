const $btnSignIn = document.querySelector ('.sign-in-btn'),
      $btnSignUp = document.querySelector ('.sign-up-btn'),
      $signUp = document.querySelector ('.sign-up'),
      $signIn = document.querySelector('.sign-in'),
      $registrarse = document.getElementById ('boton-registrarse');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp){
        $signIn.classList.toggle('active');
        $signUp.classList.toggle ('active');
    }
});

document.addEventListener('click', e => {
    let formData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById ('email').value,
        contraseña: document.getElementById ('contraseña').value,
    }
    localStorage.setItem("formData", JSON.stringify(formData));
    dispData();
    e.preventDefaul()
})

function dispData(){
    console.log (JSON.parse(localStorage.getItem("formData")));
    if(localStorage.getItem("formData")){
        let {nombre, email, contraseña} = JSON.parse(localStorage.getItem("formData"));
    }
}
dispData();
console.log();




