const botones = document.querySelectorAll("a");
const defineCono = document.querySelector("#defineCono");
const partesCono = document.querySelector("#partesCono");
const calculosCono = document.querySelector("#calculosCono");
const preguntaCono = document.querySelector("#preguntaCono");

function translate1000(container) {
  container.style.transform = "translateX(-1700px)";
  container.style.opacity = 0;
}

translate1000(partesCono);
translate1000(calculosCono);
translate1000(preguntaCono);

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
      quitar(defineCono);
      avanzar(partesCono);
      break;
    case "2":
      quitar(partesCono);
      avanzar(calculosCono);
      break;
    case "3":
      quitar(calculosCono);
      avanzar(preguntaCono);
      break;
  }
}
function moverContenedorAtras(id) {
  switch (id) {
    case "-1":
      avanzar(defineCono);
      quitar2(partesCono);
      break;
    case "-2":
      avanzar(partesCono);
      quitar2(calculosCono);
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

const respuestaCono = document.querySelector("#respuestaCono");
const btnCono = document.querySelector("#btnCono");

const resultado = 94.2;

btnCono.addEventListener("click", () => {
  let respuesta = respuestaCono.value;
  if (comprobarVacio(respuestaCono)) {
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
