const { ipcRenderer } = require("electron");

const cedulaRegistro = document.querySelector("#cedulaRegistro");
const nombreRegistro = document.querySelector("#nombreRegistro");
const apellidoRegistro = document.querySelector("#apellidoRegistro");
const seccionRegistro = document.querySelector("#seccionRegistro");
const botonRegistro = document.querySelector("#botonRegistro");
const registroError = document.querySelector("#registroError");

botonRegistro.addEventListener("click", async (e) => {
  e.preventDefault();
  const cedula = cedulaRegistro.value;
  const nombreNormal = nombreRegistro.value;
  const apellidoNormal = apellidoRegistro.value;
  const seccion = seccionRegistro.value;
  if (!cedula || !nombreNormal || !apellidoNormal || seccion == 0) {
    registroError.innerHTML = "Todos los campos son obligatorios";
    registroError.classList.remove("hidden");
    setTimeout(() => {
      registroError.classList.add("hidden");
    }, 2000);
    return;
  }

  const nombre = nombreNormal.toUpperCase();
  const apellido = apellidoNormal.toUpperCase();

  const datos = {
    cedula,
    nombre,
    apellido,
    seccion,
  };
  const resultado = await ipcRenderer.invoke("registrarUsuario", datos);
  if (!resultado) {
    registroError.innerHTML = "La cedula del estudiante ya esta registrada.";
    registroError.classList.remove("hidden");
    setTimeout(() => {
      registroError.classList.add("hidden");
    }, 2000);
  } else {
    sessionStorage.setItem("cedula", cedula);
    sessionStorage.setItem("datos", JSON.stringify(datos));
    window.location.href = "../views/paginaPrincipal.html";
  }
});

const cedulaInicio = document.querySelector("#cedulaInicio");
const seccionInicio = document.querySelector("#seccionInicio");
const botonInicio = document.querySelector("#botonInicio");
const inicioError = document.querySelector("#inicioError");

botonInicio.addEventListener("click", async (e) => {
  e.preventDefault();
  const cedula = cedulaInicio.value;
  const seccion = seccionInicio.value;
  if (!cedula || seccion == 0) {
    inicioError.innerHTML = "Todos los campos son obligatorios";
    inicioError.classList.remove("hidden");
    setTimeout(() => {
      inicioError.classList.add("hidden");
    }, 2000);
    return;
  }

  const datos = {
    cedula,
    seccion,
  };

  const resultado = await ipcRenderer.invoke("sesionUsuario", datos);
  if (!resultado) {
    inicioError.innerHTML = "Campos no coindicen o usuario inexistente.";
    inicioError.classList.remove("hidden");
    setTimeout(() => {
      inicioError.classList.add("hidden");
    }, 2000);
  } else {
    sessionStorage.setItem("cedula", cedula);
    sessionStorage.setItem("datos", JSON.stringify(resultado));
    window.location.href = "../views/paginaPrincipal.html";
  }
});
