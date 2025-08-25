let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo");
    nombre = nombre.value;

    if (nombre != "") {
        amigos.push(nombre);
        nombre = "";
        listaAmigos()
    } else {
        alert("Ingrese un nombre")
    }
}

function listaAmigos() {
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = ""

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
        console.log(amigos[i]);
    }
}
