/* ---------------------------------------------------------------------------------
------------------------------------CUADRADO A2-------------------------------------
--------------------------------------------------------------------------------- */
const cuadrilateros = document.querySelector("#cuadrilateros");
const cuadrilateroPaper = Raphael(cuadrilateros);
const cuadrilateroAtributos = {
  fill: "#fe00f5",
  stroke: "#ff7afa",
  "stroke-width": 5,
};

const atributosTexto = {
  "font-weight": 500,
  "font-size": 20,
  fill: "#fe00f5",
};

let cuadradoEjemplo = cuadrilateroPaper.rect(96, 32, 250, 250);
cuadradoEjemplo.attr(cuadrilateroAtributos);
let rectanguloEjemplo = cuadrilateroPaper.rect(496, 32, 400, 250);
rectanguloEjemplo.attr(cuadrilateroAtributos);

const cuadrado = document.querySelector("#cuadrado");

const cuadradoPaper = Raphael(cuadrado);
let cuadradoForma = cuadradoPaper.rect(116, 64, 400, 400);
cuadradoForma.attr(cuadrilateroAtributos);
let textoCuadrado = cuadradoPaper.text(80, 250, "Lado").attr(atributosTexto);

const rectangulo = document.querySelector("#rectangulo");

const rectanguloPaper = Raphael(rectangulo);
let rectanguloForma = rectanguloPaper.rect(116, 128, 450, 300);
rectanguloForma.attr(cuadrilateroAtributos);
let textoRectangulo1 = rectanguloPaper
  .text(320, 450, "Base")
  .attr(atributosTexto);
let textoRectangulo2 = rectanguloPaper
  .text(80, 250, "Altura")
  .attr(atributosTexto);
