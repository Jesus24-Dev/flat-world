const rombo = document.querySelector("#rombo");
const rectangulo = document.querySelector("#rectangulo");
const trapecioIsosceles = document.querySelector("#trapecioIsosceles");
const cuadrado = document.querySelector("#cuadrado");
const triangulo = document.querySelector("#triangulo");
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

const romboPaper = Raphael(rombo);
const romboFigura = romboPaper.path("M64 92 L116 180 L168 92 L116 5 Z");
romboFigura.attr(atributos);

const rectanguloPaper = Raphael(rectangulo);
const rectanguloFigura = rectanguloPaper.rect(32, 32, 168, 121);
rectanguloFigura.attr(atributos);

const trapecioIsoscelesPaper = Raphael(trapecioIsosceles);
const trapecioIsoscelesFigura = trapecioIsoscelesPaper.path(
  "M32 120 L200 120 L160 25 L72 25 Z"
);
trapecioIsoscelesFigura.attr(atributos);

const cuadradoPaper = Raphael(cuadrado);
const cuadradoFigura = cuadradoPaper.rect(32, 5, 170, 170);
cuadradoFigura.attr(atributos);

const trianguloPaper = Raphael(triangulo);
const trianguloFigura = trianguloPaper.path("M16 179 L216 179 L116 16 Z");
trianguloFigura.attr(atributos);
