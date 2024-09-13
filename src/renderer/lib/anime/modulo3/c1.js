const botones = document.querySelectorAll("a");
const definePrisma = document.querySelector("#definePrisma");
const partesPrisma = document.querySelector("#partesPrisma");
const calculosPrisma = document.querySelector("#calculosPrisma");
const preguntaPrisma = document.querySelector("#preguntaPrisma");

function translate1000(container) {
  container.style.transform = "translateX(-1700px)";
  container.style.opacity = 0;
}

translate1000(partesPrisma);
translate1000(calculosPrisma);
translate1000(preguntaPrisma);

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
      quitar(definePrisma);
      avanzar(partesPrisma);
      break;
    case "2":
      quitar(partesPrisma);
      avanzar(calculosPrisma);
      break;
    case "3":
      quitar(calculosPrisma);
      avanzar(preguntaPrisma);
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
