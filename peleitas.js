let vida1 = 100;
let vida2 = 100;

function quitarVida() {
    document.getElementById('vida1').style.width = vida1 + '%';
    document.getElementById('vida2').style.width = vida2 + '%';

    document.getElementById('vida1texto').innerText = vida1 + '%';
    document.getElementById('vida2texto').innerText = vida2 + '%';

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

document.getElementById('ataque1').addEventListener('click', function() {
    vida2 -= 10; 
    if (vida2 < 0) vida2 = 0;
    quitarVida();
});

document.getElementById('ataque2').addEventListener('click', function() {
    vida1 -= 10;
    if (vida1 < 0) vida1 = 0;
    quitarVida();
});

quitarVida();