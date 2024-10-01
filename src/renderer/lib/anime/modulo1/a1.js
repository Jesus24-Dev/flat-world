const botones = document.querySelectorAll("a");

const introduccion = document.querySelector("#introduccion");
const defineTriangulo = document.querySelector("#defineTriangulo");
const defineTrianguloPorLados = document.querySelector(
  "#defineTrianguloPorLados"
);
const defineTrianguloPorAngulos = document.querySelector(
  "#defineTrianguloPorAngulos"
);
const areaPerimetro = document.querySelector("#areaPerimetro");

function translate1000(container) {
  container.style.transform = "translateX(-1700px)";

  container.style.opacity = 0;
}
// translate1000(introduccion);
translate1000(defineTriangulo);
translate1000(defineTrianguloPorLados);
translate1000(defineTrianguloPorAngulos);
translate1000(areaPerimetro);

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
      quitar(introduccion);
      avanzar(defineTriangulo);
      break;
    case "2":
      quitar(defineTriangulo);
      avanzar(defineTrianguloPorLados);
      break;
    case "3":
      quitar(defineTrianguloPorLados);
      avanzar(defineTrianguloPorAngulos);
      break;
    case "4":
      quitar(defineTrianguloPorAngulos);
      avanzar(areaPerimetro);
      break;
    case "5":
      window.location.href = "../lecciones/modulo1Lecciones.html";
      break;
  }
}

function moverContenedorAtras(id) {
  switch (id) {
    case "-1":
      avanzar(introduccion);
      quitar2(defineTriangulo);
      break;
    case "-2":
      avanzar(defineTriangulo);
      quitar2(defineTrianguloPorLados);
      break;
    case "-3":
      avanzar(defineTrianguloPorLados);
      quitar2(defineTrianguloPorAngulos);
      break;
    case "-4":
      avanzar(defineTrianguloPorAngulos);
      quitar2(areaPerimetro);
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
