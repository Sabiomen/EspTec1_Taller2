// Recuperar personajes seleccionados
const jugador1 = localStorage.getItem("jugador1");
const jugador2 = localStorage.getItem("jugador2");

// Agregar texto 
document.getElementById("player1").innerText = "Jugador 1 ";
document.getElementById("player2").innerText = "Jugador 2";

// Puedes agregar estilos o imágenes basadas en el personaje seleccionado
if (jugador1) {
    document.getElementById("player1").classList.add(jugador1);
}
if (jugador2) {
    document.getElementById("player2").classList.add(jugador2);
}



// Inicializar posiciones
let player1Position = { top: 0, left: 0 };
let player2Position = { top: 0, left: 600 };
// obtiene el tamaño de la arena
const arena = document.getElementById("arena");
const arenaWidth = arena.offsetWidth;
const arenaHeight = arena.offsetHeight;



function movePlayer(player, direction) {
    const element = document.getElementById(player);
    const playerWidth = element.offsetWidth;
    const playerHeight = element.offsetHeight;

    let currentPosition = player === 'player1' ? player1Position : player2Position;

    switch (direction) {
        case 'up':
            if (currentPosition.top > 0) { // Verifica que no supere el límite superior
                currentPosition.top -= 10;
            }
            break;
        case 'down':
            if (currentPosition.top + playerHeight < arenaHeight) { // Verifica que no supere el límite inferior
                currentPosition.top += 10;
            }
            break;
        case 'left':
            if (currentPosition.left > 0) { // Verifica que no supere el límite izquierdo
                currentPosition.left -= 10;
            }
            break;
        case 'right':
            if (currentPosition.left + playerWidth < arenaWidth) { // Verifica que no supere el límite derecho
                currentPosition.left += 10;
            }
            break;
    }

    // Actualizar la posición en pantalla
    element.style.top = currentPosition.top + 'px';
    element.style.left = currentPosition.left + 'px';
}

// Escuchar eventos de teclado
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            movePlayer('player1', 'up');
            break;
        case 's':
            movePlayer('player1', 'down');
            break;
        case 'a':
            movePlayer('player1', 'left');
            break;
        case 'd':
            movePlayer('player1', 'right');
            break;

        case 'ArrowUp':
            movePlayer('player2', 'up');
            break;
        case 'ArrowDown':
            movePlayer('player2', 'down');
            break;
        case 'ArrowLeft':
            movePlayer('player2', 'left');
            break;
        case 'ArrowRight':
            movePlayer('player2', 'right');
            break;
    }
});