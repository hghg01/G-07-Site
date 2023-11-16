function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}



    
const elts = {
	text1: document.getElementById("text1"),
	text2: document.getElementById("text2")
};

// The strings to morph between. You can change these to anything you want!
const texts = [
	"Quem",
	"Somos",
	"?",

];

// Controls the speed of morphing.
const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	
	setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
	// fraction = Math.cos(fraction * Math.PI) / -2 + .5;
	
	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	fraction = 1 - fraction;
	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
	morph = 0;
	
	elts.text2.style.filter = "";
	elts.text2.style.opacity = "100%";
	
	elts.text1.style.filter = "";
	elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
	requestAnimationFrame(animate);
	
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 1000;
	time = newTime;
	
	cooldown -= dt;
	
	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}
		
		doMorph();
	} else {
		doCooldown();
	}
}

// Start the animation.
animate();
unction texto(){
  //elemento pego do id//
  var num = document.getElementById("num");
  var num2 = document.getElementById("num2");
  //convertendo para " int "//
  var conversao = num.value;
  var conv2 = num2.value
  //onde é feito a conta//
  var juncao = parseFloat(conversao * conv2 );
  var juncao2=parseFloat(conv2 * conversao);
  //mostrar na pagina//
  var body = document.getElementById("show");
  var mostrar = " o resultado da multiplicação é " + juncao2;body.innerHTML = mostrar  

}

function numero(){
  var number = document.getElementById("div");
  var num2 = document.getElementById("div2");
  var conv = number.value;
  var conv2 = num2.value;
  var resultado = parseFloat(conv / conv2);
  var resul2 = parseFloat(conv2 / conv);
  var mostrar = document.getElementById("show2");
  var ver = "o resultado da divisao é " + resultado;mostrar.innerHTML = ver

}

function number(){
  var num = document.getElementById("num2");
  var num2 = document.getElementById("num3");
  var rev1 = num.value;
  var rev2 = num2.value;
  var float1 = parseFloat (rev1);
  console.log(float1)
  var mostrar = document.getElementById("show3");
  var show = "o resultado da subtração é " + float1;mostrar.innerHTML = show
  
}

function nome(){
 var nome = document.getElementById("name").value;
  var h2 = document.getElementById("show4");
 var mostr = "seja bem vindo(a)," + nome;h2.innerHTML = mostr
  
}

function result(){
  var numero = document.getElementById("pote");
  var conversao = numero.value;
  var resultado = parseFloat(conversao);
  var final = resultado * resultado;
  var log = document.getElementById("show5");
  var end = "o resultado da potência é " + final;log.innerHTML = end

}
