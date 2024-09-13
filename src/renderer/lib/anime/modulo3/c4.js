const botones = document.querySelectorAll("a");
const defineCono = document.querySelector("#defineCono");
const partesCono = document.querySelector("#partesCono");
const calculosCono = document.querySelector("#calculosCono");
const preguntaCono = document.querySelector("#preguntaCono");

function translate1000(container) {
  container.style.transform = "translateX(-1700px)";
  container.style.opacity = 0;
}

translate1000(partesCono);
translate1000(calculosCono);
translate1000(preguntaCono);

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
      quitar(defineCono);
      avanzar(partesCono);
      break;
    case "2":
      quitar(partesCono);
      avanzar(calculosCono);
      break;
    case "3":
      quitar(calculosCono);
      avanzar(preguntaCono);
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
