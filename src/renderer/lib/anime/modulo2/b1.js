const botones = document.querySelectorAll("a");
const defineTrapecio = document.querySelector("#defineTrapecio");
const trapecioRectangulo = document.querySelector("#trapecioRectangulo");
const trapecioIsosceles = document.querySelector("#trapecioIsosceles");
const trapecioEscaleno = document.querySelector("#trapecioEscaleno");
const calculoAreaTrapecio = document.querySelector("#calculoAreaTrapecio");
const calculoAreaPerimetro = document.querySelector("#calculoAreaPerimetro");

function translate1000(container) {
  container.style.transform = "translateX(-1700px)";
  container.style.opacity = 0;
}

translate1000(trapecioRectangulo);
translate1000(trapecioIsosceles);
translate1000(trapecioEscaleno);
translate1000(calculoAreaPerimetro);
translate1000(calculoAreaTrapecio);

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
      quitar(defineTrapecio);
      avanzar(trapecioRectangulo);
      break;
    case "2":
      quitar(trapecioRectangulo);
      avanzar(trapecioIsosceles);
      break;
    case "3":
      quitar(trapecioIsosceles);
      avanzar(trapecioEscaleno);
      break;
    case "4":
      quitar(trapecioEscaleno);
      avanzar(calculoAreaTrapecio);
      break;
    case "5":
      quitar(calculoAreaTrapecio);
      avanzar(calculoAreaPerimetro);
      break;
    case "6":
      window.location.href = "../lecciones/modulo2Lecciones.html";
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
