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

const ejercicio1 = document.querySelector("#ejercicio1");
const respuestaEjercicio1 = document.querySelector("#respuestaEjercicio1");
const btnEjercicio1 = document.querySelector("#btnEjercicio1");

const resultado1 = 12;

btnEjercicio1.addEventListener("click", () => {
  let respuesta = respuestaEjercicio1.value;
  if (comprobarVacio(respuestaEjercicio1)) {
    return;
  }

  if (respuesta == resultado1) {
    mostrarRespuestaCorrecta();
    aumentarAcierto();
  } else {
    mostrarFeedback(resultado1);
    mostrarRespuestaIncorrecta();
    aumentarFallo();
  }
  avanzarPregunta(ejercicio1);
});

const ejercicio2 = document.querySelector("#ejercicio2");
const respuestaEjercicio2 = document.querySelector("#respuestaEjercicio2");
const btnEjercicio2 = document.querySelector("#btnEjercicio2");

const resultado2 = 26;

btnEjercicio2.addEventListener("click", () => {
  let respuesta = respuestaEjercicio2.value;
  if (comprobarVacio(respuestaEjercicio2)) {
    return;
  }

  if (respuesta == resultado2) {
    mostrarRespuestaCorrecta();
    aumentarAcierto();
  } else {
    mostrarFeedback(resultado2);
    mostrarRespuestaIncorrecta();
    aumentarFallo();
  }
  avanzarPregunta(ejercicio2);
});

const Ejercicio3 = document.querySelector("#Ejercicio3");
const respuestaEjercicio3 = document.querySelector("#respuestaEjercicio3");
const btnEjercicio3 = document.querySelector("#btnEjercicio3");

const resultado3 = 160;

btnEjercicio3.addEventListener("click", () => {
  let respuesta = respuestaEjercicio3.value;
  if (comprobarVacio(respuestaEjercicio3)) {
    return;
  }

  if (respuesta == resultado3) {
    mostrarRespuestaCorrecta();
    aumentarAcierto();
  } else {
    mostrarFeedback(resultado3);
    mostrarRespuestaIncorrecta();
    aumentarFallo();
  }
  avanzarPregunta(Ejercicio3);
});

const Ejercicio4 = document.querySelector("#Ejercicio4");
const respuestaEjercicio4 = document.querySelector("#respuestaEjercicio4");
const btnEjercicio4 = document.querySelector("#btnEjercicio4");

const resultado4 = 0.6;

btnEjercicio4.addEventListener("click", () => {
  let respuesta = respuestaEjercicio4.value;
  if (comprobarVacio(respuestaEjercicio4)) {
    return;
  }

  if (respuesta == resultado4) {
    mostrarRespuestaCorrecta();
    aumentarAcierto();
  } else {
    mostrarFeedback(resultado4);
    mostrarRespuestaIncorrecta();
    aumentarFallo();
  }
  setTimeout(() => {
    window.location.href = "../lecciones/modulo4Lecciones.html";
  }, 1000);
});

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
