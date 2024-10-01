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

function moverContenedorAtras(id) {
  switch (id) {
    case "-1":
      avanzar(definePiramide);
      quitar2(partesPiramide);
      break;
    case "-2":
      avanzar(partesPiramide);
      quitar2(calculosPiramide);
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

const respuestaPiramide = document.querySelector("#respuestaPiramide");
const btnPiramide = document.querySelector("#btnPiramide");

const resultado = 20;

btnPiramide.addEventListener("click", () => {
  let respuesta = respuestaPiramide.value;
  if (comprobarVacio(respuestaPiramide)) {
    return;
  }

  if (respuesta == resultado) {
    mostrarRespuestaCorrecta();
  } else {
    mostrarRespuestaIncorrecta();
  }
  setTimeout(function () {
    window.location.replace("../lecciones/modulo3Lecciones.html");
  }, 1000);
});

const respuestaCorrecta = document.querySelector("#respuestaCorrecta");
const respuestaIncorrecta = document.querySelector("#respuestaIncorrecta");

function mostrarRespuestaCorrecta() {
  anime({
    targets: respuestaCorrecta,
    duration: 1000,
    opacity: [0, 1],
    delay: 200,
    begin: function () {
      respuestaCorrecta.classList.remove("hidden");
      respuestaCorrecta.classList.add("grid");
    },
    complete: function () {
      this.opacity = [1, 0];
      this.duration = 500;
      respuestaCorrecta.classList.add("hidden");
      respuestaCorrecta.classList.remove("grid");
    },
  });
}

function mostrarRespuestaIncorrecta() {
  anime({
    targets: respuestaIncorrecta,
    duration: 1000,
    opacity: [0, 1],
    delay: 200,
    begin: function () {
      respuestaIncorrecta.classList.remove("hidden");
      respuestaIncorrecta.classList.add("grid");
    },
    complete: function () {
      this.opacity = [1, 0];
      this.duration = 500;
      respuestaIncorrecta.classList.add("hidden");
      respuestaIncorrecta.classList.remove("grid");
    },
  });
}

function comprobarVacio(input) {
  if (!input.value) {
    input.placeholder = "Ingresa un valor antes de verificar";
    input.classList.remove("placeholder:text-primary-950/75");
    input.classList.add("inputError");
    setTimeout(() => {
      input.classList.add("placeholder:text-primary-950/75");
      input.classList.remove("inputError");
      input.placeholder = "Respuesta";
    }, 750);
    return true;
  } else {
    return;
  }
}
