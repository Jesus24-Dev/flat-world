const botones = document.querySelectorAll("a");
const defineCubo = document.querySelector("#defineCubo");
const partesCubo = document.querySelector("#partesCubo");
const calculosCubo = document.querySelector("#calculosCubo");
const preguntaCubo = document.querySelector("#preguntaCubo");

function translate1000(container) {
  container.style.transform = "translateX(-1700px)";
  container.style.opacity = 0;
}

translate1000(partesCubo);
translate1000(calculosCubo);
translate1000(preguntaCubo);

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
      quitar(defineCubo);
      avanzar(partesCubo);
      break;
    case "2":
      quitar(partesCubo);
      avanzar(calculosCubo);
      break;
    case "3":
      quitar(calculosCubo);
      avanzar(preguntaCubo);
      break;
  }
}
function moverContenedorAtras(id) {
  switch (id) {
    case "-1":
      avanzar(defineCubo);
      quitar2(partesCubo);
      break;
    case "-2":
      avanzar(partesCubo);
      quitar2(calculosCubo);
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

const respuestaCubo = document.querySelector("#respuestaCubo");
const btnCubo = document.querySelector("#btnCubo");

const resultado = 27;

btnCubo.addEventListener("click", () => {
  let respuesta = respuestaCubo.value;
  if (comprobarVacio(respuestaCubo)) {
    return;
  }

  if (respuesta == resultado) {
    mostrarRespuestaCorrecta();
    setTimeout(function () {
      window.location.replace("../lecciones/modulo3Lecciones.html");
    }, 2000);
  } else {
    mostrarRespuestaIncorrecta();
  }
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
