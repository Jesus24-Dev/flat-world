const carta1 = document.querySelector("#carta1");
const carta2 = document.querySelector("#carta2");
const carta3 = document.querySelector("#carta3");
const carta4 = document.querySelector("#carta4");
const adelante = document.querySelector("#adelante");
const atras = document.querySelector("#atras");
let moduloActual = 1;

carta2.style.transform = "translateX(1000px)";
carta3.style.transform = "translateX(1000px)";
carta4.style.transform = "translateX(1000px)";

adelante.addEventListener("click", moverAdelante);
atras.addEventListener("click", moverAtras);

function moverAdelante() {
  if (moduloActual === 1) {
    moverAnime(carta1, -1500);
    moverAnime(carta2, 0);
    moduloActual = 2;
  } else if (moduloActual === 2) {
    moverAnime(carta2, -1500);
    moverAnime(carta3, 0);
    moduloActual = 3;
  } else if (moduloActual === 3) {
    moverAnime(carta3, -1500);
    moverAnime(carta4, 0);
    moduloActual = 4;
  } else {
    return;
  }
}

function moverAtras() {
  if (moduloActual === 4) {
    moverAnime(carta4, -1500);
    moverAnime(carta3, 0);
    moduloActual = 3;
  } else if (moduloActual === 3) {
    moverAnime(carta3, -1500);
    moverAnime(carta2, 0);
    moduloActual = 2;
  } else if (moduloActual === 2) {
    moverAnime(carta2, -1500);
    moverAnime(carta1, 0);
    moduloActual = 1;
  } else {
    return;
  }
}

function moverAnime(card, x) {
  anime({
    targets: card,
    translateX: x,
    duration: 250,
    easing: "linear",
  });
}
