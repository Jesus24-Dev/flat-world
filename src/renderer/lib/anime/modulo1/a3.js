const botones = document.querySelectorAll("a");
const defineRombo = document.querySelector("#defineRombo");
const calculoRombo = document.querySelector("#calculoRombo");

function translate1000(container) {
  container.style.transform = "translateX(-1700px)";
  container.style.opacity = 0;
}

translate1000(calculoRombo);

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
      quitar(defineRombo);
      avanzar(calculoRombo);
      break;
    case "2":
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
