const ejercicio1 = document.querySelector("#ejercicio1");
const respuestaEjercicio1 = document.querySelector("#respuestaEjercicio1");
const btnEjercicio1 = document.querySelector("#btnEjercicio1");

const resultado1 = 8000;

btnEjercicio1.addEventListener("click", () => {
  let respuesta = respuestaEjercicio1.value;
  if (comprobarVacio(respuestaEjercicio1)) {
    return;
  }

  if (respuesta == resultado1) {
    mostrarRespuestaCorrecta();
    avanzarPregunta(ejercicio1);
  } else {
    mostrarRespuestaIncorrecta();
  }
});

const ejercicio2 = document.querySelector("#ejercicio2");
const respuestaEjercicio2 = document.querySelector("#respuestaEjercicio2");
const btnEjercicio2 = document.querySelector("#btnEjercicio2");

const resultado2 = 75.36;

btnEjercicio2.addEventListener("click", () => {
  let respuesta = respuestaEjercicio2.value;
  if (comprobarVacio(respuestaEjercicio2)) {
    return;
  }

  if (respuesta == resultado2) {
    mostrarRespuestaCorrecta();
    avanzarPregunta(ejercicio2);
  } else {
    mostrarRespuestaIncorrecta();
  }
});

const Ejercicio3 = document.querySelector("#Ejercicio3");
const respuestaEjercicio3 = document.querySelector("#respuestaEjercicio3");
const btnEjercicio3 = document.querySelector("#btnEjercicio3");

const resultado3 = 339.12;

btnEjercicio3.addEventListener("click", () => {
  let respuesta = respuestaEjercicio3.value;
  if (comprobarVacio(respuestaEjercicio3)) {
    return;
  }

  if (respuesta == resultado3) {
    mostrarRespuestaCorrecta();
    avanzarPregunta(Ejercicio3);
  } else {
    mostrarRespuestaIncorrecta();
  }
});

const Ejercicio4 = document.querySelector("#Ejercicio4");
const respuestaEjercicio4 = document.querySelector("#respuestaEjercicio4");
const btnEjercicio4 = document.querySelector("#btnEjercicio4");

const resultado4 = 6;

btnEjercicio4.addEventListener("click", () => {
  let respuesta = respuestaEjercicio4.value;
  if (comprobarVacio(respuestaEjercicio4)) {
    return;
  }

  if (respuesta == resultado4) {
    mostrarRespuestaCorrecta();
    avanzarPregunta(Ejercicio4);
  } else {
    mostrarRespuestaIncorrecta();
  }
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
