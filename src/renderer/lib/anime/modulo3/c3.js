const botones = document.querySelectorAll("a");
const defineCubo = document.querySelector("#defineCubo");
const partesCubo = document.querySelector("#partesCubo");
const calculosCubo = document.querySelector("#calculosCubo");
const preguntaCubo = document.querySelector("#preguntaCubo");

function translate1000(container) {
  container.style.transform = "translateX(-1700px)";
  container.style.opacity = 0;
}

translate1000(partesCubo);
translate1000(calculosCubo);
translate1000(preguntaCubo);

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
      quitar(defineCubo);
      avanzar(partesCubo);
      break;
    case "2":
      quitar(partesCubo);
      avanzar(calculosCubo);
      break;
    case "3":
      quitar(calculosCubo);
      avanzar(preguntaCubo);
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
