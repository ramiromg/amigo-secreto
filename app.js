// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
	let nombreDeAmigo = document.getElementById('amigo').value;

	if (listaAmigos.length == 0) {
		document.getElementById('resultado').innerHTML = "";
	}

	if (nombreDeAmigo == '') {
		//No ingresó nombre de amigo
		alert("Debe ingresar un nombre de amigo");
	} else {
		//añadir a una lista el nombre, verificando que no exista y mostrarlo en la pagina
		if (listaAmigos.includes(nombreDeAmigo)) {
			//Dar alerta que el nombre ya fue ingresado
			alert("El nombre ya fue registrado. Intente con otro nombre.");
		} else {
			listaAmigos.push(nombreDeAmigo);
			document.getElementById('amigo').value = '';
			console.log(listaAmigos);
			listarAmigo(nombreDeAmigo);
		}
	}
}

function sortearAmigo() {
	if (listaAmigos.length == 0) {
		alert("Debe ingresar el nombre de sus amigos antes de sortear o ya realizo sorteo.");
	} else {
		let indiceSorteado = parseInt(Math.random()*listaAmigos.length + 1);
		console.log(listaAmigos[indiceSorteado-1]);

		document.getElementById('listaAmigos').innerHTML = "";

		let lista = document.getElementById('resultado');
		let nombreLista = document.createElement("li");	
		nombreLista.textContent = `El amigo secreto sorteado es: ${listaAmigos[indiceSorteado-1]}`;

		lista.appendChild(nombreLista);
		listaAmigos = [];	
	}
}

function listarAmigo(nombreDeAmigo) {
	let lista = document.getElementById('listaAmigos');
	let nuevoNombre = document.createElement("li");	
	nuevoNombre.textContent = nombreDeAmigo;

	lista.appendChild(nuevoNombre);
}