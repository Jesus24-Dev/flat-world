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

const perimetroTriangulo1 = document.querySelector("#perimetroTriangulo1");
const respuestaPerimetroTriangulo1 = document.querySelector(
  "#respuestaPerimetroTriangulo1"
);
const btnPerimetroTriangulo1 = document.querySelector(
  "#btnPerimetroTriangulo1"
);

const perimetroTriangulo2 = document.querySelector("#perimetroTriangulo2");
const respuestaPerimetroTriangulo2 = document.querySelector(
  "#respuestaPerimetroTriangulo2"
);
const btnPerimetroTriangulo2 = document.querySelector(
  "#btnPerimetroTriangulo2"
);

const areaTriangulo = document.querySelector("#areaTriangulo");
const respuestaAreaTriangulo = document.querySelector(
  "#respuestaAreaTriangulo"
);
const btnAreaTriangulo = document.querySelector("#btnAreaTriangulo");

const cuadradoPerimetro = document.querySelector("#cuadradoPerimetro");
const respuestaCuadradoPerimetro = document.querySelector(
  "#respuestaCuadradoPerimetro"
);
const btnCuadradoPerimetro = document.querySelector("#btnCuadradoPerimetro");

const respuesta1 = 15;
const respuesta2 = 20;
const respuesta3 = 30;
const respuesta4 = 32;

btnPerimetroTriangulo1.addEventListener("click", () => {
  let respuesta = respuestaPerimetroTriangulo1.value;
  if (comprobarVacio(respuestaPerimetroTriangulo1)) {
    return;
  }

  if (respuesta == respuesta1) {
    mostrarRespuestaCorrecta();
    aumentarAcierto();
  } else {
    mostrarRespuestaIncorrecta();
    aumentarFallo();
  }
  avanzarPregunta(perimetroTriangulo1);
});

btnPerimetroTriangulo2.addEventListener("click", () => {
  let respuesta = respuestaPerimetroTriangulo2.value;
  if (comprobarVacio(respuestaPerimetroTriangulo2)) {
    return;
  }

  if (respuesta == respuesta2) {
    mostrarRespuestaCorrecta();
    aumentarAcierto();
  } else {
    mostrarRespuestaIncorrecta();
    aumentarFallo();
  }
  avanzarPregunta(perimetroTriangulo2);
});

btnAreaTriangulo.addEventListener("click", () => {
  let respuesta = respuestaAreaTriangulo.value;
  if (comprobarVacio(respuestaAreaTriangulo)) {
    return;
  }

  if (respuesta == respuesta3) {
    mostrarRespuestaCorrecta();
    aumentarAcierto();
  } else {
    mostrarRespuestaIncorrecta();
    aumentarFallo();
  }
  avanzarPregunta(areaTriangulo);
});

btnCuadradoPerimetro.addEventListener("click", () => {
  let respuesta = respuestaCuadradoPerimetro.value;
  if (comprobarVacio(respuestaCuadradoPerimetro)) {
    return;
  }

  if (respuesta == respuesta4) {
    mostrarRespuestaCorrecta();
    aumentarAcierto();
  } else {
    mostrarRespuestaIncorrecta();
    aumentarFallo();
  }
  avanzarPregunta(cuadradoPerimetro);
});

const rectanguloPerimetro = document.querySelector("#rectanguloPerimetro");
const respuestaRectanguloPerimetro = document.querySelector(
  "#respuestaRectanguloPerimetro"
);
const btnRectanguloPerimetro = document.querySelector(
  "#btnRectanguloPerimetro"
);

const respuesta5 = 30;

btnRectanguloPerimetro.addEventListener("click", () => {
  let respuesta = respuestaRectanguloPerimetro.value;
  if (comprobarVacio(respuestaRectanguloPerimetro)) {
    return;
  }

  if (respuesta == respuesta5) {
    mostrarRespuestaCorrecta();
    aumentarAcierto();
  } else {
    mostrarRespuestaIncorrecta();
    aumentarFallo();
  }
  avanzarPregunta(rectanguloPerimetro);
});

const cuadradoArea = document.querySelector("#cuadradoArea");
const respuestaCuadradoArea = document.querySelector("#respuestaCuadradoArea");
const btnCuadradoArea = document.querySelector("#btnCuadradoArea");

const respuesta6 = 36;

btnCuadradoArea.addEventListener("click", () => {
  let respuesta = respuestaCuadradoArea.value;
  if (comprobarVacio(respuestaCuadradoArea)) {
    return;
  }

  if (respuesta == respuesta6) {
    mostrarRespuestaCorrecta();
    aumentarAcierto();
  } else {
    mostrarRespuestaIncorrecta();
    aumentarFallo();
  }
  avanzarPregunta(cuadradoArea);
});

const rectanguloArea = document.querySelector("#rectanguloArea");
const respuestaRectanguloArea = document.querySelector(
  "#respuestaRectanguloArea"
);
const btnRectanguloArea = document.querySelector("#btnRectanguloArea");

const respuesta7 = 84;

btnRectanguloArea.addEventListener("click", () => {
  let respuesta = respuestaRectanguloArea.value;
  if (comprobarVacio(respuestaRectanguloArea)) {
    return;
  }

  if (respuesta == respuesta7) {
    mostrarRespuestaCorrecta();
    aumentarAcierto();
  } else {
    mostrarRespuestaIncorrecta();
    aumentarFallo();
  }
  setTimeout(function () {
    window.location.href = "../lecciones/modulo1Lecciones.html";
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
