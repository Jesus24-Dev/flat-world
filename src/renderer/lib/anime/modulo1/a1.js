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
    moverContenedor(id);
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
