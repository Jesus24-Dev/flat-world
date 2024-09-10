const login = document.querySelector("#login");
const registro = document.querySelector("#registro");

const btnVamosAprender = document.querySelector("#btnVamosAprender");
const btnPrimeraVez = document.querySelector("#btnPrimeraVez");
const btnTengoCuenta = document.querySelector("#btnTengoCuenta");
const btnSoyNuevo = document.querySelector("#btnSoyNuevo");
const cajaLogin = document.querySelector("#cajaLogin");
const cajaRegistro = document.querySelector("#cajaRegistro");

cajaLogin.style.transform = "translateY(-2000px)";
cajaRegistro.style.transform = "translateY(-2000px)";

btnPrimeraVez.addEventListener("click", () => {
  aparecer(registro);
  registro.classList.toggle("hidden");
  mover(cajaRegistro);
});
btnVamosAprender.addEventListener("click", () => {
  aparecer(login);
  login.classList.toggle("hidden");
  mover(cajaLogin);
});

btnSoyNuevo.addEventListener("click", (e) => {
  cajaRegistro.style.transform = "translateX(2000px)";
  registro.classList.toggle("hidden");
  login.classList.toggle("hidden");
  e.preventDefault();
  quitar(cajaLogin);
  traer(cajaRegistro);
});

btnTengoCuenta.addEventListener("click", (e) => {
  cajaLogin.style.transform = "translateX(-2000px)";
  login.classList.toggle("hidden");
  registro.classList.toggle("hidden");
  e.preventDefault();
  quitar(cajaRegistro);
  traer(cajaLogin);
});

function aparecer(target) {
  anime({
    targets: target,
    opacity: [0, 1],
    duration: 1000,
  });
}

function mover(target) {
  anime({
    targets: target,
    translateY: 0,
    duration: 1000,
    delay: 200,
  });
}

function traer(target) {
  anime({
    targets: target,
    translateX: 0,
    duration: 500,
    easing: "easeOutCubic",
  });
}

function quitar(target) {
  anime({
    targets: target,
    translateX: 2000,
    duration: 500,
  });
}
