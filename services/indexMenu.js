let seleccionJugador1 = null;
let seleccionJugador2 = null;

function seleccionarPersonaje(personaje, jugador) {
    if (jugador === 1) {
        if (seleccionJugador1) {
            alert("Jugador 1 ya ha seleccionado un personaje.");
            return;
        }
        if (personaje === seleccionJugador2) {
            alert("Este personaje ya ha sido seleccionado por el Jugador 2.");
            return;
        }
        seleccionJugador1 = personaje;
        alert("Jugador 1 ha seleccionado: " + personaje);
    } else {
        if (seleccionJugador2) {
            alert("Jugador 2 ya ha seleccionado un personaje.");
            return;
        }
        if (personaje === seleccionJugador1) {
            alert("Este personaje ya ha sido seleccionado por el Jugador 1.");
            return;
        }
        seleccionJugador2 = personaje;
        alert("Jugador 2 ha seleccionado: " + personaje);
    }
}

function iniciarPartida(){
    if (!seleccionJugador1 || !seleccionJugador2) {
        alert("Ambos jugadores deben seleccionar un personaje.");
        return;
    }
    localStorage.setItem("jugador1", seleccionJugador1);
    localStorage.setItem("jugador2", seleccionJugador2);
    window.location.href = "partida.html";
    alert("La partida ha iniciado. Jugador 1: " + seleccionJugador1 + ". Jugador 2: " + seleccionJugador2 + ".");
}



