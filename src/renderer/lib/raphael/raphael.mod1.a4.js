const paralelogramaAtributos = {
  fill: "#ff6612",
  stroke: "#fd8e51",
  "stroke-width": 5,
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
