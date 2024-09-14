const botones = document.querySelectorAll("a");
const defineCilindro = document.querySelector("#defineCilindro");
const partesCilindro = document.querySelector("#partesCilindro");
const calculosCilindro = document.querySelector("#calculosCilindro");
const preguntaCilindro = document.querySelector("#preguntaCilindro");

function translate1000(container) {
  container.style.transform = "translateX(-1700px)";
  container.style.opacity = 0;
}

translate1000(partesCilindro);
translate1000(calculosCilindro);
translate1000(preguntaCilindro);

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
      quitar(defineCilindro);
      avanzar(partesCilindro);
      break;
    case "2":
      quitar(partesCilindro);
      avanzar(calculosCilindro);
      break;
    case "3":
      quitar(calculosCilindro);
      avanzar(preguntaCilindro);
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

const respuestaCilindro = document.querySelector("#respuestaCilindro");
const btnCilindro = document.querySelector("#btnCilindro");

const resultado = 339.12;

btnCilindro.addEventListener("click", () => {
  let respuesta = respuestaCilindro.value;
  if (comprobarVacio(respuestaCilindro)) {
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
