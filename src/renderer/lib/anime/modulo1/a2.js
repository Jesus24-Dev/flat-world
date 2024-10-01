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
    if (id > 0) {
      moverContenedor(id);
    } else {
      moverContenedorAtras(id);
    }
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
      window.location.href = "../lecciones/modulo1Lecciones.html";
      break;
  }
}

function moverContenedorAtras(id) {
  switch (id) {
    case "-1":
      avanzar(defineCuadrilatero);
      quitar2(defineCuadrado);
      break;
    case "-2":
      avanzar(defineCuadrado);
      quitar2(defineRectangulo);
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
function quitar2(container) {
  anime({
    targets: container,
    translateX: 1700,
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
