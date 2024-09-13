const botones = document.querySelectorAll("a");
const definePiramide = document.querySelector("#definePiramide");
const partesPiramide = document.querySelector("#partesPiramide");
const calculosPiramide = document.querySelector("#calculosPiramide");
const preguntaPiramide = document.querySelector("#preguntaPiramide");

function translate1000(container) {
  container.style.transform = "translateX(-1700px)";
  container.style.opacity = 0;
}

translate1000(partesPiramide);
translate1000(calculosPiramide);
translate1000(preguntaPiramide);

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
      quitar(definePiramide);
      avanzar(partesPiramide);
      break;
    case "2":
      quitar(partesPiramide);
      avanzar(calculosPiramide);
      break;
    case "3":
      quitar(calculosPiramide);
      avanzar(preguntaPiramide);
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
