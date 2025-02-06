let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
        input.focus();
    }
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        const li = document.createElement('li');
        li.className = "list-group-item text-center";
        li.textContent = "********";
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarPopup("Todos los amigos están asignados");
        return;
    }
    
    let indice = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indice];
    amigos.splice(indice, 1);
    
    mostrarPopup("Tu amigo secreto es", nombreSorteado);
    actualizarLista();
}

function mostrarPopup(titulo, nombre) {
    document.getElementById("popup-title").innerText = titulo;
    document.getElementById("popup-name").innerText = nombre;
    document.getElementById("popup").style.display = "block";
    document.querySelector(".input-group button").classList.add("hidden"); // Ocultar botón

    // Agregar event listener para cerrar el popup al presionar Enter
    document.addEventListener("keydown", cerrarPopupConEnter);
}

function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
    document.querySelector(".input-group button").classList.remove("hidden"); // Mostrar botón

    // Remover event listener para evitar múltiples bindings
    document.removeEventListener("keydown", cerrarPopupConEnter);
}

function cerrarPopupConEnter(event) {
    if (event.key === "Enter") {
        cerrarPopup();
    }
}