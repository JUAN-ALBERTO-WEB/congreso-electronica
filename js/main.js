// Contador regresivo
const contador = document.getElementById("contador");
const fechaEvento = new Date("Oct 2, 2025 09:00:00").getTime();

setInterval(() => {
  const ahora = new Date().getTime();
  const distancia = fechaEvento - ahora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  if (distancia < 0) {
    contador.innerHTML = "¡El evento ha comenzado!";
  }
}, 1000);
