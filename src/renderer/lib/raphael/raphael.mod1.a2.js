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

let cuadradoEjemplo = cuadrilateroPaper.rect(96, 32, 250, 250);
cuadradoEjemplo.attr(cuadrilateroAtributos);
let rectanguloEjemplo = cuadrilateroPaper.rect(496, 32, 400, 250);
rectanguloEjemplo.attr(cuadrilateroAtributos);

const cuadrado = document.querySelector("#cuadrado");

const cuadradoPaper = Raphael(cuadrado);
let cuadradoForma = cuadradoPaper.rect(116, 64, 400, 400);
cuadradoForma.attr(cuadrilateroAtributos);

const rectangulo = document.querySelector("#rectangulo");

const rectanguloPaper = Raphael(rectangulo);
let rectanguloForma = rectanguloPaper.rect(116, 128, 450, 300);
rectanguloForma.attr(cuadrilateroAtributos);
