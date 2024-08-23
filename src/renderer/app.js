const $btnPrimeraVez = document.querySelector("#btnPrimeraVez");
const $btnVamosAprender = document.querySelector("#btnVamosAprender");
const $btnSoyNuevo = document.querySelector("#btnSoyNuevo");
const $btnTengoCuenta = document.querySelector("#btnTengoCuenta");
const $registro = document.querySelector("#registro");
const $login = document.querySelector("#login");

$btnPrimeraVez.addEventListener("click", (event) => {
  event.preventDefault();
  abrirRegistro();
  cerrarLogin();
});

$btnVamosAprender.addEventListener("click", (event) => {
  event.preventDefault();
  abrirLogin();
  cerrarRegistro();
});

$btnSoyNuevo.addEventListener("click", (event) => {
  event.preventDefault();
  abrirRegistro();
  cerrarLogin();
});

$btnTengoCuenta.addEventListener("click", (event) => {
  event.preventDefault();
  abrirLogin();
  cerrarRegistro();
});

function abrirRegistro() {
  $registro.classList.remove("hidden");
}

function cerrarRegistro() {
  $registro.classList.add("hidden");
}

function abrirLogin() {
  $login.classList.remove("hidden");
}

function cerrarLogin() {
  $login.classList.add("hidden");
}
