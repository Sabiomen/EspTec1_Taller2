  // Recuperar personajes seleccionados
  const jugador1 = localStorage.getItem("jugador1");
  const jugador2 = localStorage.getItem("jugador2");

  // Agregar texto 
 document.getElementById("player1").innerText = "Jugador 1 ";
 document.getElementById("player2").innerText = "Jugador 2";

  // Puedes agregar estilos o imágenes basadas en el personaje seleccionado
  // Ejemplo: Cambiar la clase de los divs para mostrar la imagen correspondiente
  if (jugador1) {
      document.getElementById("player1").classList.add(jugador1);
  }
  if (jugador2) {
      document.getElementById("player2").classList.add(jugador2);
  }