const jugador1 = localStorage.getItem("jugador1");
const jugador2 = localStorage.getItem("jugador2");
const arena = document.getElementById('arena');

let player1Health = 100;
let player2Health = 100;

const jugador1_name = document.getElementById("player1")
const jugador2_name = document.getElementById("player2")

document.getElementById("player1").innerText = "Jugador 1 "+player1Health;
document.getElementById("player2").innerText = "Jugador 2 " +player2Health;

if (jugador1) {
    document.getElementById("player1").classList.add(jugador1);
}
if (jugador2) {
    document.getElementById("player2").classList.add(jugador2);
}

let player1X = arena.offsetWidth / 2 - player1.offsetWidth / 2;
let player2X = arena.offsetWidth / 2 - player2.offsetWidth / 2;

const playerSpeed = 5;
const laserSpeed = 5;
const lasers = []; 

const keys = {};  

document.addEventListener('keydown', function(e) {
    keys[e.key] = true;

    if (e.key === 'w'||e.key === 'W' && !keys['shootingPlayer1']) {
        shootLaser(player1X, 'up');
        keys['shootingPlayer1'] = true;
    } else if (e.key === 'ArrowUp' && !keys['shootingPlayer2']) {
        shootLaser(player2X, 'down');
        keys['shootingPlayer2'] = true;
    }
});

document.addEventListener('keyup', function(e) {
    keys[e.key] = false;

    if (e.key === 'w'|| e.key === 'W') keys['shootingPlayer1'] = false;
    if (e.key === 'ArrowUp') keys['shootingPlayer2'] = false;
});

function gameLoop() {
    if (keys['a'] || keys['A'] && player1X > 0) {
        player1X -= playerSpeed;
    } else if (keys['d'] || keys['D'] && player1X < arena.offsetWidth - player1.offsetWidth) {
        player1X += playerSpeed;
    }

    if (keys['ArrowLeft'] && player2X > 0) {
        player2X -= playerSpeed;
    } else if (keys['ArrowRight'] && player2X < arena.offsetWidth - player2.offsetWidth) {
        player2X += playerSpeed;
    }

    player1.style.left = `${player1X}px`;
    player2.style.left = `${player2X}px`;
    moveLasers();
    
    requestAnimationFrame(gameLoop);  
}

function shootLaser(xPosition, direction) {
    const laser = document.createElement('div');
    laser.classList.add('laser');
    laser.style.left = `${xPosition + 75}px`; 
    laser.direction = direction;

    if (direction === 'up') {
        laser.style.bottom = '60px';
    } else {
        laser.style.top = '60px'; 
    }

    arena.appendChild(laser);
    lasers.push(laser);
}


function moveLasers() {
    lasers.forEach((laser, index) => {
        if (laser.direction === 'up') {
            const currentBottom = parseInt(laser.style.bottom);
            if (currentBottom >= arena.offsetHeight) {
                laser.remove();
                lasers.splice(index, 1);
            } else {
                laser.style.bottom = `${currentBottom + laserSpeed}px`;

               
                if (checkCollision(laser, player2)) {
                    laser.remove();
                    lasers.splice(index, 1);
                    player2Health -= 10;
                    jugador2_name.innerText = "Jugador 2 "+player2Health;
                    if (player2Health <= 0) {
                        alert('Gana el Jugador 1!');
                        resetGame();
                    }
                }
            }
        } else {
            const currentTop = parseInt(laser.style.top);
            if (currentTop >= arena.offsetHeight) {
                laser.remove();
                lasers.splice(index, 1);
            } else {
                laser.style.top = `${currentTop + laserSpeed}px`;

                
                if (checkCollision(laser, player1)) {
                    laser.remove();
                    lasers.splice(index, 1);
                    player1Health -= 10;
                    jugador1_name.innerText = "Jugador 1 "+player1Health;
                    if (player1Health <= 0) {
                        alert('Gana el Jugador 2!');
                        resetGame();
                    }
                }
            }
        }
    });
}


function checkCollision(laser, player) {
    const laserRect = laser.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();

    return !(laserRect.right < playerRect.left ||
             laserRect.left > playerRect.right ||
             laserRect.bottom < playerRect.top ||
             laserRect.top > playerRect.bottom);
}


function resetGame() {
    player1Health = 100;
    player2Health = 100;
    jugador1_name.innerText = "Jugador 1 "+player1Health;
    jugador2_name.innerText = "Jugador 2 "+player2Health;

   
    player1X = arena.offsetWidth / 2 - player1.offsetWidth / 2;
    player2X = arena.offsetWidth / 2 - player2.offsetWidth / 2;
    player1.style.left = `${player1X}px`;
    player2.style.left = `${player2X}px`;

    
    lasers.forEach(laser => laser.remove());
    lasers.length = 0;  

    for (let key in keys) {
        keys[key] = false;
    }
}



const imagenJugador1 = localStorage.getItem("jugador1");
const imagenJugador2 = localStorage.getItem("jugador2");
if (imagenJugador1 && imagenJugador2) {
    document.getElementById("player1").style.backgroundImage = `url('resources/${imagenJugador1}.png')`;
    document.getElementById("player2").style.backgroundImage = `url('resources/${imagenJugador2}.png')`;
}

gameLoop();