let vida1 = 100;
let vida2 = 100;
let velocidad = 10;

function quitarVida() {
    document.getElementById('vida1').style.width = vida1 + '%';
    document.getElementById('vida2').style.width = vida2 + '%';

    document.getElementById('vida1texto').innerText = vida1 + '%';
    document.getElementById('vida2texto').innerText = vida2 + '%';

    // Si alguno de los jugadores pierde toda la salud, se deshabilitan los botones
    if (vida1 <= 0) {
        document.getElementById('ataque1').disabled = true;
        document.getElementById('ataque2').disabled = true;
        alert("¡Jugador 2 gana!");
    } else if (vida2 <= 0) {
        document.getElementById('ataque1').disabled = true;
        document.getElementById('ataque2').disabled = true;
        alert("¡Jugador 1 gana!");
    }

    
}


document.addEventListener('keydown', function(event) {
    // Obtener la tecla presionada
    const key = event.key;
    
    const jugador1 = document.getElementById('jugador1');
    const jugador1Posicion = jugador1.offsetLeft; // obtengo la pos horizontal
    
    const jugador2 = document.getElementById('jugador2');
    const jugador2Posicion = jugador2.offsetLeft; // obtengo la pos horizontal

 
    // Mover al jugador hacia la izquierda si se presiona la tecla "A" o la flecha izquierda
    if (key == 'a') {
        jugador1.style.left = (jugador1Posicion - velocidad) + 'px';
    }
    
    // Mover al jugador hacia la derecha si se presiona la tecla "D" o la flecha derecha
    if (key == 'd') {
        jugador1.style.left = (jugador1Posicion + velocidad) + 'px';
    }
    
    if(key == 'ArrowLeft'){
        jugador2.style.left = (jugador2Posicion - velocidad) + 'px';
    }
    if(key == 'ArrowRight'){
        jugador2.style.left = (jugador2Posicion + velocidad) + 'px';
    }
    
});



// Event listeners para los botones de ataque
document.getElementById('ataque1').addEventListener('click', function() {
    vida2 -= 10; // Jugador 1 ataca al jugador 2
    if (vida2 < 0) vida2 = 0;
    quitarVida();
});

document.getElementById('ataque2').addEventListener('click', function() {
    vida1 -= 10; // Jugador 2 ataca al jugador 1
    if (vida1 < 0) vida1 = 0;
    quitarVida();
});

// Inicializa las barras de vida
quitarVida();