// script.js
let seleccionJugador1 = null;
let seleccionJugador2 = null;

function seleccionarPersonaje(personaje, jugador) {
    if (jugador === 1) {
        if (seleccionJugador1) {
            alert("Jugador 1 ya ha seleccionado un personaje.");
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
