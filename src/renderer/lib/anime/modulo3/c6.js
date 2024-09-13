const botones = document.querySelectorAll("a");
const defineEsfera = document.querySelector("#defineEsfera");
const partesEsfera = document.querySelector("#partesEsfera");
const calculosEsfera = document.querySelector("#calculosEsfera");
const preguntaEsfera = document.querySelector("#preguntaEsfera");

function translate1000(container) {
  container.style.transform = "translateX(-1700px)";
  container.style.opacity = 0;
}

translate1000(partesEsfera);
translate1000(calculosEsfera);
translate1000(preguntaEsfera);

botones.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    let id = boton.id;
    moverContenedor(id);
  });
});

function moverContenedor(id) {
  switch (id) {
    case "1":
      quitar(defineEsfera);
      avanzar(partesEsfera);
      break;
    case "2":
      quitar(partesEsfera);
      avanzar(calculosEsfera);
      break;
    case "3":
      quitar(calculosEsfera);
      avanzar(preguntaEsfera);
      break;
  }
}

function quitar(container) {
  anime({
    targets: container,
    translateX: -1700,
    duration: 200,
    easing: "linear",
  });
}
function avanzar(container) {
  anime({
    targets: container,
    translateX: 0,
    duration: 200,
    easing: "linear",
    opacity: {
      delay: 200,
      value: [0, 1],
    },
  });
}
