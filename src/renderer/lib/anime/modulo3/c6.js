const botones = document.querySelectorAll("a");
const defineEsfera = document.querySelector("#defineEsfera");
const partesEsfera = document.querySelector("#partesEsfera");
const calculosEsfera = document.querySelector("#calculosEsfera");
const preguntaEsfera = document.querySelector("#preguntaEsfera");

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
    moverContenedor(id);
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

const respuestaEsfera = document.querySelector("#respuestaEsfera");
const btnEsfera = document.querySelector("#btnEsfera");

const resultado = 267.94;

btnEsfera.addEventListener("click", () => {
  let respuesta = respuestaEsfera.value;
  if (comprobarVacio(respuestaEsfera)) {
    return;
  }

  if (respuesta == resultado) {
    mostrarRespuestaCorrecta();
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
