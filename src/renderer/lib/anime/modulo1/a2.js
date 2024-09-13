const botones = document.querySelectorAll("a");
const defineCuadrilatero = document.querySelector("#defineCuadrilatero");
const defineCuadrado = document.querySelector("#defineCuadrado");
const defineRectangulo = document.querySelector("#defineRectangulo");

function translate1000(container) {
  container.style.transform = "translateX(-1700px)";
  container.style.opacity = 0;
}

translate1000(defineCuadrado);
translate1000(defineRectangulo);

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
      quitar(defineCuadrilatero);
      avanzar(defineCuadrado);
      break;
    case "2":
      quitar(defineCuadrado);
      avanzar(defineRectangulo);
      break;
    case "3":
      alert("Este es el final");
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
