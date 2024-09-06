const contenedorTriangulo = document.querySelector("#contenedorTriangulo");
const trianguloBaseContenedor = document.querySelector("#trianguloBase");

const paperIntroduccionTriangulo = Raphael(contenedorTriangulo);

let linea1 = paperIntroduccionTriangulo.path("M116 32 L116 277");
let linea2 = paperIntroduccionTriangulo.path("M232 32 L232 277");
let linea3 = paperIntroduccionTriangulo.path("M348 32 L348 277");

let lineas = [linea1, linea2, linea3];

for (let linea of lineas) {
  linea.attr({ "stroke-width": 5, stroke: "#74fc7d" });
}

let triangulo = paperIntroduccionTriangulo.path("M103 277 L360 277 L232 32 Z");
triangulo.attr({ "stroke-width": 5, stroke: "#74fc7d", fill: "#00b30d" });

const paperTrianguloBase = Raphael(trianguloBaseContenedor);
let trianguloBase = paperTrianguloBase.path("M32 400 L432 400 L250 32 Z");
trianguloBase.attr({ "stroke-width": 5, stroke: "#74fc7d", fill: "#00b30d" });

// alert(contenedorTriangulo.clientHeight);
// alert(contenedorTriangulo.clientWidth);

// alert(trianguloBaseContenedor.clientHeight);
// alert(trianguloBaseContenedor.clientWidth);

const triangulosPorLado = document.querySelector("#triangulosPorLado");

triangulosPorLado.addEventListener("click", () => {
  alert("click");
});
