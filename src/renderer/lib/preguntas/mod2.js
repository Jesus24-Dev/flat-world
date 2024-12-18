const { ipcRenderer } = require("electron");

const feedback = document.querySelector("#feedbackIncorrecto");

function mostrarFeedback(mensaje) {
  feedback.innerHTML = mensaje;
}

ipcRenderer.on("salir-leccion", () => {
  window.location.href = "../paginaPrincipal.html";
});

function aumentarFallo() {
  const cedula = sessionStorage.getItem("cedula");
  ipcRenderer.send("aumentarFallos", cedula);
}

function aumentarAcierto() {
  const cedula = sessionStorage.getItem("cedula");
  ipcRenderer.send("aumentarAciertos", cedula);
}

const perimetroTrapecio = document.querySelector("#perimetroTrapecio");
const respuestaPerimetroTrapecio = document.querySelector(
  "#respuestaPerimetroTrapecio"
);
const btnPerimetroTrapecio = document.querySelector("#btnPerimetroTrapecio");

const respuesta1 = 30;

btnPerimetroTrapecio.addEventListener("click", () => {
  let respuesta = respuestaPerimetroTrapecio.value;
  if (comprobarVacio(respuestaPerimetroTrapecio)) {
    return;
  }

  if (respuesta == respuesta1) {
    mostrarRespuestaCorrecta();
    aumentarAcierto();
  } else {
    mostrarFeedback(respuesta1);
    mostrarRespuestaIncorrecta();
    aumentarFallo();
  }
  avanzarPregunta(perimetroTrapecio);
});

const areaTrapecio = document.querySelector("#areaTrapecio");
const respuestaAreaTrapecio = document.querySelector("#respuestaAreaTrapecio");
const btnAreaTrapecio = document.querySelector("#btnAreaTrapecio");

const respuesta2 = 32;

btnAreaTrapecio.addEventListener("click", () => {
  let respuesta = respuestaAreaTrapecio.value;
  if (comprobarVacio(respuestaAreaTrapecio)) {
    return;
  }

  if (respuesta == respuesta2) {
    mostrarRespuestaCorrecta();
    aumentarAcierto();
  } else {
    mostrarFeedback(respuesta2);
    mostrarRespuestaIncorrecta();
    aumentarFallo();
  }
  setTimeout(() => {
    window.location.href = "../lecciones/modulo2Lecciones.html";
  }, 2000);
});

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

function avanzarPregunta(container) {
  anime({
    targets: container,
    opacity: [1, 0],
    duration: 1000,
    complete: function () {
      container.style.display = "none";
    },
  });
}

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
