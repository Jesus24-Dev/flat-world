/* ---------------------------------------------------------------------------------
------------------------------------TRIANGULO A1------------------------------------
--------------------------------------------------------------------------------- */

const contenedorTriangulo = document.querySelector("#contenedorTriangulo");
const trianguloBaseContenedor = document.querySelector("#trianguloBase");
const atributosTriangulo = {
  "stroke-width": 5,
  stroke: "#74fc7d",
  fill: "#00b30d",
};

const paperIntroduccionTriangulo = Raphael(contenedorTriangulo);

let triangulo = paperIntroduccionTriangulo.path("M103 277 L360 277 L232 32 Z");
triangulo.attr(atributosTriangulo);

const paperTrianguloBase = Raphael(trianguloBaseContenedor);
let trianguloBase = paperTrianguloBase.path("M32 400 L432 400 L250 32 Z");
trianguloBase.attr(atributosTriangulo);

const triangulosPorLado = document.querySelector("#triangulosPorLado");

const paperTriangulosLados = Raphael(triangulosPorLado);
let trianguloEquilatero = paperTriangulosLados.path(
  "M64 177 L247 177 L155 24 Z"
);
let trianguloIsosceles = paperTriangulosLados.path(
  "M400 177 L543 177 L471 24 Z"
);
let trianguloEscaleno = paperTriangulosLados.path(
  "M696 177 L879 177 L820 24 Z"
);

const setTrianguloLados = paperTriangulosLados.set();

setTrianguloLados.push(
  trianguloEquilatero,
  trianguloIsosceles,
  trianguloEscaleno
);

setTrianguloLados.forEach((triangulo) => {
  triangulo.attr(atributosTriangulo);
});

const triangulosPorAngulo = document.querySelector("#triangulosPorAngulo");

const paperTriangulosAngulo = Raphael(triangulosPorAngulo);
let trianguloAcutangulo = paperTriangulosAngulo.path(
  "M64 120 L247 177 L247 24 Z"
);
let trianguloRectangulo = paperTriangulosAngulo.path(
  "M400 177 L543 177 L400 24 Z"
);
let trianguloObtusangulo = paperTriangulosAngulo.path(
  "M696 177 L879 177 L920 24 Z"
);

const setTrianguloAngulo = paperTriangulosAngulo.set();

setTrianguloAngulo.push(
  trianguloAcutangulo,
  trianguloRectangulo,
  trianguloObtusangulo
);

setTrianguloAngulo.forEach((triangulo) => {
  triangulo.attr(atributosTriangulo);
});

const calculoTriangulo = document.querySelector("#calculoTriangulo");

const paperCalculoTriangulo = Raphael(calculoTriangulo);

let trianguloCalculos = paperCalculoTriangulo.path(
  "M32 280 L500 280 L360 32 Z"
);

trianguloCalculos.attr(atributosTriangulo);
let lineaAltura = paperCalculoTriangulo.path("M360 32 L360 280");
lineaAltura.attr({ "stroke-width": 5, stroke: "red" });

let a = paperCalculoTriangulo.text(200, 110, "a");
let b = paperCalculoTriangulo.text(450, 110, "b");
let c = paperCalculoTriangulo.text(300, 300, "c");
let h = paperCalculoTriangulo.text(330, 150, "h");

let setLetras = paperCalculoTriangulo.set();
setLetras.push(a, b, c, h);

setLetras.forEach((letra) => {
  letra.attr({ "font-size": 24, fill: "red", "font-weight": "bold" });
});
