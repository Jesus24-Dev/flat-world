const botones = document.querySelectorAll(".botonPreguntas");
const pregunta1 = document.querySelector("#pregunta1");
const pregunta2 = document.querySelector("#pregunta2");
const pregunta3 = document.querySelector("#pregunta3");
const pregunta4 = document.querySelector("#pregunta4");
const pregunta5 = document.querySelector("#pregunta5");

let preguntaActual = 1;

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    if (boton.classList.contains("correcto")) {
      mostrarRespuestaCorrecta();
      preguntaActual++;
      setTimeout(() => {
        actualizarPantalla();
      }, 500);
    } else {
      mostrarRespuestaIncorrecta();
    }
  });
});

function actualizarPantalla() {
  if (preguntaActual == 2) {
    pregunta1.style.display = "none";
  } else if (preguntaActual == 3) {
    pregunta2.style.display = "none";
  } else if (preguntaActual == 4) {
    pregunta3.style.display = "none";
  } else if (preguntaActual == 5) {
    pregunta4.style.display = "none";
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
