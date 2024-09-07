const atributos = {
  "stroke-width": 5,
  stroke: "#005495",
  fill: "#6dcfff",
};
const atributosLetras = {
  fill: "#6dcfff",
  "font-weight": "bold",
  "font-size": 24,
};

const perimetroTriangulo1Container = document.querySelector(
  "#perimetroTriangulo1Container"
);
const paperTrianguloPerimetro1 = Raphael(perimetroTriangulo1Container);

const trianguloEquilatero = paperTrianguloPerimetro1.path(
  "M10 320 L440 320 L234 10 Z"
);
trianguloEquilatero.attr(atributos);
let lado1 = paperTrianguloPerimetro1.text(100, 100, "5cm");
let lado2 = paperTrianguloPerimetro1.text(350, 100, "5cm");
let lado3 = paperTrianguloPerimetro1.text(225, 350, "5cm");

let setLetras = paperTrianguloPerimetro1.set();
setLetras.push(lado1, lado2, lado3);
setLetras.forEach((letra) => {
  letra.attr(atributosLetras);
});

const perimetroTriangulo2Container = document.querySelector(
  "#perimetroTriangulo2Container"
);
const paperTrianguloPerimetro2 = Raphael(perimetroTriangulo2Container);

const trianguloIsosceles = paperTrianguloPerimetro2.path(
  "M100 320 L340 320 L234 10 Z"
);
trianguloIsosceles.attr(atributos);
lado1 = paperTrianguloPerimetro2.text(100, 100, "6cm");
lado2 = paperTrianguloPerimetro2.text(350, 100, "6cm");
lado3 = paperTrianguloPerimetro2.text(225, 350, "8cm");
setLetras.clear();
setLetras = paperTrianguloPerimetro2.set();
setLetras.push(lado1, lado2, lado3);
setLetras.forEach((letra) => {
  letra.attr(atributosLetras);
});

const areaTrianguloContainer = document.querySelector(
  "#areaTrianguloContainer"
);
const paperAreaTriangulo = Raphael(areaTrianguloContainer);

const triangulo = paperAreaTriangulo.path("M50 320 L390 320 L234 10 Z");
const lineaAltura = paperAreaTriangulo.path("M234 10 234 320");
lineaAltura.attr({ "stroke-width": 5, stroke: "#005495" });
triangulo.attr(atributos);
lado1 = paperAreaTriangulo.text(200, 160, "6cm");
lado2 = paperAreaTriangulo.text(225, 350, "10cm");
setLetras.clear();
setLetras = paperAreaTriangulo.set();
setLetras.push(lado1, lado2);
setLetras.forEach((letra) => {
  letra.attr(atributosLetras);
});
lado1.attr({ fill: "#005495" });

const cuadradoPerimetroContainer = document.querySelector(
  "#cuadradoPerimetroContainer"
);
const paperCuadradoPerimetro = Raphael(cuadradoPerimetroContainer);
const cuadradoPerimetro = paperCuadradoPerimetro.rect(100, 70, 250, 250);
cuadradoPerimetro.attr(atributos);
lado1 = paperCuadradoPerimetro.text(32, 160, "8cm");
lado2 = paperCuadradoPerimetro.text(225, 30, "8cm");
lado3 = paperCuadradoPerimetro.text(400, 160, "8cm");
let lado4 = paperCuadradoPerimetro.text(225, 340, "8cm");
setLetras = paperCuadradoPerimetro.set();
setLetras.push(lado1, lado2, lado3, lado4);
setLetras.forEach((letra) => {
  letra.attr(atributosLetras);
});
setLetras.clear();

const rectanguloPerimetroContainer = document.querySelector(
  "#rectanguloPerimetroContainer"
);
const paperRectanguloPerimetro = Raphael(rectanguloPerimetroContainer);
const rectanguloPerimetro = paperRectanguloPerimetro.rect(10, 30, 400, 300);
rectanguloPerimetro.attr(atributos);
lado1 = paperRectanguloPerimetro.text(440, 160, "5cm");
lado2 = paperRectanguloPerimetro.text(225, 350, "10cm");
lado1.attr(atributosLetras);
lado2.attr(atributosLetras);

const cuadradoAreaContainer = document.querySelector("#cuadradoAreaContainer");
const paperCuadradoArea = Raphael(cuadradoAreaContainer);
const cuadradoArea = paperCuadradoArea.rect(40, 60, 300, 300);
cuadradoArea.attr(atributos);
lado1 = paperCuadradoArea.text(390, 200, "6cm");
lado1.attr(atributosLetras);

const rectanguloAreaContainer = document.querySelector(
  "#rectanguloAreaContainer"
);
const paperRectanguloArea = Raphael(rectanguloAreaContainer);
const rectanguloArea = paperRectanguloArea.rect(10, 30, 400, 300);
rectanguloArea.attr(atributos);
lado1 = paperRectanguloArea.text(440, 160, "7cm");
lado2 = paperRectanguloArea.text(225, 350, "12cm");
lado1.attr(atributosLetras);
lado2.attr(atributosLetras);
