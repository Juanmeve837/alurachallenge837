// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigo = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo");
    let nombreAmigo = nombre.value;

    if(!nombreAmigo){
        alert("Debes ingresar un nombre");
        return;
    }
    amigo.push(nombreAmigo);
    nombre.value = "";
    nombre.focus();
    render();
}

function render(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if (amigo.length === 0){
        alert("No hay amigos para sortear");
        return;
    }
    let amigoSecreto = amigo[Math.floor(Math.random()*amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSecreto}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";

}

