const botones = document.querySelectorAll("a");
const defineEsfera = document.querySelector("#defineEsfera");
const partesEsfera = document.querySelector("#partesEsfera");
const calculosEsfera = document.querySelector("#calculosEsfera");
const preguntaEsfera = document.querySelector("#preguntaEsfera");
const feedback = document.querySelector("#feedbackIncorrecto");

function mostrarFeedback(mensaje) {
  feedback.innerHTML = mensaje;
}

const { ipcRenderer } = require("electron");

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

function translate1000(container) {
  container.style.transform = "translateX(-1700px)";
  container.style.opacity = 0;
}

translate1000(partesEsfera);
translate1000(calculosEsfera);
translate1000(preguntaEsfera);

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
      quitar(defineEsfera);
      avanzar(partesEsfera);
      break;
    case "2":
      quitar(partesEsfera);
      avanzar(calculosEsfera);
      break;
    case "3":
      quitar(calculosEsfera);
      avanzar(preguntaEsfera);
      break;
  }
}
function moverContenedorAtras(id) {
  switch (id) {
    case "-1":
      avanzar(defineEsfera);
      quitar2(partesEsfera);
      break;
    case "-2":
      avanzar(partesEsfera);
      quitar2(calculosEsfera);
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

const respuestaEsfera = document.querySelector("#respuestaEsfera");
const btnEsfera = document.querySelector("#btnEsfera");

const resultado = 268.08;

btnEsfera.addEventListener("click", () => {
  let respuesta = respuestaEsfera.value;
  if (comprobarVacio(respuestaEsfera)) {
    return;
  }

  if (respuesta == resultado) {
    mostrarRespuestaCorrecta();
    aumentarAcierto();
  } else {
    mostrarFeedback(resultado);
    mostrarRespuestaIncorrecta();
    aumentarFallo();
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
