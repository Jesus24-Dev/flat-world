const botones = document.querySelectorAll("a");
const defineCilindro = document.querySelector("#defineCilindro");
const partesCilindro = document.querySelector("#partesCilindro");
const calculosCilindro = document.querySelector("#calculosCilindro");
const preguntaCilindro = document.querySelector("#preguntaCilindro");

function translate1000(container) {
  container.style.transform = "translateX(-1700px)";
  container.style.opacity = 0;
}

translate1000(partesCilindro);
translate1000(calculosCilindro);
translate1000(preguntaCilindro);

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
      quitar(defineCilindro);
      avanzar(partesCilindro);
      break;
    case "2":
      quitar(partesCilindro);
      avanzar(calculosCilindro);
      break;
    case "3":
      quitar(calculosCilindro);
      avanzar(preguntaCilindro);
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
