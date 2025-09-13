// Contador regresivo
const contador = document.getElementById("contador");
const fechaEvento = new Date("Oct 2, 2025 09:00:00").getTime();

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

;

  if (diferencia < 0) {
    contador.innerHTML = "¡El Congreso ha comenzado!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  contador.innerHTML = `
    <div class="time-box"><span>${dias}</span>Días</div>
    <div class="time-box"><span>${horas}</span>Horas</div>
    <div class="time-box"><span>${minutos}</span>Min</div>
    <div class="time-box"><span>${segundos}</span>Seg</div>
  `;
}

setInterval(actualizarContador, 1000);
