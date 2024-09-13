const paralelogramaAtributos = {
  fill: "#ff6612",
  stroke: "#fd8e51",
  "stroke-width": 5,
};

const atributosTexto = {
  "font-weight": 500,
  "font-size": 32,
  fill: "#fd8e51",
  stroke: "black",
};
const paralelogramaEjemplo = document.querySelector("#paralelogramaEjemplo");
const paperParalelogramaEjemplo = Raphael(paralelogramaEjemplo);

let paralelogramaEjemploFigura = paperParalelogramaEjemplo.path(
  "M64 430 L452 430 L516 64 L128 64 Z"
);

paralelogramaEjemploFigura.attr(paralelogramaAtributos);

const paralelogramaCalculos = document.querySelector("#paralelogramaCalculos");
const paperParalelogramaCalculos = Raphael(paralelogramaCalculos);

let paralelogramaCalculosArea = paperParalelogramaCalculos.path(
  "M32 330 L352 330 L416 32 L128 32 Z"
);

paralelogramaCalculosArea.attr(paralelogramaAtributos);

let paralelogramaCalculosPerimetro = paperParalelogramaCalculos.path(
  "M482 330 L802 330 L866 32 L578 32 Z"
);

paralelogramaCalculosPerimetro.attr(paralelogramaAtributos);

let linea1 = paperParalelogramaCalculos.path("M128 32 L128 330");
let linea2 = paperParalelogramaCalculos.path("M578 32 L578 330");

let altura = paperParalelogramaCalculos
  .text(180, 180, "Altura")
  .attr(atributosTexto);

let a = paperParalelogramaCalculos.text(870, 180, "B").attr(atributosTexto);
let b = paperParalelogramaCalculos.text(650, 360, "A").attr(atributosTexto);
