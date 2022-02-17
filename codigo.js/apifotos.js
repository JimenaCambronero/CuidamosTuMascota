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